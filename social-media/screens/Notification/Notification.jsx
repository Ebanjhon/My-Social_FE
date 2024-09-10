import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TabHeader from "../../components/TabHeader";
import colors from "../../assets/color/colors";
import icons from "../../assets/iconApp/icons";
import styles from "./NotifiStyle";

const Notification = () => {
    const title = 'Thông báo';
    return (
        <SafeAreaView style={styles.container}>
            <TabHeader title={title} />
            <ScrollView>
                <View style={styles.item_contai}>
                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item_notifi}>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Notification
