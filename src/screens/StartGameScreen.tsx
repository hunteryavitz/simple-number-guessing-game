import {
    Alert,
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    View,
    useWindowDimensions,
    Animated,
    Platform,
    Text
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import Caption from '../components/ui/Caption'
import ScrollView = Animated.ScrollView
import { useState } from 'react'

function StartGameScreen({ onEnteredNumber }) {
    const [enteredValue, setEnteredValue] = useState('')
    const { width, height } = useWindowDimensions()

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

    const marginTop = height < 480 ? 32 : 72
    const marginVertical = height < 480 ? 8 : 16
    const marginHorizontal = width < 480 ? 8 : 16

    const paddingTop = height < 480 ? 8 : 16
    const paddingVertical = height < 480 ? 8 : 16
    const paddingHorizontal = height < 480 ? 8 : 16

    const fontSizeHeader = height < 480 ? 24 : 40
    const fontSizeCaption = height < 480 ? 16 : 24
    const fontSizeInput = height < 480 ? 24 : 40

    const borderWidth = height < 480 ? 3 : 5

    const imageSize = height < 480 ? 240 : 320
    const imageBorderRadius = height < 480 ? 120 : 160

    return (
        <>
            <ScrollView style={ styles.screenLandscape }>
                <KeyboardAvoidingView
                    style={ styles.screenLandscape }
                    behavior={ "position" }>
                    <View
                        style={
                            [
                                styles.containerLandscape,
                                {
                                    marginTop: marginTop,
                                    marginVertical: marginVertical,
                                    marginHorizontal: marginHorizontal
                                }
                            ]
                        }>
                        <View style={ styles.titleAndImageContainerLandscape }>
                            <Title children={ 'NOW\'s YOUR CHANCE TO BE A [[BIG SHOT, BIG SHOT]] !!' }></Title>
                            <Text>{ Platform.OS === 'android' ? 'on Android' : 'on iOS' }</Text>
                            <Text>{ Platform.isTV ? 'on the BIG SCREEN' : 'on the LITTLE SCREEN' }</Text>
                            <View style={ styles.imageContainerLandscape }>
                                <Image
                                    source={ require('../../assets/images/spamton-eager.gif') }
                                    style={ styles.imageLandscape }
                                />
                            </View>
                        </View>
                        <Card>
                            <Caption style={styles.captionLandscape}>Pick a number between [1] and [99] ... </Caption>
                            <TextInput
                                style={ styles.numberInputLandscape }
                                maxLength={ 2 }
                                keyboardType={ 'number-pad' }
                                autoCapitalize={ 'none' }
                                autoCorrect={ false }
                                onChangeText={ numberInputHandler }
                                value={ enteredValue }
                            />
                            <View style={ styles.buttonsContainerLandscape }>
                                <View style={ styles.buttonContainerLandscape }>
                                    <PrimaryButton
                                        onPress={ resetInputHandler }
                                    >RESET</PrimaryButton>
                                </View>
                                <View style={ styles.buttonContainerLandscape }>
                                    <PrimaryButton
                                        onPress={ confirmInputHandler }
                                    >LET's GO</PrimaryButton>
                                </View>
                            </View>
                        </Card>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    screenPortrait: {
        flex: 1,
    },
    containerPortrait: {
        flex: 1,
        marginTop: deviceWidth < 480 ? 56 : 64,
        borderWidth: Platform.select({ ios: 0, android: 1 }),
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    titleAndImageContainerPortrait: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageContainerPortrait: {
        borderWidth: deviceWidth < 480 ? 2 : 4,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth < 480 ? 64 : 120,
        width: deviceWidth < 480 ? 96 : 128,
        height: deviceWidth < 480 ? 96 : 128,
        overflow: 'hidden',
    },
    imagePortrait: {
        width: '100%',
        height: '100%',
    },
    numberInputPortrait: {
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
    buttonsContainerPortrait: {
        flexDirection: 'row',
        width: '100%',
        padding: deviceWidth < 480 ? 8 : 16,
    },
    buttonContainerPortrait: {
        flex: 1,
        marginHorizontal: deviceWidth < 480 ? 8 : 16,
    },
    captionPortrait: {
        margin: deviceWidth < 480 ? 8 : 16,
        padding: deviceWidth < 480 ? 8 : 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenLandscape: {
        flex: 1,
    },
    containerLandscape: {
        flex: 1,
        marginTop: deviceWidth < 480 ? 64 : 72,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleAndImageContainerLandscape: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageContainerLandscape: {
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth < 480 ? 120 : 160,
        width: deviceWidth < 480 ? 240 : 320,
        height: deviceWidth < 480 ? 240 : 320,
        overflow: 'hidden',
        // margin: deviceWidth < 480 ? -48 : -64,
    },
    imageLandscape: {
        width: '100%',
        height: '100%',
    },
    numberInputLandscape: {
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
    buttonsContainerLandscape: {
        flexDirection: 'row',
        width: '100%',
        padding: deviceWidth < 480 ? 8 : 16,
    },
    buttonContainerLandscape: {
        flex: 1,
        marginHorizontal: deviceWidth < 480 ? 8 : 16,
    },
    captionLandscape: {
        margin: deviceWidth < 480 ? 8 : 16,
        padding: deviceWidth < 480 ? 8 : 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default StartGameScreen
