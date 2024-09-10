import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import TabHeader from "../../components/TabHeader";
import { useState } from "react";
import styles from "./SearchStyle";
import MyStyle from "../../components/style";
import colors from "../../assets/color/colors";
const Search = () => {
    const title = "Tìm kiếm";
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TabHeader title={title} />
            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={styles.contai_search}>
                        <TextInput
                            style={{ fontSize: 19 }}
                            placeholder="Tìm kiếm..."
                            multiline={true} // Cho phép nhập nhiều dòng
                        />
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

                <View style={styles.item_notifi}>
                    <Image
                        style={styles.image_avatar}
                        source={{ uri: 'https://i.pinimg.com/564x/7d/2d/c5/7d2dc513fc506bd9ad6cf3847b7326c2.jpg' }} />
                    <View>
                        <Text style={MyStyle.fullname}>YJhone EBan</Text>
                        <Text>@jhonEban - Có 100 người theo giỏi</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
};

export default Search
