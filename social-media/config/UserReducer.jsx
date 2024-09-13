const UserReducer = (user, action) => {
    switch (action.type) {
        case "login": {
            return action.payload;
        }
        case "logout": {
            return null;
        }
        default:
            return user;
    }
    // return user;
}

export default UserReducer