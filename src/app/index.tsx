import { Button, Dimensions, Image, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { router, useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import * as Haptics from 'expo-haptics'

enum SWITCH {
    PERSONAL, EMPRESA
}

export default function Page() {
    const [currentOption, setCurrentOption] = useState(SWITCH.PERSONAL)

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#013D2B'} />

            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.topContainer}>
                        <View style={styles.switch}>
                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                setCurrentOption(SWITCH.PERSONAL)
                            }} style={[styles.switchButtonOne, {
                                backgroundColor: currentOption === SWITCH.PERSONAL ? '#FFFFFF20' : 'transparent'
                            }]}>
                                <Text style={styles.text}>Personal</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                setCurrentOption(SWITCH.EMPRESA)
                            }} style={[styles.switchButtonTwo, {
                                backgroundColor: currentOption === SWITCH.PERSONAL ? 'transparent' : '#FFFFFF20'
                            }]}>
                                <Text style={styles.text}>Empresa</Text>
                            </TouchableOpacity>
                        </View> 

                        <View style={styles.logo}>
                            <Svg width={255} height={35} viewBox="0 0 800 128" fill="none">
                                <G clip-path="url(#clip0_3_2)">
                                    <Path d="M308.587 68.64L297.963 67.664C290.997 67.056 288.192 64.6133 288.192 60.336C288.192 55.328 292.464 52.032 300.768 52.032C308.587 52.032 312.496 55.4453 313.104 60.944H338.021C336.432 44.704 324.955 33.2213 301.504 33.2213C277.077 33.2213 263.637 45.68 263.637 62.1653C263.637 77.5573 272.064 85.984 292.955 87.696L303.461 88.5493C311.637 89.1626 314.571 91.968 314.571 96.8533C314.571 101.984 310.299 105.771 301.504 105.771C293.317 105.771 288.437 102.107 287.584 95.6373H261.317C263.637 113.344 276.096 125.067 301.381 125.067C325.931 125.067 339.488 112.491 339.488 95.5093C339.488 79.024 330.448 70.5973 308.587 68.64ZM222.603 33.2213C206.971 33.2213 197.685 41.4027 193.291 58.1386H191.701V34.688H167.029V123.605H193.291V71.8186C193.291 59.968 199.397 53.4986 210.389 53.4986C221.259 53.4986 226.635 60.2186 226.635 71.696V123.605H252.891V67.056C252.891 45.5573 241.659 33.2213 222.603 33.2213ZM141.504 0C132.587 0 125.867 5.86666 125.867 14.7787C125.867 23.696 132.464 29.5573 141.381 29.5573C150.299 29.5573 156.891 23.6907 156.891 14.7787C156.891 5.984 150.299 0 141.504 0ZM154.571 34.688H128.309V123.605H154.571V34.688ZM380.768 15.8773H364.037C363.547 30.1707 357.44 36.3947 343.76 37.4933V55.5733H354.512V94.656C354.512 114.32 365.744 125.067 388.096 125.067C392.299 125.067 396.485 124.533 400.555 123.483V102.347C398.457 102.695 396.334 102.857 394.208 102.832C384.8 102.832 380.768 99.2906 380.768 89.3973V55.5733H403.856V34.688H380.768V15.8773ZM797.259 55.5733V34.688H774.176V15.8773H757.685C757.317 25.7707 754.389 31.5093 747.915 34.688V94.656C747.915 114.32 759.152 125.067 781.504 125.067C785.707 125.067 789.893 124.533 793.963 123.483V102.347C791.864 102.695 789.738 102.857 787.611 102.832C778.203 102.832 774.176 99.2906 774.176 89.3973V55.5733H797.259ZM711.275 59.4826H709.685V34.6827H685.381V123.605H711.643V75.4826C711.643 62.1653 717.627 56.5493 731.307 56.5493C733.627 56.5493 736.192 56.7946 739.733 57.4026V34.4427C737.34 33.6028 734.818 33.1894 732.283 33.2213C721.653 33.2213 714.325 39.328 711.275 59.4826ZM543.579 102.597C531.243 102.597 522.325 94.4106 522.325 78.5333C522.325 64.368 530.629 55.5733 543.333 55.5733C554.203 55.5733 560.432 61.68 562.267 71.4506H588.891C586.325 48.608 569.963 33.2213 543.701 33.2213C514.875 33.2213 495.947 52.7627 495.947 79.5146C495.947 107.237 514.144 125.067 543.333 125.067C569.84 125.067 587.061 110.293 589.504 86.3466H562.875C561.413 96.1226 554.693 102.597 543.579 102.597ZM449.413 33.2213C426.571 33.2213 412.773 44.4587 410.325 64.608H435.488C436.341 57.648 440.864 53.984 448.8 53.984C456.859 53.984 460.523 57.648 460.523 62.9013C460.523 67.296 457.717 69.6213 450.512 70.96L438.539 73.1626C417.413 77.0666 409.349 85.7386 409.349 99.5413C409.349 115.296 420.464 125.195 435.856 125.195C448.432 125.195 456.619 119.328 460.405 104.672H461.989V123.605H486.789V65.5893C486.789 45.4347 474.693 33.2213 449.413 33.2213ZM446.48 107.237C439.397 107.237 435.365 103.451 435.365 97.8293C435.365 93.1893 438.176 90.016 445.136 88.4266L450.021 87.328C454.235 86.352 457.504 85.0506 460.528 82.4373V91.8453C460.528 102.715 454.784 107.237 446.48 107.237ZM636.037 33.2213C613.195 33.2213 599.397 44.4587 596.955 64.608H622.112C622.971 57.648 627.488 53.984 635.424 53.984C643.488 53.984 647.152 57.648 647.152 62.9013C647.152 67.296 644.341 69.6213 637.136 70.96L625.168 73.1626C604.037 77.0666 595.973 85.7386 595.973 99.5413C595.973 115.296 607.088 125.195 622.48 125.195C635.061 125.195 643.243 119.328 647.029 104.672H648.619V123.605H673.413V65.5893C673.413 45.4347 661.317 33.2213 636.037 33.2213ZM633.104 107.237C626.021 107.237 621.989 103.451 621.989 97.8293C621.989 93.1893 624.8 90.016 631.76 88.4266L636.645 87.328C640.859 86.352 644.133 85.0506 647.152 82.4373V91.8453C647.152 102.715 641.413 107.237 633.104 107.237Z" fill="#F9F2E6"/>
                                    <Path d="M84.1066 21.2747C78.7093 21.2747 74.8586 23.6267 71.3066 28.736L61.0666 43.44V1.46667H36.64V43.44L26.4 28.736C22.8533 23.6267 19.0026 21.2747 13.6 21.2747C5.45066 21.2747 0.0266578 27.2907 -8.80951e-06 34.704C-0.0213421 41.0507 2.97066 45.1893 9.27999 49.2533L48.8533 74.7467L88.4266 49.2533C94.7359 45.1893 97.7279 41.0507 97.7066 34.704C97.6853 27.2907 92.256 21.2747 84.1066 21.2747Z" fill="#0AAD0A"/>
                                    <Path d="M48.8533 80.8534C72.3733 80.8534 91.6534 98.4107 91.6 123.605H6.10666C6.05866 98.4214 25.3333 80.8534 48.8533 80.8534Z" fill="#FF7009"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_3_2">
                                        <Rect width="800" height="128" fill="white"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.videoContainer}>

                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                            router.push('(auth)/register')
                        }} activeOpacity={1} style={styles.buttonOne}>
                            <Text style={[styles.buttonText, {
                                color: colors.white,
                            }]}>Registarse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                            router.push('(auth)/login')
                        }} activeOpacity={1} style={styles.buttonTwo}>
                            <Text style={[styles.buttonText, {
                                color: colors.darkText,
                            }]}>Iniciar sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGreen,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    videoContainer: {
        marginTop: 25,
        width: wp('85'),
        height: hp('35'),
        backgroundColor: 'red',
        borderRadius: 12,
    },
    video: {

    },
    switch: {
        flexDirection: 'row',
        display: 'flex',
        width: 200,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    switchButtonOne: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 9999,
        alignSelf: 'stretch',
        width: 100,
        backgroundColor: 'red',
        height: 40,
    },
    switchButtonTwo: {
        borderRadius: 9999,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 100,
        backgroundColor: 'red',
        height: 40,
    },
    logo: {
        width: 250,
        height: 35,
    },
    top: {
        display: 'flex',
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        alignSelf: 'stretch',
    },
    topContainer: {
        display: 'flex',
        // marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
    },
    bottom: {
        justifyContent: 'space-between',
        borderTopLeftRadius: 18,
        alignItems: 'center',
        borderTopRightRadius: 18,
        backgroundColor: colors.white,
        width: Dimensions.get('window').width,
        height: '87.5%',
        position: 'absolute',
        bottom: 0,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        width: '85%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    buttonOne: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 999999,
        width: '100%',
        backgroundColor: colors.buttonGreen,
    },
    buttonTwo: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 999999,
        width: '100%',
        backgroundColor: colors.buttonGray,
    },
    text: {
        fontSize: 12.5,
        color: colors.white,
        fontFamily: 'InstaSans',
    },
    buttonText: {
        fontSize: 17.5,
        fontFamily: 'InstaSans',
    },
})