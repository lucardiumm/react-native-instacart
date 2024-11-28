import { Button, Dimensions, Image, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { router, useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Page() {
    return (
        <>
            <StatusBar barStyle={'dark-content'} />

            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})