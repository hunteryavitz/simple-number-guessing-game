import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    Image,
    Dimensions,
    useWindowDimensions
} from 'react-native'
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
    const { width, height } = useWindowDimensions()
    const roundsLength = rounds.length


    useEffect(() => {
        if (currentGuess === userNumber) {
            minBoundary = 1
            maxBoundary = 100
            onGameOver(roundsLength)
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction: number) {
        if ((direction < 1 && currentGuess < userNumber) || (direction > 0 && currentGuess > userNumber)) {
            Alert.alert('WHAT... DON\'T BE A CHEATER!', 'I know that\'s wrong...', [{
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

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={ styles.imageContainer }>
                <Image
                    source={ require('../../assets/images/spamton-laughing-01.gif') }
                    style={ styles.image }
                />
            </View>
            <Card>
                <Caption style={styles.caption}>Is that your number??</Caption>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 0)}>
                            {/*<Ionicons*/}
                            {/*    name="remove"*/}
                            {/*    size={deviceWidth < 480 ? 32 : 48}*/}
                            {/*    color={Colors.black}/>*/}
                            - LOWER
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 1)}>
                            HIGHER +
                            {/*<Ionicons*/}
                            {/*    name="add"*/}
                            {/*    size={deviceWidth < 480 ? 40 : 48}*/}
                            {/*    color={Colors.black}/>*/}
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    )

    if (width > height) {
        content = (
            <>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={ styles.imageContainer }>
                    <Image
                        source={ require('../../assets/images/spamton-laughing-01.gif') }
                        style={ styles.image }
                    />
                </View>
                <Card>
                    <Caption style={styles.caption}>Is that your number??</Caption>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 0)}>
                                <Ionicons
                                    name="remove"
                                    size={deviceWidth < 480 ? 32 : 48}
                                    color={Colors.black}/>
                                {/*- LOWER*/}
                            </PrimaryButton>
                        </View>
                        <View style={styles.button}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 1)}>
                                {/*HIGHER +*/}
                                <Ionicons
                                    name="add"
                                    size={deviceWidth < 480 ? 40 : 48}
                                    color={Colors.black}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </>
        )
    }

    return (
        <>

            { content }

            <View style={styles.container}>
                <Title children={'I GUESS [[A BIG, BIG SHOT]]...'}/>
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
                    style={ styles.guesses }
                />
            </View>
        </>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: deviceWidth < 480 ? 48 : 56,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: deviceWidth < 480 ? 16 : 32,
    },
    button: {
        flex: 1,
    },
    caption: {
        marginVertical: deviceWidth < 480 ? 8 : 16,
    },
    log: {
        color: Colors.mspaintPink,
    },
    imageContainer: {
        borderWidth: deviceWidth < 480 ? 4 : 6,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth < 480 ? 120 : 160,
        width: deviceWidth < 480 ? 240 : 320,
        height: deviceWidth < 480 ? 240 : 320,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    guesses: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderTopWidth: 2,
        borderTopColor: Colors.mspaintYellow,
    }
})

export default GameScreen
