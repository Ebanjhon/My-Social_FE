import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../assets/color/colors';
import { Image } from 'react-native';
import icons from '../assets/iconApp/icons';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

const TabHeader = ({ title }) => {
    return (
        <View style={styles.contai_header}>
            <Text style={{ width: 50 }}></Text>
            <Text style={styles.title}> {title} </Text>
            <Text style={{ width: 50 }}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contai_header: {
        width: '100%',
        height: 50,
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingTop: 21
    },
    iconStyle: {
        width: 22,
        height: 22,
        tintColor: colors.black,
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    }
});


export default TabHeader
