import React, { Component } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './HomeStyle'
import icons from '../../assets/iconApp/icons'
import colors from '../../assets/color/colors'

export class Home extends Component {
    render() {
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
                    <View style={styles.contain}>
                        <View style={{ width: '95%', marginBottom: 5, display: 'flex', flexDirection: 'row' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                                source={{ uri: 'https://storage.googleapis.com/ebansocialmedia/457740793_1928542380993494_2075730217626607561_n.jpg' }} />

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 18 }}>Nguyễn Văn A</Text>
                                <Text style={{ fontSize: 17, color: colors.gray }}>9/9/2024 - eban123</Text>
                            </View>

                            <View>
                                <TouchableOpacity
                                    style={styles.btn_follow}
                                    activeOpacity={0.3}>
                                    <Text>follow</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.post_contain}>
                            <Image
                                style={styles.media}
                                source={{ uri: 'https://i.pinimg.com/736x/09/05/50/0905501e3eae0d8f1e8170913afd0c72.jpg' }} />

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_cmt}>
                                <Image
                                    style={{ width: 30, height: 30, tintColor: colors.black }}
                                    source={{ uri: icons.comment }} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_share}>
                                <Text style={{ fontSize: 18, fontWeight: '700' }}>Share</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_like}>

                                <Image
                                    style={{ width: 35, height: 35, tintColor: colors.gold }}
                                    source={{ uri: icons.like }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line_border} />

                    <View style={styles.contain}>
                        <View style={{ width: '95%', marginBottom: 5, display: 'flex', flexDirection: 'row' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 10 }}
                                source={{ uri: 'https://i.pinimg.com/236x/54/a0/18/54a018834f808e08ab4c862c4078c543.jpg' }} />

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 18 }}>Nguyễn Văn A</Text>
                                <Text style={{ fontSize: 17, color: colors.gray }}>9/9/2024</Text>
                            </View>

                            <View>
                                <TouchableOpacity
                                    style={styles.btn_follow}
                                    activeOpacity={0.3}>
                                    <Text>follow</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.post_contain}>
                            <Image
                                style={styles.media}
                                source={{ uri: 'https://i.pinimg.com/736x/09/05/50/0905501e3eae0d8f1e8170913afd0c72.jpg' }} />

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_cmt}>
                                <Image
                                    style={{ width: 30, height: 30, tintColor: colors.black }}
                                    source={{ uri: icons.comment }} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_share}>
                                <Text style={{ fontSize: 18, fontWeight: '700' }}>Share</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.btn_like}>

                                <Image
                                    style={{ width: 35, height: 35, tintColor: colors.gold }}
                                    source={{ uri: icons.like }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line_border} />
                </View>
            </ScrollView>
        )
    }
}

export default Home
