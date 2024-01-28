import { useState } from 'react'
import {Alert, Dimensions, Image, StyleSheet, TextInput, View} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import Caption from '../components/ui/Caption'

function StartGameScreen({ onEnteredNumber }) {
    const [enteredValue, setEnteredValue] = useState('')

    function numberInputHandler(enteredText: string) {
        setEnteredValue(enteredText.replace(/[^0-9]/g, ''))
    }

    function confirmInputHandler() {
        const confirmedNumber = parseInt(enteredValue)
        if (isNaN(confirmedNumber) || confirmedNumber <= 0 || confirmedNumber > 99) {
            Alert.alert('Invalid Number',
                'Number must be 1 to 99.',
                [{ text: 'Close', style: 'destructive', onPress: () => resetInputHandler }])
            return
        }
        onEnteredNumber(confirmedNumber)
        resetInputHandler()
    }

    function resetInputHandler() {
        setEnteredValue('')
    }

    return (
        <View style={ styles.container }>
            <View>
                <Title children={ 'NOW\'s YOUR CHANCE TO BE A [[BIG SHOT, BIG SHOT]] !!' }></Title>
            </View>
            <View style={ styles.imageContainer }>
                <Image
                    source={ require('../../assets/images/spamton-eager.gif') }
                    style={ styles.image }
                />
            </View>
            <Card>
                <Caption style={ styles.caption }>Pick a number between [1] and [99] ... </Caption>
                <TextInput
                    style={ styles.numberInput }
                    maxLength={ 2 }
                    keyboardType={ 'number-pad' }
                    autoCapitalize={ 'none' }
                    autoCorrect={ false }
                    onChangeText={ numberInputHandler }
                    value={ enteredValue }
                />
                <View style={ styles.buttonsContainer }>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton
                            onPress={ resetInputHandler }
                        >RESET</PrimaryButton>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton
                            onPress={ confirmInputHandler }
                        >LET's GO</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: deviceWidth < 480 ? 64 : 72,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth < 480 ? 120 : 160,
        width: deviceWidth < 480 ? 240 : 320,
        height: deviceWidth < 480 ? 240 : 320,
        overflow: 'hidden',
        margin: deviceWidth < 480 ? -48 : -64,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    numberInput: {
        fontFamily: 'RobotoBold',
        backgroundColor: Colors.mspaintPink,
        height: deviceWidth < 480 ? 48 : 64,
        width: deviceWidth < 480 ? 56 : 72,
        fontSize: deviceWidth < 480 ? 24 : 40,
        borderWidth: deviceWidth < 480 ? 2 : 4,
        borderRadius: 4,
        borderColor: Colors.white,
        color: Colors.black,
        textAlign: 'center',
        opacity: 0.7,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: deviceWidth < 480 ? 8 : 16,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: deviceWidth < 480 ? 8 : 16,
    },
    caption: {
        margin: deviceWidth < 480 ? 8 : 16,
        padding: deviceWidth < 480 ? 8 : 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default StartGameScreen
