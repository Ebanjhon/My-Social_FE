import React, { Component, useRef, useState } from 'react'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import styles from './LoginStyle';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import APIs, { apiWithoutAuth, authApi, endpoints } from '../../config/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { UserContext } from '../../config/Context';
import FloatingLabelInput from '../../components/FloatingLabelInput';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, dispatch] = useContext(UserContext);

    const loginPress = async () => {
        try {
            // Gọi API để đăng nhập
            const response = await apiWithoutAuth.post(endpoints.login, {
                username,
                password,
            });

            if (response.status === 200) {
                // Lưu token vào AsyncStorage
                await AsyncStorage.setItem('token', response.data.jwtToken);

                // Lấy token từ AsyncStorage và gọi API để lấy thông tin người dùng
                const api = await authApi(); // Đợi authApi hoàn thành và lấy instance axios
                const userResponse = await api.get(endpoints['current-user']);
                // Lưu user vào AsyncStorage
                await AsyncStorage.setItem('user', JSON.stringify(userResponse.data));
                console.log(userResponse.data);
                // Cập nhật trạng thái ứng dụng
                dispatch({
                    type: 'login',
                    payload: userResponse.data,
                });
            } else {
                throw new Error(`Login failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>

            <View style={{ padding: 16, width: '95%' }}>
                <FloatingLabelInput
                    label="Username"
                    value={username}
                    setValue={setUsername}
                    isPassword={false}
                />
                <FloatingLabelInput
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    isPassword={true}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={loginPress}>
                <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>

            <Button
                title="Đăng lý tài khoản"
                onPress={() => navigation.navigate('Register')} // Chuyển đến màn hình Details
            />
        </View>
    );
};

export default Login