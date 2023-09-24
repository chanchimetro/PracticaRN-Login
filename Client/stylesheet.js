import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: '#fff',
        margin: 30,
        borderRadius: 4,
    },
    centeredCont: {
        padding: 15,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 4,
    },
    menuTitle: {
        alignItems: 'center'
    },
    input: {
        borderRadius: 5,
        marginVertical: 12,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    link: {
        color: '#616161',
        marginTop: 8,
        textDecorationLine: 'underline'
    },
    title: {
        marginTop: 8,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default styles;