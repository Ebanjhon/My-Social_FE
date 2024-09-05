const UserReducer = (user, action) => {
    switch (action.type) {
        case "login": {
            return action.payload;
        }
        case "logout": {
            return null;
        }
    }

    return user;
}

export default UserReducer

// Lấy thông tin user
// const userData = JSON.parse(await AsyncStorage.getItem('user'));

// // Xóa dữ liệu
// await AsyncStorage.removeItem('user');