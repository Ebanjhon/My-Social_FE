import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component, useEffect, useReducer } from 'react';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import ProfileUser from '../screens/ProfileUser/ProfileUser';
import IntroApp from '../screens/Intro/IntroApp';
import UserReducers from '../config/UserReducer';
import { UserContext } from '../config/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logout from '../screens/Logout/Logout';
import colors from '../assets/color/colors';
import styles from './TabStyle';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Search from '../screens/Search/Search';
import Notification from '../screens/Notification/Notification';
import Post from '../screens/Post/Post';
import Icon from 'react-native-vector-icons/Ionicons'
import UserSeting from '../screens/ProfileUser/UserSetting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// icon 
const Images = {
    add: source = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO2dO04EQQxEKyIBchbuxp8j8LkLAXABPucBRLbABVYiKjSohQgAgbRue3fekyrZZNuubnvGwbQEAAAAAAAAAADwP9Yk7Uu6lfQoaSbJS6ZZi+1G0p6k1Sqb5EjSS4EEubOeJR1mJn5F0mWBRDhZly0X3TkvELyL6Cqj7GQH7WI66NlwnwsE7GJ6lbTew4CDAsG6qHZ7GHBXIFAX1fCIGs5TgUBdVA89DFjGlyzPSUNuwskO0sWFAcKA9F1oTkB+IkwJyk+GE0QPEAak70JzAvITYUpQfjKcIHqAMCB9F5oTEJuEN0nHkiZNJ+237OSPpgSdfLOu0wLrGo0Bk2/WtVFgXaMx4Cey14UBwgBOQDSVd5kLCAOEAZyASLJ3mBd0bRggDOAEzIPo2U400bOjcHrNdqKJmh2FE7HoifoTNTsKJ2LRm+rPFgbo04ChHPTmDAP0acBbM6HHSdhs/0UT1vzrbER5HEUPMAZggDkBogRRgkQPME2YJmyegsRjKI+h4j3A/5gdRc12eBHT32ZHUbMdDNDvs6Po2Q4GaLEUTnaALi4MEAak70JzAvITYUpQfjKcIHqAMCB9F5oTkJ8IU4Lyk+EE0QO05Abw0T7lfrTvscAuc1Hd9zDgtkCgLqrrHgbsFQjURbXdw4Dh5ohpgWBdTNOet2ocFgjYxTRc4dIVLnBQ3gUOA1xhoo/kX2RdYfL1PoEx9oRpRtn5idV2ecF1+4T7Mr6szVpsQ4w7la6xAgAAAAAAAAAALQTvnuOmKXUcxtYAAAAASUVORK5CYII=' },
    notifi: source = { uri: 'data:image/png;base64,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' },
    profile: source = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAH7UlEQVR4nO1dWYwWRRD+lmMRUGGRRRMPWAETDIgI4hEFBVYRZI0xXuiTB0RQQRB8kAffNCYeKCAiiYnCaky84EXigxcgqCBiDEgEjXLKLiIQcVd225SpP/n9s909M1090/+/8yX18u9sdXfNTHVdXQPkyJEjR44cOXKUoArAUAC3AFgIYCWAzwFsB7AbwBEALUxH+LftfA1duwBAA/PIERFDAMwA8DaAQwCUEB0E8BaABwEMzu/G/9GPhb5eUOA2+gHAEwDO6cw343oAawH8k6LgS4nGXgNgPDoRJgHYkKHQlYZoTtN476lIjAXwdQCCVhbaDGAMKkzHLwfQlkAYLfxkrgAwH8DNAEYAuBBADYBqphr+bQRf8zj/zwbmEXdcmutSAH1R5rgVwO8xF78DwNMAbgDQS2AOvQHcCOAZADtjzuUQm7Jlhx4AFgNoj7jQJgAvs5ryjSt4rKaIc6M1PM9vWlmgLoau/w3AHKEnPS5ozLkA9sbYGwYicIxipyfKqz0zkKeK3taHAByOMO8DAEYiUFwH4GiE1/kNAP0RHmpYbZ6yrOE4gHoEBorX/G2Z+E+sf0PHVQD2WNZykn2GYJ78k5YJv89PWLngTI5H2Uzk+hB0/p8We5o2WalA3WwAjQC2AmgG0MrUxL/R32YJBtzmWfyXo1nuCXWWDZdU0u2OY3QDcA+AjTHtd8VO2HQAXR3ncKfFmdufhXXUw2Jq0kY10XGMyQB2JRB8Ke1kp841fnXcMMamtC26xZYnf6Kjfb5SQPClRKGJno43wfQmkLOWWnhB5+G2OaqdAQC2eBB+geitrXVUR7o9oT2NsEU/S2xnjqPwd3oUfrFKqnXcmHW8D/oO4C03DP6Oo9rZkoLwi9+E0xLOlfIF7xp4L4EnjDW8fuRk9XHgvTJF4ReIHqak6Gtw1siTHg1hVBmsnjZHD3dyBsIvEG2sSXG14YEks1kUUw2LeMXRzt+V4Q3Y4egnvGbgTTkIMegqFsgDPcuB770ZCr9Ad3kySsgRFKte0E2eyklcsDGAG0APlwtmGXiPgwDWGpIp1Y6xHRUAtXNYxSUqsE/D+0M4YoChbudRR96zAxB+gSg5BA++AcnubBfGjxl0v2sasTEAwRdolUDiv9nHg/qthulLjhM28VYZ0DcC61mq4U3mu7iOvlxgwk0BCL5AZMm44koD/0R7zEwNsx8hg5YABF8cwZWALpb1QBJmupQcFU1JoKUCb8CzGv6rk4QedNku1+RGpaogwk2GrFmsot+LNIxaeMeXwNYABC+5CRNO5xx1R2PQnhoZDb7da34tVSD0puC6vtSMQUXDkbFQw+RVwYnOCkDwUo5YlND6/NSZWDA4RvGuT6I5DBJc1wJDTjoyPpN4jcokGPeF8Jp06vuTOEy+1zChAxCSmB7ADaBEuyRGasb5Lg6TnzVMJF9VcDIkjUS86bSka+FWKeo0Y1EKMzJ0gSVKQEijPsMbMMHDevprxqLyd2cv1Vf114oMhL/M01p6SHjbad+AnimfoNzkUJZiQ7XEDdCFCXyWmNemtB/s8HxApJ+ECtJtwufBL2oBfOX5yXepiouCCyQ24e0aJsPhHz0tFXguOt+X2inGJRJmqM4RS/NYziRWFxKmpg9rx3Rcy9kR04Ui6FinJLoBWATgSU24lmz0u7l0JE7Yop09XHKyunTAt4rHXcRzkMQ8iVDEghQKTy/mMHCBdyOfzTI5ODM5gb6FDYVCw6bDzGsVX2NyGPuUJJvI+homuK5lEnE0XTyDNkgJkCo7ptmoXE/W2Jy+XzoY9xiXX0qg+KFKHEcbqmHSKlCOYjv4pgB8wJuZZHxmjWXMUwIqtrehjmqwVErSpbnRwph6fB3r8SQ3vRfXfa6LuWm7hNwnSKUkwT3WOmJGieckmBNTEKqITgD4iDfrBtbZ5BR2L2pXM4wtkEUs9BMO4z2ccI3PSRZ+zdAw25PgbtZHaAGgAiJSkVMSyGy3ht99CXj9p7N0ExwVk8+RAISqYlIzN4GKissMvBKH8XXntqjfThR0CbQ/nIoRuujqWJpIbW4SY66G6bGIZ8JMJwpVmVCU4tozDC0bku4n1vL0Ryz/e77jRqgCITohf25CA6NVIvins59/tQS3fATUVEa0xBI83GvwZ0Ta0cS1mQcGVvupHKnFsJGafJtrkcIhvY5Ohr8YgNCUMJGNX4oaQ/6cIspimGKYGEVOi1Edsf+aKjNq4nxvMV43XC/azKmKzSldyKA43n5HAMJSnui2knxFu6eTlx1ijCGItqdIFelCGJVAq4tUjy5teyqmoyoS61Z8nLVrgk65qozoMK/xPcM11EvJG2osH1YI6eSj8kSNlr6iLk1LImFqIFXNKjBq52hsKnghgAWrwChpmD4RugdSWq4Coc1ZtGEexDpPdXLax8VYmWBEmcb6lRBR49ZLkTHGR2hdXIl0UjLWI1Fm0pluwl8ejmuJvAm29vWVQH9INWLygeExvkihypAOhKDzbRjIuVRVYbSRs3xlASp4fSrhp6tUgB7u4kA+txIbDRG/KaMCVjlSNaOZoW/Eb7OogKiNv3Xj0pIzOIwuk/DFep/x/BBwDYCPAxX8NHQijOO+mrr+OmlQK5eOBOPRZoGaDD/o7NTTsxJRxw3uVgtHWvdzifj9HvpdVDSGlHye9lMA27gMvLnojFgz/7aNryn+/G2sVmE5cuTIkSNHDnQO/As7rshmpWUSiAAAAABJRU5ErkJggg==' },
    search: source = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD8UlEQVR4nO2bz0tVURDHP9eeWVS4yAgqCkqCFmFkFG1KiyD6BREUUmkEYUH1J2StQnBVlBn9lNq1b1OZFbRt1SYzKs0sLTISbdGLA/MgHu89z5x77g9ffmFAeO/NfGfuPWfOzBlhBjOIAhVAHXAW6AJ6gLfAN2BSxPzdJ591yXfNbwKmsdONwG1gBMg6ylfgFtAgOlOPKuCkPOGsZzFvSKvYSB0CoBkYjMDxfBkAjqRpeawGemNwPF/MflGbtPMHgO8JOJ+TMaApCccDoCNBx/OlPc4lkQHupsDpfLkj3CJFIGkpm1K5F/Wb0JECJ22WQyRoCklsCLgJHAXWAwuBSpEaoF5S6U35bhhbB6NIdWOOZJ4Ce4BZCnsZ+Y1rev3hM0UGjkTeADs92N8lp0Ct/Se+9oNmB+PdwHz8wei678DjcFjDcxyOt21Eh/NKLh/D1g6nlAbPET0uKDmdcDVUoazqzGsfF+4r9yKnvaBRaWQe8WG+8uFsdTFyW2HAx26vxW4Fvxta5YF0Y2zL0qTwzJLjsHYZrFNE1zyJpLBXwXOtRvFZS6VDcVRgJZCRp2vD9bRG8fWo1lYEsN2rOjVKn1oqNYVN0jimOBpb452lUlPVJY0NllxN2rTGiKVSU9ImjUWWXE1Ws8akpdLZJI8qS64TGqWT/3sARqbRElhsyfVLFJtgPcljkyVX01SxRo+lUtMsSRrHLbk+0ijtmkYHoW5LrpfL8ShcqSjazK21NeoslWale5sU9it4romqHO4lObyw5PjJRfktRXRN6zrNT/+qi4EGhYE+z23wqVANvFfw2+zaFO1TGDGNyjhglucDBa/XYS5IWhWGstK3jxoXlZxawp6zB5QGTd8+CgQOzvdLqgyFI0qjueWwAL9rXvPa58SM8HiJfI+D8beeGqb7lRteTh7iEbVy5Zx1kOfAPuWJsVIcf+locxRYgWccciSTk2FpYLZIG6tG+glV0tXZKIVNt+IQVkj+SMAjQXvIIMQhhW6nl/gKQCAjLNmUyrUid5y/fF7gZGQkLZsy6SwwhrMU+CyfjwM7fL4J7SlwOrfm24qkzld53/UahNzG6JodfMhokQ1vbom5Ju9BqJVbl7idf1gk1VVbDHV5D0IgA0kfY3C8v8QJb2mB175UELbjGbNlJsdlrM2mqmspcbbf9s+GZytm0n05ESAAtkjT1Pb6upAMSjNjqnre5PmfjjacmiXaYJjhhDOSqh7LTNGo3EBNyMnvjbSur0gDU9XDkzU97hAAU2eUDVyC8Jsyww5lEEy/o+ygCUIaLncSC4LZOFdRxtgu/5VazPkk2vmxYxlwSQ5QJut8kCGwlfFTmQGpxl9D5OaS/lukrQAAAABJRU5ErkJggg==' },
    home_full: source = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFUlEQVR4nO2b34uMURjHP8O22yqryI+U3wkl/gFblFgXK7FtlBIXe0GkqL1C5GKTKFKk3OLCxRYJV24Wd5K0i82y7BpG+VW7WXZ06pmapp133jnvc2bO7J5PfWt6mznP8z3ved/znuc9A4FAIBAIVJp64BgwCLyTz+bYlGAX0A9kC/QW2MkkZiFwZwLjhboHLGYSkQIOA79imM/pJ3BIflvTzJMzmrXUIxk5NckWYCiB+Zy+AK3UEHXARWBcwXxOpq0L0rbXzJZhm3Wkx8BcPGUV0OvQfP50uRbP2FHmXT6pzCyxHU/YC4xV0HxOf4ED1TZ/EPhXBfP5N8ej1TLfWUXjhTpVafOnPTBdqK5Kme/ywGwxnXVt/ogHJkvpuCvz+5Wf7lxpXGYmVTYAox6Yi6s/wEYt8yuAr8oJmkpQGzBTZAohr5VjmEXUsqTmZwAvHJg3a4ZCzLGPyrGeA41JOuCGg+Fpznwx2h3Eu25rfp+DZLIy5Isxy1HMsm+KS2XB4SKZpip0wI9y6owpx2v6qMpvm8O4D+PWGDscJmHUB8wpchN84zh2R5yz/95xElm527fL5dAkZ961+ax4ixwFqYI531w7mQok5koZ8ZD/bFCSPcA3IA20FHmLUyvqFw9p8bSbmEzPGyofPDCSZMjnRrbxZMWwB0Zs9QkFMh4YsZUZ+on57oERW5nrPjFpD4xU9RLo88CIrV5pdMAzD4zYqkejAx54YMRW9zU64LYHRmx1U6MDLntgxFaXfCyF9wCrgflAg2iBHHuqHMtszUlMi3JSJyNinVGOZXapJGa5clLbImK1Kscyla3ETANGFJNaGRFrjWKcEckd354FGiLiNPr2DJDjvFJSvynNqI9vizcrJWW2zVVq7bFJswPqgM+KBYooBhXiDLvYUrdVYePjQIw4SStQQ1rT30SYslIzcM5ylWi2xpdiwKLdXsmpOUnpy4Yl8trpGvAyxm6x7hht3i3RxpjEuiqxvdpZXg+sl+qreeK7IqafyKJqUYw2zHduyW+6pY0T0ua6qfTHikAgEAgEAjjlPwp9CgsapvQDAAAAAElFTkSuQmCC' },
};


function HomeTabs() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarIconStyle: { display: 'none' },
                tabBarStyle: styles.tabBarStyle
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconText}>
                        <Image
                            source={Images.home_full}
                            resizeMode='contain'
                            style={[
                                { tintColor: focused ? colors.gold : colors.secondary },
                                styles.icon
                            ]}
                        />
                    </View>
                ),
            }} />


            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconText}>
                        <Image
                            source={Images.search}
                            resizeMode='contain'
                            style={[
                                { tintColor: focused ? colors.gold : colors.secondary },
                                styles.icon
                            ]}
                        />

                    </View>
                ),
            }} />

            <Tab.Screen name="Post" component={Post} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={Images.add}
                            resizeMode='contain'
                            style={{
                                tintColor: focused ? colors.gold : colors.black,
                                width: 65, height: 65,
                            }}
                        />
                    </View>
                ),
            }} />

            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconText}>
                        <Image
                            source={Images.notifi}
                            resizeMode='contain'
                            style={[
                                { tintColor: focused ? colors.gold : colors.secondary },
                                styles.icon
                            ]}
                        />
                    </View>
                ),
            }} />

            <Tab.Screen name="Profile" component={UserProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconText}>
                        <Image
                            source={Images.profile}
                            resizeMode='contain'
                            style={[
                                { tintColor: focused ? colors.gold : colors.secondary },
                                styles.icon
                            ]}
                        />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

function UserProfile() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="ProfileDetail">
            <Stack.Screen name="Setting" component={UserSeting}
                options={{
                    headerStyle: {
                        height: 50,
                    },
                    title: 'Cài đặt',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginBottom: 0,
                        fontSize: 20,
                    },
                    headerLeft: () => (
                        <View style={{ height: '100%', marginBottom: 0 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
                                <Icon name="chevron-back" size={27} color={colors.black} />
                            </TouchableOpacity>
                        </View>
                    ),
                }} />

            <Stack.Screen name="ProfileDetail" component={ProfileUser}
                options={{
                    headerStyle: {
                        height: 50,
                    },
                    title: 'Trang cá nhân',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginBottom: 0,
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <View style={{ height: '100%', marginBottom: 0 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                                <Icon name="menu" size={27} color={colors.black} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                }} />
        </Stack.Navigator>
    );
};

const Index = () => {
    const [user, useDispatch] = useReducer(UserReducers, null);
    // Hàm để lấy dữ liệu từ AsyncStorage và thiết lập state
    const loadUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('user');
            if (userData) {
                dispatch({
                    type: 'login',
                    payload: userResponse.data,
                });
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <NavigationContainer independent={true}>
            <UserContext.Provider value={[user, useDispatch]}>
                <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
                    {!user == null ? (<>
                        <Stack.Screen name="Intro" component={IntroApp} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>) : (<>
                        <Stack.Screen name="HomeTabs" component={HomeTabs} />
                        <Stack.Screen name="Logout" component={Logout} />
                    </>)}
                </Stack.Navigator>
            </UserContext.Provider>
        </NavigationContainer >
    );
}

export default Index