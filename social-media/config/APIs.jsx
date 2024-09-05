import axios from "axios";
import cookie from "react-cookies";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu token
// await AsyncStorage.setItem('token', token);

// Lấy token


// Xóa token
// await AsyncStorage.removeItem('token');

export const HOST = 'http://192.168.1.28:8080';

export const endpoints = {
    'login': '/auth/login',
    'current-user': '/api/curent-user',

}

export const authApi = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return axios.create({
            baseURL: HOST,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error; // Đảm bảo bạn xử lý lỗi trong mã gọi hàm này
    }
};

// Sử dụng axios bình thường cho các yêu cầu không cần token, như đăng nhập
export const apiWithoutAuth = axios.create({
    baseURL: HOST
});

export default apiWithoutAuth;
