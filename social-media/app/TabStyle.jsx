import { StyleSheet } from 'react-native';
import colors from '../assets/color/colors';
import { focusProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        right: 15,
        backgroundColor: colors.white,
        borderRadius: 50,
        height: 60,
        elevation: 0,
    }, tabBarIconText: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '10'
    },
    icon: {
        width: 40,
        height: 40,
    }

});

export default styles;

