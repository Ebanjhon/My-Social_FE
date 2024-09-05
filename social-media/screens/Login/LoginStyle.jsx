import { StyleSheet } from 'react-native';
import colors from '../../assets/color/colors';

const styles = StyleSheet.create({
    cont: { flex: 1 },
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 70,
    },
    button: {
        width: 350,
        height: 70,
        backgroundColor: colors.gold,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 4
    },
    buttonText: {
        fontSize: 40
    },
    input: {
        fontSize: 20,
        backgroundColor: colors.xamnhe,
        padding: 10,
        width: 350,
        borderRadius: 30,
        marginBottom: 20
    }
});

export default styles;

