import React, { Component, useState } from 'react'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import styles from './LoginStyle';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import APIs, { apiWithoutAuth, authApi, endpoints } from '../../config/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { UserContext } from '../../config/Context';

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
            <Text style={styles.title}>Đăng nhập</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={loginPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login