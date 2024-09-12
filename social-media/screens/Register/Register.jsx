import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native'
import { Text, View } from 'react-native'
import colors from '../../assets/color/colors';
import icons from '../../assets/iconApp/icons';

export class Register extends Component {
    render() {
        return (
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.logo}>Welcome</Text>
                    <Text style={styles.text}>Đăng ký và tham gia cùng bạn bè</Text>
                </View>
                <View style={styles.contai_form}>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>UserName</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: icons.username }} />
                            <TextInput
                                placeholder='Tên người dùng'
                                style={styles.text_input}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>FirstName</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: icons.firstname }} />
                            <TextInput
                                placeholder='Tên'
                                style={styles.text_input}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>LastName</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: icons.lastname }} />
                            <TextInput
                                placeholder='Họ'
                                style={styles.text_input}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>Email</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: icons.email }} />
                            <TextInput
                                placeholder='Email liên hệ'
                                style={styles.text_input}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>Phone</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: icons.phone }} />
                            <TextInput
                                placeholder='Số điện thoại'
                                style={styles.text_input}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>Password</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={{ uri: icons.pass }} />
                            <TextInput
                                secureTextEntry={true}
                                placeholder='Nhập mật khẩu'
                                style={styles.text_input}>

                            </TextInput>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={require('../../assets/images/iconhide.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '90%' }}>
                        <Text style={styles.text_show}>Password Again</Text>
                        <View style={styles.input_contai}>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={{ uri: icons.pass }} />
                            <TextInput
                                secureTextEntry={true}
                                placeholder='Nhập lại mật khẩu'
                                style={styles.text_input}>

                            </TextInput>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={require('../../assets/images/iconsee.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 43,
        color: colors.gold,
        fontWeight: '900'
    },
    text: {
        fontSize: 17,
        color: colors.gray,
    },
    contai: {

        justifyContent: 'flex-end'
    },
    contai_form: {
        width: '100%',
        height: 'auto',
        alignItems: 'center'
    },
    input_contai: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 30,
        padding: 8,
        borderColor: colors.gold,

    },
    text_input: {
        fontSize: 19,
        width: '80%',
        paddingLeft: 5,
        fontWeight: '500'
    },
    text_show: {
        fontSize: 17,
        fontWeight: '500',
        color: colors.dark
    }

});

export default Register

// https://icons8.com/icons/3d-fluency