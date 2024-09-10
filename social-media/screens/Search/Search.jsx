import { ScrollView, Text, TextInput, View } from "react-native";
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
            <ScrollView>
                <View style={styles.contai_search}>
                    <TextInput
                        value={text}
                        // onChangeText={handleChangeText}
                        placeholder="Tìm kiếm..."
                        multiline={true} // Cho phép nhập nhiều dòng
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default Search
