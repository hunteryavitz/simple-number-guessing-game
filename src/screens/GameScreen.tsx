import {View, StyleSheet, Alert, FlatList, Image} from 'react-native'
import Title from '../components/ui/Title'
import { useState, useEffect } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import Caption from '../components/ui/Caption'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/colors'
import LogItem from '../components/game/LogItem'

function generateRandomNumber(min: number, max: number, exclude: any) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    return (randomNumber === exclude) ? generateRandomNumber(min, max, exclude) : randomNumber
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [rounds, setRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            minBoundary = 1
            maxBoundary = 100
            onGameOver(roundsLength)
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction: number) {
        if ((direction < 1 && currentGuess < userNumber) || (direction > 0 && currentGuess > userNumber)) {
            Alert.alert('\'WHOAH!! IF IT ISN\'T... A LIAR!\'', 'I know that is wrong...', [{
                text: 'Sorry Spamton',
                style: 'cancel'
            }])
            return
        }
        if (direction < 1) {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess
        }
        const newRound = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRound)
        setRounds((currentRounds) => [newRound, ...currentRounds])
    }

    const roundsLength = rounds.length

    return (
        <>

            <View style={styles.container}>
                <Title children={'Spamton\'s Guess'}/>
                <View style={ styles.imageContainer }>
                    <Image
                        source={ require('../../assets/images/spamton-laughing-01.gif') }
                        style={ styles.image }
                    />
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <Caption style={styles.caption}>Higher or Lower?</Caption>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 0)}>
                                <Ionicons
                                    name="remove"
                                    size={24}
                                    color={Colors.accent500}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.button}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 1)}>
                                <Ionicons
                                    name="add"
                                    size={24}
                                    color={Colors.accent500}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
                <FlatList
                    data={ rounds }
                    renderItem={
                        ({ item, index }) => (
                            <LogItem
                                round={ roundsLength - index }
                                guess={ item } />
                        )
                    }
                    keyExtractor={ (item) => item }

                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 8
    },
    button: {
        flex: 1,
        marginHorizontal: 8
    },
    caption: {
        marginBottom: 8
    },
    log: {
        color: Colors.accent500,
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'Colors.primary800',
        borderRadius: 150,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 16
    },

    image: {
        width: '100%',
        height: '100%',
    },
    guesses: {
        width: '100%',
        padding: 16,
        margin: 8,
    }
})

export default GameScreen
