import React, { Component } from 'react'
import { Button, Image, Text, View, useWindowDimensions } from 'react-native'
import styles from './ProfileStyle'
// import { TabView, SceneMap } from 'react-native-tab-view';


const ProfileUser = ({ navigation }) => {
    // const FirstRoute = () => (
    //     <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
    // );

    // const SecondRoute = () => (
    //     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    // );

    // const renderScene = SceneMap({
    //     first: FirstRoute,
    //     second: SecondRoute,
    // });

    // const layout = useWindowDimensions();

    // const [index, setIndex] = React.useState(0);
    // const [routes] = React.useState([
    //     { key: 'first', title: 'First' },
    //     { key: 'second', title: 'Second' },
    // ]);

    return (
        <View style={styles.container}>
            {/* hiển thị ảnh */}
            <View style={styles.contai_avatar}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://i.pinimg.com/236x/7e/33/83/7e338326ed695ec0ccc28283ce81378b.jpg' }} />
            </View>

            <View style={styles.contai_name}>
                <Text style={styles.full_name}>Êban Jhon Y</Text>
                <Text style={styles.user_name}>EP@n47</Text>
            </View>

            <View style={styles.line_border} />
            {/* hiển thị các thông tin follow */}
            <View style={styles.contai_folow}>
                <View style={styles.contai_item_flow}>
                    <Text style={styles.title}>365</Text>
                    <Text style={styles.content}>Post</Text>
                </View>

                <View style={styles.contai_item_flow}>
                    <Text style={styles.title}>7M</Text>
                    <Text style={styles.content}>Follower</Text>
                </View>

                <View style={styles.contai_item_flow}>
                    <Text style={styles.title}>14</Text>
                    <Text style={styles.content}>Following</Text>
                </View>
            </View>

            <View style={styles.line_border} />
            {/* hiển thị các tab ảnh, video, story, tym */}
            {/* <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            /> */}
        </View>
    )
}

export default ProfileUser
