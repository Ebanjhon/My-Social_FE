import { StyleSheet } from 'react-native';
import colors from '../../assets/color/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.trang,
        justifyContent: 'space-between'
    },
    test: {
        color: 'red'
    },
    content_img: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNameApp: {
        fontSize: 70,
        fontWeight: '700',
        color: colors.gold,
        textTransform: 'uppercase',
    },
    image_gif: {
        height: 300

    },
    btnLogin: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    button_login: {
        backgroundColor: colors.black,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    footer: {
        display: 'flex',
        alignItems: 'center'
    }

});

export default styles;

