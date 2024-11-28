import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

export default function Layout() {
    let [loaded] = useFonts({
        'InstaSans': require('../../public/fonts/Instacart/Sans.ttf')
    })

    if (!loaded) {
        return null    
    }

    return (
        <Stack>
            <Stack.Screen name={'index'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'(auth)/login'} options={{
                headerShown: true,
                headerTransparent: true,
                headerLeft: ({ label }) => (
                    <View style={styles.header}>
                        <MaterialIcons onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                            router.back()
                        }} name={'arrow-back'} size={24} color={colors.darkText} />
                        <Text style={styles.title}>Iniciar sesion</Text>
                    </View>
                ),
            }} />
            <Stack.Screen name={'(auth)/register'} options={{
                headerShown: true,
                headerTransparent: true,
                headerLeft: ({ label }) => (
                    <View style={styles.header}>
                        <MaterialIcons onPress={() => {
                            router.back()
                        }} name={'arrow-back'} size={24} color={colors.darkText} />
                        <Text style={styles.title}>Registarse</Text>
                    </View>
                ),
            }} />
        </Stack>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
    },  
    title: {
        fontFamily: 'InstaSans',
        color: colors.darkText,
        fontSize: 20,
    },
})