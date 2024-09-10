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
        width: '96%',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingTop: 10,
        elevation: 5,
        marginBottom: 10
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
    },
    post_contain: {
        width: '100%',
        height: 390,
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
        bottom: 0,
        right: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    btn_cmt: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    btn_share: {
        width: 80,
        height: 50,
        position: 'absolute',
        bottom: 0,
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
    },

    container_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 500,
        backgroundColor: colors.danger
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 330,
        margin: 10,
    },
    contai_image: {
        width: '100%',
        // backgroundColor: colors.gold
    }
});

export default styles;