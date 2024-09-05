import { useContext, useEffect } from "react"
import { UserContext } from "../../config/Context";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Logout = ({ navigation }) => {
    const [userCurrent, dispatch] = useContext(UserContext);

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await AsyncStorage.removeItem('token');
                dispatch({ type: 'logout' });
                navigation.navigate('Intro');
                // Thực hiện điều hướng hoặc thông báo đăng xuất thành công nếu cần
            } catch (error) {
                console.error('Error logging out:', error);
            }
        };

        handleLogout();
    }, []);

    return null; // Bạn có thể trả về một thông báo hoặc chuyển hướng ở đây nếu cần
};

export default Logout