import { StyleSheet, Text, View } from "react-native";
import TabHeader from "../../components/TabHeader";
import colors from "../../assets/color/colors";
import icons from "../../assets/iconApp/icons";

const Notification = () => {
    const title = 'Thông báo';
    return (
        <View>
            <TabHeader title={title} />
        </View>
    );
};

const styles = StyleSheet.create({
    contai_header: {
        width: '100%',
        height: 50,
        backgroundColor: colors.danger,
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center'
    }
});

export default Notification
