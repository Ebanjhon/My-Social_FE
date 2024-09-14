import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, FlatList, StyleSheet, RefreshControl, Alert, ActivityIndicator } from 'react-native'
import colors from '../../assets/color/colors';
import icons from '../../assets/iconApp/icons';
import styles from './HomeStyle';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTabBar } from '../../config/TabBarContext';
import { UserContext } from '../../config/Context';
import { authApi, endpoints } from '../../config/APIs';

const Home = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { state, dispatch } = useTabBar();
    const [posts, setPosts] = useState([]);
    const [user, dispatchUser] = useContext(UserContext);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false); // Trạng thái tải dữ liệu

    const hideTabBar = () => {
        dispatch({ type: 'HIDE_TAB_BAR' });
    };

    const showTabBar = () => {
        dispatch({ type: 'SHOW_TAB_BAR' });
    };

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.mediaUrl }} style={styles.image} />
    );

    // hàm refresh lại cuộng từ trên xuống
    const onRefresh = () => {
        setPage(0);
        setPosts([]);
        loadPost();
        // Khi bắt đầu kéo để refresh, đặt trạng thái refreshing thành true
        setRefreshing(true);

        // Giả lập việc tải lại dữ liệu trong 2 giây
        setTimeout(() => {
            // Khi đã tải lại xong, đặt lại refreshing thành false
            setRefreshing(false);
        }, 1000);
    };
    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, ...newPost]);
    };

    // hàm cuộn từ dưới lên
    const loadMorePosts = () => {
        if (loading) return;  // Nếu đang tải hoặc không còn dữ liệu thì không gọi nữa
        setLoading(true);
        loadPost();
        setLoading(true);
    };

    // hàm định dạng ngày
    const formatDate = (dateString) => {
        // Chuyển chuỗi ngày giờ thành đối tượng Date
        const date = new Date(dateString);

        // Lấy giờ và phút
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Lấy ngày, tháng, năm
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần +1
        const year = date.getFullYear();

        // Định dạng thành chuỗi như mong muốn "phút:giờ yyyy-mm-dd"
        const formattedDate = `${minutes}:${hours} ${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        return formattedDate;
    };

    // gọi api lấy dữ liệu
    const loadPost = async () => {
        const api = await authApi();
        const response = await api.get(endpoints['loadPost'](user.id, page));

        if (response.status === 200) {
            addPost(response.data.content);
            setPage(page + 1);
            setLoading(false);
        } else if (response.status === 204) {
            setLoading(false);
            console.log("hết dữ liệu!");
        }
        else {
            console.log("error");
            setLoading(false);
        }
    };

    // khoi tạo hook chay dau tien

    useEffect(() => {
        loadPost();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                showsVerticalScrollIndicator={false}  // Tắt thanh cuộn dọc
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} // Gọi hàm refresh khi kéo xuống
                        colors={[colors.primary]} // Màu của biểu tượng khi refresh
                    />
                }
                onEndReached={loadMorePosts}
                // onEndReachedThreshold={0.7} // Tỉ lệ danh sách còn lại trước khi gọi hàm (0.5 = 50%)
                // ListFooterComponent={
                //     <View style={{ padding: 10 }}>
                //         {loading ? (
                //             <ActivityIndicator size="small" />
                //         ) : (
                //             !hasMoreData && <Text style={{ textAlign: 'center' }}>Đã tải hết dữ liệu</Text>
                //         )}
                //     </View>
                // }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.contain}>
                        <View style={styles.post_infor}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 15 }}
                                source={{
                                    uri: item.avatar === ""
                                        ? 'https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg'
                                        : item.avatar
                                }} />

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.username}</Text>
                                <Text style={{ fontSize: 17, color: colors.gray }}>{formatDate(item.dateCreated)}</Text>
                            </View>
                        </View>

                        <View style={{ width: 'auto', paddingLeft: 10, paddingRight: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 18, color: colors.dark }}>{item.content}</Text>
                        </View>

                        <View style={styles.post_contain}>
                            {/* // hiển thị ảnh */}

                            <View style={styles.contai_image}>
                                <FlatList
                                    data={item.medias}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}

                                    contentContainerStyle={{
                                        paddingLeft: '12%'
                                    }}
                                />
                            </View>

                            <View style={styles.contain_action}>
                                <TouchableOpacity
                                    style={styles.btn_follow}
                                    activeOpacity={0.3}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: colors.info }}>Folow</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={styles.btn_cmt}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: colors.info }}>Comment</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={styles.btn_like}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: colors.danger }}>100</Text>
                                    <Image
                                        style={{ width: 35, height: 35, tintColor: colors.gold }}
                                        source={{ uri: icons.like }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}

                ListHeaderComponent={
                    <>
                        <View style={styles.contai_head}>
                            <View style={styles.add_post}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{ uri: icons.add_icon }} />
                            </View>
                            <View>
                                <Text style={styles.logo}>BanaNo</Text>
                            </View>
                            <View style={styles.message}>
                                <Image style={{ width: 40, height: 40 }}
                                    source={{ uri: icons.mess_icon }} />
                            </View>
                        </View>
                        <View style={styles.line_border} />
                    </>
                }
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center',
                    width: '100%',
                    paddingBottom: 90
                }}
            />
        </View>
    );
};

export default Home;