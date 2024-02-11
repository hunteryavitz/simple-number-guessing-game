import {
    useState,
    useEffect
} from 'react'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'

import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import Colors from './src/constants/colors'
import GameOverScreen from './src/screens/GameOverScreen'
import React from 'react'

import * as SplashScreen from 'expo-splash-screen'

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null)
    const [isGameOver, setIsGameOver] = useState(true)
    const [rounds, setRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        'Roboto': require('./assets/fonts/Roboto-Black.ttf'),
        'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
        'RobotoLight': require('./assets/fonts/Roboto-Light.ttf'),
        'RobotoThin': require('./assets/fonts/Roboto-Thin.ttf'),
    })

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync()
            } catch (e) {
                console.warn(e)
            }
        }

        prepare().then(r => console.log(r))
    }, [])

    useEffect(() => {
        async function hideSplashScreen() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync()
            }
        }

        hideSplashScreen().then(r => console.log(r))
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null
    }

    function enteredNumberHandler(enteredNumber: number) {
        setUserNumber(enteredNumber)
        setIsGameOver(false)
    }

    function gameOverHandler(totalRounds: number) {
        setIsGameOver(true)
        setRounds(totalRounds)
    }

    function newGameHandler() {
        setUserNumber(null)
        setRounds(0)
    }

    let screen = <StartGameScreen onEnteredNumber={ enteredNumberHandler } />

    if (userNumber) {
        screen = <GameScreen userNumber={ userNumber } onGameOver={ gameOverHandler } />
    }

    if (isGameOver && userNumber) {
        screen = <GameOverScreen
            rounds={ rounds }
            userNumber={ userNumber }
            onNewGame={ newGameHandler }
        />
    }

    return (
        <>
            <StatusBar barStyle={ 'light-content' }  />
            <LinearGradient
                colors={ [Colors.mspaintBlue, Colors.mspaintYellow] }
                style={ styles.rootContainer }>
                <ImageBackground
                    source={ require('./assets/images/blue-brick-wall-bg-01.jpg') }
                    style={ styles.rootContainer }
                    imageStyle={ styles.backgroundImage }
                    resizeMode={ 'cover' }
                >
                    <SafeAreaView style={ styles.rootContainer }>
                        { screen }
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.9,
        position: 'absolute',
        left: 0,
        top: 0,
    }
})
