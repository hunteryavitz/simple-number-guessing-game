import { useState} from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import Colors from './src/constants/colors'
import GameOverScreen from './src/screens/GameOverScreen'

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

    if (!fontsLoaded) {
        return <AppLoading/>
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
        <LinearGradient
            colors={ [Colors.primary700, Colors.accent500] }
            style={ styles.rootContainer }>
            {/*<ImageBackground*/}
            {/*    source={ require('./assets/images/spamton-fortnite-dance.gif') }*/}
            {/*    style={ styles.rootContainer }*/}
            {/*    imageStyle={ styles.backgroundImage }*/}
            {/*    resizeMode={ 'cover' }*/}
            {/*>*/}
                <SafeAreaView style={ styles.rootContainer }>
                    { screen }
                </SafeAreaView>
            {/*</ImageBackground>*/}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.5
    }
})
