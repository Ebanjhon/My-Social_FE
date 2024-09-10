import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import TabHeader from "../../components/TabHeader";
import { useState } from "react";
import styles from "./SearchStyle";
import colors from "../../assets/color/colors";
const Search = () => {
    const title = "Tìm kiếm";
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TabHeader title={title} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={60}>
                <ScrollView>
                    <View style={styles.contai_search}>
                        <TextInput
                            style={{ fontSize: 19 }}
                            placeholder="Tìm kiếm..."
                            multiline={true} // Cho phép nhập nhiều dòng
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
};

export default Search
