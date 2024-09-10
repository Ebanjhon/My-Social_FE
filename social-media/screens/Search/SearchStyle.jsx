import { StyleSheet } from 'react-native';
import colors from '../../assets/color/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    contai_search: {
        width: 320,
        height: 35,
        backgroundColor: colors.xamtrang,
        borderRadius: 20,
        paddingLeft: 10,
        margin: 5,
        justifyContent: 'center'
    },
    item_notifi: {
        width: '100%',
        height: 80,
        backgroundColor: colors.white,
        borderBottomWidth: 4,
        borderColor: colors.gray,
        paddingLeft: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start', // Căn giữa theo chiều cao
        alignItems: 'center',
    },
    image_avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 5
    }

});

export default styles;

