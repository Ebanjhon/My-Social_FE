import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./PostStyle";
import SlideUpView from "./SlideUp";
import React from "react";
import colors from "../../assets/color/colors";
import icons from '../../assets/iconApp/icons';

const Post = ({ navigation }) => {
    const [content, setContent] = React.useState('');
    return (
        <View style={styles.contai_post}>
            <SlideUpView>
                <View style={styles.head_post}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>Hủy</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Tạo bài viết</Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>Đăng</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.border_head} />
                <ScrollView>
                    <View style={{ marginBottom: 7, flexDirection: 'row' }}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 3 }}
                            source={{ uri: 'https://i.pinimg.com/564x/39/32/4c/39324ca426146edd87cc67c941072e96.jpg' }} />
                        <View>
                            <Text style={styles.text_name}>Y Jhon Êban</Text>
                            <Text style={{ marginLeft: 10, color: colors.gray }}>Bài viết đang ở chế độ công khai</Text>
                        </View>
                    </View>
                    <View style={styles.content_post}>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={4} // Số dòng hiển thị mặc định (có thể tuỳ chỉnh)
                            value={content}
                            onChangeText={(text) => setContent(text)}
                            placeholder="Hãy nhập nội dung tại đây..."
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {/* <View style={styles.border_content} /> */}
                        <View style={styles.get_media}>
                            <TouchableOpacity style={styles.get_media_contain}>
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
                    <View style={styles.media_contai}>
                        <Image
                            style={styles.media}
                            source={{ uri: 'https://i.pinimg.com/564x/92/41/dc/9241dcdea1c6b49e2cc5a05f61fd0eeb.jpg' }} />
                        <TouchableOpacity style={styles.edit_media}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>Edit</Text>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: icons.edit_img }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.media_contai}>
                        <Image
                            style={styles.media}
                            source={{ uri: 'https://i.pinimg.com/736x/09/92/0d/09920d7dd3ecb3135c21de3f67fd1390.jpg' }} />
                        <TouchableOpacity style={styles.edit_media}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>Edit</Text>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: icons.edit_img }} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SlideUpView >
        </View >
    )
};

export default Post
