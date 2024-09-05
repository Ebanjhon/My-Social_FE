import { Button, Text, View } from "react-native";

const UserSeting = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Logout')}
            />
        </View>
    )
};

export default UserSeting