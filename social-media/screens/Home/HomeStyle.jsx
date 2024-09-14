import { StyleSheet } from 'react-native';
import colors from '../../assets/color/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
        minWidth: '95%',
        maxWidth: '95%',
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingTop: 10,
        elevation: 5,
        marginBottom: 10,
        //ios
        shadowColor: '#000',           // Màu bóng
        shadowOffset: { width: 0, height: 2 }, // Độ lệch của bóng (chiều ngang, chiều dọc)
        shadowOpacity: 0.25,           // Độ mờ của bóng
        shadowRadius: 3.84,            // Bán kính của shadow
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
        flex: 1,
        minHeight: 60,
        overflow: 'hidden',
        marginBottom: 10,
        // backgroundColor: colors.info,
    },
    media: {
        width: '100%',
        height: 450,
    },
    btn_like: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    btn_cmt: {
        width: 'auto',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    btn_follow: {
        width: 'auto',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line_border: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.xamnhe,
        marginBottom: 10
    },

    container_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 500,
        // backgroundColor: colors.danger
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
        // marginBottom: 50,
        // backgroundColor: colors.gold
    },
    post_infor: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10
    },
    contain_action: {
        flex: 1,
        // position: 'relative',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default styles;