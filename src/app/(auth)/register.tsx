import { Button, Dimensions, Image, Keyboard, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { router, useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as Haptics from 'expo-haptics'
import Google from '@/components/ui/Google'
import Facebook from '@/components/ui/Facebook'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Page() {
    const [email, setEmail] = useState('')

    const Press = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar barStyle={'dark-content'} />

            <SafeAreaView style={styles.container}>
                <View style={styles.emailContainer}>
                    <TextInput 
                        placeholder={'Email'}
                        onPressOut={() => {
                            Keyboard.dismiss()
                        }}
                        onBlur={() => {
                            Keyboard.dismiss()
                        }}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        autoComplete={'off'}
                        onChangeText={setEmail}
                        value={email}
                        onSubmitEditing={() => {
                            Keyboard.dismiss()
                        }}
                        keyboardType={'email-address'}
                        style={styles.input}
                    />

                    <View style={styles.textContainer}>
                        <Text>Al continuar, acepta nuestros </Text><Text style={{ color: '#379538' }}>Términos de servicio, Política de privacidad & Aviso de datos de salud.</Text>
                    </View>

                    <TouchableOpacity style={styles.emailButton}>
                        <Text style={styles.emailText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

                    }} activeOpacity={1} style={styles.button}>
                        <Google />
                        <Text style={styles.buttonText}>Continuar con Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

                    }} activeOpacity={1} style={styles.button}>
                        <Facebook />
                        <Text style={styles.buttonText}>Continuar con Facebook</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    emailContainer: {
        width: wp('85%'),
        flexDirection: 'column',
        display: 'flex',
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 20,
        width: '100%',
    },
    emailButton: {
        width: wp('85%'),
    },
    emailText: {

    },
    textContainer: {
        display: 'flex',
    },
    text: {

    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        width: wp('85%'),
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
        gap: 25,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 999999,
        width: '100%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
    },
    buttonText: {
        color: colors.darkText,
        fontSize: 15,
        fontFamily: 'InstaSans',
    },
})