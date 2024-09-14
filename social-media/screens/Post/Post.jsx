import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./PostStyle";
import SlideUpView from "./SlideUp";
import React, { useContext, useReducer, useState } from "react";
import colors from "../../assets/color/colors";
import icons from '../../assets/iconApp/icons';
import * as ImagePicker from 'expo-image-picker';
import UserReducers from '../../config/UserReducer';
import { authApi, endpoints } from "../../config/APIs";
import { UserContext } from "../../config/Context";
import Toast from 'react-native-toast-message';
const Post = ({ navigation }) => {
    const [content, setContent] = React.useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, dispatch] = useContext(UserContext);

    // lấy ảnh
    const pickImages = async () => {
        setLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true,
            selectionLimit: 10,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            const selectedImages = result.assets || [];
            setImages(selectedImages);
        }
        setLoading(false);
    };

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);  // Xóa phần tử tại vị trí 'index'
        setImages(updatedImages);  // Cập nhật state
    };
    // đăng bài viết

    const createPost = async () => {
        // console.log(user.id);
        try {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Hello',
                text2: 'This is a toast message',
            });
        } catch (error) {
            console.error('Toast error:', error);
        }

        let formData = new FormData();

        // Thêm dữ liệu userId và content vào form
        formData.append('userId', user.id);
        formData.append('content', content);
        // Thêm từng ảnh vào FormData
        images.forEach((image, index) => {
            const file = {
                uri: image.uri, // Đường dẫn đến ảnh trên thiết bị
                type: 'image/jpeg', // Loại MIME của ảnh
                name: `photo_${index}.jpg`, // Tên ảnh
            };
            formData.append('files', file);
        });

        try {
            const api = await authApi();
            const response = await api.post(endpoints['create-post'], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setImages([]);
            setContent('');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    };

    return (
        <View style={styles.contai_post}>
            <SlideUpView>
                <View style={styles.head_post}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>Hủy</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Tạo bài viết</Text>

                    <TouchableOpacity onPress={createPost}>
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>Đăng</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.border_head} />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%', minHeight: 90 }}
                    data={images}
                    keyExtractor={(item, index) => index.toString()}  // Đảm bảo mỗi ảnh có key duy nhất
                    renderItem={({ item, index }) => (
                        <View style={styles.media_contai}>
                            <Image
                                style={styles.media}
                                source={{ uri: item.uri }} />
                            <TouchableOpacity style={styles.remove} onPress={() => removeImage(index)}>
                                <Image style={{ width: 30, height: 30 }} source={{ uri: icons.remove }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.edit_media}>
                                <Text style={{ fontSize: 18, fontWeight: '700' }}>Edit</Text>
                                <Image style={{ width: 30, height: 30 }} source={{ uri: icons.edit_img }} />
                            </TouchableOpacity>
                        </View>
                    )}
                    ListEmptyComponent={
                        loading && (
                            <View>
                                <Text>Loading...</Text>
                            </View>)
                    }
                    ListHeaderComponent={
                        <>
                            <View style={{ marginBottom: 7, flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 3 }}

                                    source={{
                                        uri: user.avatar === ""
                                            ? 'https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg'
                                            : user.avatar
                                    }} />
                                <View>
                                    <Text style={styles.text_name}>{user.firstName} {user.lastName}</Text>
                                    <Text style={{ marginLeft: 10, color: colors.gray }}>Bài viết đang ở chế độ công khai</Text>
                                </View>
                            </View>
                            <View style={styles.content_post}>
                                <TextInput
                                    style={styles.textInput}
                                    multiline={true}
                                    numberOfLines={3} // Số dòng hiển thị mặc định (có thể tuỳ chỉnh)
                                    value={content}
                                    onChangeText={(text) => setContent(text)}
                                    placeholder="Hãy nhập nội dung tại đây..."
                                />
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                {/* <View style={styles.border_content} /> */}
                                <View style={styles.get_media}>
                                    <TouchableOpacity style={styles.get_media_contain} onPress={pickImages}>
                                        <Text style={styles.textv1}>Ảnh/video</Text>
                                        <Image
                                            style={{ width: 35, height: 35, tintColor: colors.xam }}
                                            source={{ uri: icons.image }} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.get_media_contain}>
                                        <Text style={styles.textv1}>Chụp ảnh</Text>
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: colors.xam }}
                                            source={{ uri: icons.camera }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    }
                />
            </SlideUpView >
        </View >
    )
};

export default Post
