import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
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
            <View style={ styles.caption }>
                <Title children={ 'NOW\'s YOUR CHANCE TO BE A [[BIG SHOT]] !!' }></Title>
            </View>
            <Card>
                <Caption style={ styles.caption }>Spamton will guess your number between 1 and 99</Caption>
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
                        >Reset</PrimaryButton>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton
                            onPress={ confirmInputHandler }
                        >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 28,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 8
    },
    buttonContainer: {
        flex: 2,
        marginHorizontal: 8,
    },
    caption: {
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default StartGameScreen
