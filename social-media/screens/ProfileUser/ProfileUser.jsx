import React from 'react';
import { Image, Text, View, Dimensions, ScrollView, TouchableHighlight, TouchableHighlightComponent, TouchableHighlightBase, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './ProfileStyle';
import colors from '../../assets/color/colors';
import icons from '../../assets/iconApp/icons';

const ProfileUser = ({ navigation }) => {

    const PostRoute = () => (
        <View style={styles.scene}>
            <Text>Image Tab</Text>
        </View>
    );

    const MediaRoute = () => (
        <View style={styles.scene}>
            <Text>Video Tab</Text>
        </View>
    );

    const LikeRoute = () => (
        <View style={styles.scene}>
            <Text>Like Tab</Text>
        </View>
    );

    const renderScene = SceneMap({
        post: PostRoute,
        media: MediaRoute,
        like: LikeRoute,
    });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'post' },
        { key: 'media' },
        { key: 'like' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.gold }}
            style={{ backgroundColor: colors.white }}
            renderLabel={({ route, focused }) => {
                let iconUri;
                let iconColor = focused ? colors.gold : colors.black;

                switch (route.key) {
                    case 'post':
                        iconUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmklEQVR4nO3aW27CQAyF4bOIkHW1KAsqsD4uS6Ghr60rpKB2qKLiKBMh+/+keSuckY1fOpYAAAAAAAAAAAAAAAAgtZJ2ko6SPiTZg+f6t4fhsytHIdvgeS6dpN5xqbHzLmlNnr/4XzMU/3Y+/2lCFzzPpZ3pl39/ziPjGj3PbVfhcrezSZjndqp4wUPCPLdLxQv2CfPcrPLJlucWvSBGA0o0IFlBjAko0YBkBTEmoEQDkhXEmIASDUhWEHv2Cajxn8LfbwPZ8tyOFS+4T5jntq14wbeEeW6rYZRqPFg0CfMmWQ/PbHNd7vpdL4nzJjfhPNMv45W8aZrhmW3vfMjoh89snGPZBM8DAOBh0Xc1W3ZD8+yiukTf1ezYDf3BbmiyXc3dwnlu0Xc1TwvnuUXf1bwsnOdmlU+2PLfoBTEaUKIByQpiTECJBiQriDEBJRqQrCDGBJRoQLKC2LNPQPRdzX7hPLfou5rHhfPcou9qbhfOc4u+q7liN/QvdkNHisJuqGbbfZ0k+q5mw24oAAAAAAAAAAAAAACAZvANULVxp2AtRnQAAAAASUVORK5CYII=';
                        break;
                    case 'media':
                        iconUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO3XgW3FMAzE0Nt/1C6hTmDgFw16VvMIaACTUeIkAAAAALCfedlcT1vQCCLI1bSf2LEhAAD8jPbHdC6fP6d94Ll8BEk/giDpi78mCAAAn/Jl8hsHj9O+tczyEST9CIKkL16Q9GULkr5gQdKXKkj6ItcGect1+YQgEcSG5IwNiQ2pv79n8TxO+0CzfARJP4Ig6YsXJH3ZgqQvWJD0pQqSvsi1Qd5yXT4hSASxITljQ2JD6u/vWTyP0z7QLB9B0o8gSPriBUlftiDpCxYkfamCpC9ybZC3XJdPCBJBbEjO2JDYkPr7exbP47QPNMtHkPQjCJK+eEHSly1I+oIFSV+qIOmLXBvkLdflE4JEEBuSMzYkNqT+/p7F8zjtA83yEST9CIKkL16Q9GULkr5gQdKXKkj6Iq8NAgDAp/goXeZTkGcR5DIE+e9BTLo/igLkrj93QSLIvOhBAAAAAIDcwDfjijZNPwmSswAAAABJRU5ErkJggg==';
                        break;
                    case 'like':
                        iconUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEg0lEQVR4nO2dS6hXVRSHv5vVLSx7CAUNKzOqa1RaUs56QbcGETSsCLIGgQOhaNYw6aFWVE4bFBbSJIqoJEqT6N2kl1lYGOpNiB6m6V2xYBly8e95/M/eZ51z1gcLxMd1rfXb+5z9WHsfCIIgCIIgCIIgCIIgCIIgCIIiFgP3A88D7wLbgX3AQeAfYK/9nv7Z08BKYFHGtC6y//OZo/ybAQ6Yj/uO8u85i+UiOsYS4EngZ0Bq2nZgLXBpAv8uA9YBP4zh307gCYvVJRPANLB1jCBlhL0P3NqAj7cBHyTwbwtwi+XABVcBHyUIVI4hzDU1/FueSIi5tg24khY5xbr+oQzBitlhYA0wWcI//TuP27/J5d8he9SW8a9RLgQ+yxiozLEvgfOP498FwFct+vep+ZCFZTY6kpZtBlgx4hG124F/OkK7LrUYNwF/OghWzP4Gbpjj334Hfh0xzdWNqcS42pkYYvaXtUT17w+n/l2b4p3xm4Pg5DiPrxkHfoyyvQXvvEpM2kuq7aCk4/ZxU6OvdQ6CkZ6Yzu7HnvTlnGdIz01zeUVdMSYyzcCHZlvqCjLtwHnpqd1cR5AUC4Vh/L8uV3mJOpJH0hxMVRFE9zNCEJLmQBdJSzPO5lIYpXLwU5Vt10gqWXKgKyCFPBCCkKtB6n5+IVqQED2ELDl4towgm0MQcjXIt8sI8mMIQi5BtPKlEM/L7NIz02X5Qg44cFQGYlosGILQMUE8FDDIQEyLMQoZp8QyjEo5+L6MIF9EYsnVsHRrvJC3QhByCfJmGUFiD51sguiqeiH3RQ8hlyD3lhFEi87i5UyWHGjZayGn2+mhEIWkOdAJ+GmU5L0QhNQNUo/JleaREITUgjxURRAt5opHFklzsKRqkdx3IQqpxPimzpnEh0MQUgmymhqcG6MtUo2uzqEmG6OX0LQgLzMGU5lPsUrPTXN5OWPyqoNApCf2Eg1wSZwRoamzIRfTEC84aF0yhBqssiwAfnEQlHTUdgFn0jB3OghMOmq3k4hNDoKTjtkrJES73Q4HQUqHjhycTYa7TqKYjkIxDpbdgGqCBx20PnFueqwjK+sdBC1O7Sla4ATgNQfBizN7HZhHS8wHPnSQBHFiWy0nrXJG3PiA2A17Z+EEHQ5/4qCFSkv2eY7hbVUWDrSnbPMoxhHmD6w2eLPVsblmciB7KBuBk+kIE1Yk0cfdxlngMRv2dw69Ivx3B0mUhkwv2byDjjPVkwXJnW1fJd70COwdB0mVMe63ql2645WT7DDQrIMES0mbtbvcT6TH6E3PvzpIthTYnoY+k9EJtPu/4SDpMsL08XoeA0OHxqucbXb9Czza1SFtkzuQHirtvwWWtp0ML5xqk63DLb24N1Q5XjYkVtgHwXIWIVzfdtDeWWAtdjZDeY6b/YsuMG0Vf00Lsct+dlBz42tDw71CVw2ClnvLnj4sCnqcTG6qWQUyuEleTu4u+S0sXSq/q21nh8Ji+5bhKDG+tg8KBJm/NLr+GGK86KE2asjcY98u3G+/DhywPGeleRAEQRAEAUX8B2A5rLzQ6lZvAAAAAElFTkSuQmCC';
                        break;
                    default:
                        iconUri = 'https://example.com/path/to/default-icon.png';
                }

                return (
                    <Image
                        source={{ uri: iconUri }}
                        style={{ width: 30, height: 30, tintColor: iconColor }} // Thay đổi màu của biểu tượng
                    />
                );
            }}
            labelStyle={{ display: 'none' }} // Ẩn tiêu đề văn bản
        />
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.contai_avatar}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'https://i.pinimg.com/236x/7e/33/83/7e338326ed695ec0ccc28283ce81378b.jpg' }} />
                </View>

                <TouchableOpacity style={styles.contai_edit_avata}>
                    <Text style={{ fontSize: 13 }}>Update avatar <Image style={{ width: 10, height: 10 }} source={{ uri: icons.edit }} /></Text>
                </TouchableOpacity>

                <View style={styles.contai_name}>
                    <Text style={styles.full_name}>Êban Jhon Y</Text>
                    <Text style={styles.user_name}>EP@n47</Text>
                </View>

                <View style={styles.line_border} />
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
                <TabView
                    style={{ width: '100%', minHeight: 600 }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={renderTabBar}
                />
            </View>
        </ScrollView>
    );
}

export default ProfileUser;
