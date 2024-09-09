import { StyleSheet } from 'react-native';
import colors from '../../assets/color/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,
        overflow: 'scroll',
        paddingBottom: 90
    },
    contai_head: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    contain: {
        width: '100%',
        alignItems: 'center',
        // backgroundColor: colors.danger
    },
    txt_post: {
        fontSize: 20,
    },
    add_post: {
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.5,
        backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
    logo: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.gold,

    },
    message: {
        width: 70,
        alignItems: 'center'
        // backgroundColor: colors.gray
    },
    post_contain: {
        width: '95%',
        height: 450,
        // backgroundColor: colors.danger,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 10,
        position: 'relative',
    },
    media: {
        width: '100%',
        height: 450,
    },
    btn_like: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    btn_cmt: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 15,
        left: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // backgroundColor: colors.white
    },
    btn_share: {
        width: 80,
        height: 50,
        position: 'absolute',
        bottom: 15,
        left: 80,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    btn_follow: {
        width: 70,
        height: 30,
        backgroundColor: colors.xamtrang,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10
    },
    line_border: {
        width: '95%',
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: colors.xamnhe,
        marginBottom: 10
    }
});

export default styles;