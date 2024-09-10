import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'
import colors from '../../assets/color/colors';
import icons from '../../assets/iconApp/icons';
import styles from './HomeStyle';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTabBar } from '../../config/TabBarContext';


const imageData = [
    { id: '1', uri: 'https://i.pinimg.com/564x/bb/0c/09/bb0c09c3106d974d9e963f5545ed41d4.jpg' },
    { id: '2', uri: 'https://i.pinimg.com/736x/48/45/e9/4845e91359ccfe633dfb4f29e021ba27.jpg' },
    { id: '3', uri: 'https://i.pinimg.com/736x/9f/28/f6/9f28f6e1f806ce53d7c00547e2ae3d9b.jpg' },
    { id: '4', uri: 'https://i.pinimg.com/564x/6b/68/09/6b6809415cd8af2818112358dd205e6f.jpg' },
];

const Home = () => {
    const { state, dispatch } = useTabBar();

    const hideTabBar = () => {
        dispatch({ type: 'HIDE_TAB_BAR' });
    };

    const showTabBar = () => {
        dispatch({ type: 'SHOW_TAB_BAR' });
    };

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} />
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* head */}
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
                {/* body */}
                <View style={styles.line_border} />

                {/* item */}

                <View style={styles.contain}>
                    <View style={{ width: '95%', marginBottom: 5, display: 'flex', flexDirection: 'row' }}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 15 }}
                            source={{ uri: 'https://i.pinimg.com/236x/54/a0/18/54a018834f808e08ab4c862c4078c543.jpg' }} />

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Nguyễn Văn A</Text>
                            <Text style={{ fontSize: 17, color: colors.gray }}>14 Tháng 3</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.btn_follow}
                                activeOpacity={0.3}>
                                <Text>follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ fontSize: 18, color: colors.dark }}>Không ai thực sự mang lại hạnh phúc cho bạn, cho đến khi bạn tự làm bản thân hạnh phúc trước.💕🌷🌻</Text>
                    </View>
                    <View style={styles.post_contain}>
                        <View style={styles.contai_image}>
                            <FlatList
                                data={imageData}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={styles.btn_cmt}>
                            <Image
                                style={{ width: 30, height: 30, tintColor: colors.gray }}
                                source={{ uri: icons.comment }} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={styles.btn_share}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.gray }}>Share</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={styles.btn_like}>
                            <Text>100</Text>
                            <Image
                                style={{ width: 35, height: 35, tintColor: colors.gold }}
                                source={{ uri: icons.like }} />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </ScrollView>
    )

};

export default Home;