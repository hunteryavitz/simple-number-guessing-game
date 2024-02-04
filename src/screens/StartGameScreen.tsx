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
    Platform
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import Caption from '../components/ui/Caption'
import ScrollView = Animated.ScrollView
import { useState } from 'react'
import Resolutions from '../constants/screens/resolutions'
import Titles from '../constants/text/titles'
import Captions from '../constants/text/captions'
import Alerts from '../constants/text/alerts'
import Buttons from '../constants/text/buttons'

function StartGameScreen({ onEnteredNumber }) {
    const [enteredValue, setEnteredValue] = useState('')
    const { width, height } = useWindowDimensions()

    const marginTop = height <= Resolutions.phoneLarge ? 12 : 32
    const marginVertical = height <= Resolutions.phoneLarge ? 8 : 16
    const marginHorizontal = width <= Resolutions.phoneLarge ? 8 : 16

    function numberInputHandler(enteredText: string) {
        setEnteredValue(enteredText.replace(/[^0-9]/g, ''))
    }

    function confirmInputHandler() {
        const confirmedNumber = parseInt(enteredValue)
        if (isNaN(confirmedNumber) || confirmedNumber <= 0 || confirmedNumber > 99) {
            Alert.alert(Alerts.gameStart.title,
                Alerts.gameStart.message,
                [{ text: Alerts.gameStart.text, onPress: () => resetInputHandler }])
            return
        }

        onEnteredNumber(confirmedNumber)
        resetInputHandler()
    }

    function resetInputHandler() {
        setEnteredValue('')
    }

    return (
        <>
            <ScrollView style={ styles.screenLandscape }>
                <KeyboardAvoidingView
                    style={ styles.screenLandscape }
                    behavior={ "position" }>
                    <View
                        style={
                            [
                                // global container styling
                                styles.containerLandscape,
                                {
                                    // orientation specific container styling
                                    marginTop: marginTop,
                                    marginVertical: marginVertical,
                                    marginHorizontal: marginHorizontal
                                }
                            ]
                        }>
                        <View style={ styles.mainLandscape }>
                                <View style={ styles.subUpperLandscape }>
                                    <View style={ styles.headerLeftLandscape }>
                                        <Title children={ Titles.gameStart }></Title>
                                        {/*<Text style={ styles.subHeaderLandscape }>{ Platform.OS === 'android' ? 'android' : 'on iOS' } { Platform.isTV ? 'tv' : 'mobile' }</Text>*/}
                                    </View>
                                    <View style={ styles.headerRightLandscape }>
                                        <Image
                                            source={ require('../../assets/images/spamton-eager.gif') }
                                            style={ styles.imageLandscape }
                                        />
                                    </View>
                                </View>
                                <View style={ styles.subLowerLandscape }>
                                    <Card>
                                        <Caption style={ styles.contentUpperLandscape }>{Captions.gameStart}</Caption>
                                        <View style={ styles.contentLowerLandscape }>
                                            <View style={ styles.contentOuterLandscape }>
                                                <PrimaryButton
                                                    onPress={ resetInputHandler }
                                                >{ Buttons.gameStart.reset }</PrimaryButton>
                                            </View>
                                            <TextInput
                                                style={ styles.contentInnerLandscape }
                                                maxLength={ 2 }
                                                keyboardType={ 'number-pad' }
                                                autoCapitalize={ 'none' }
                                                autoCorrect={ false }
                                                onChangeText={ numberInputHandler }
                                                value={ enteredValue }
                                            />
                                            <View style={ styles.contentOuterLandscape }>
                                                <PrimaryButton
                                                    onPress={ confirmInputHandler }
                                                >{ Buttons.gameStart.submit }</PrimaryButton>
                                            </View>
                                        </View>
                                    </Card>
                                </View>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
}

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    screenPortrait: {
        flex: 1,
    },
    containerPortrait: {
        flex: 1,
        marginTop: deviceWidth <= Resolutions.phoneLarge ? 56 : 64,
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
        borderWidth: deviceWidth <= Resolutions.phoneLarge ? 2 : 4,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth <= Resolutions.phoneLarge ? 64 : 120,
        width: deviceWidth <= Resolutions.phoneLarge ? 96 : 128,
        height: deviceWidth <= Resolutions.phoneLarge ? 96 : 128,
        overflow: 'hidden',
    },
    imagePortrait: {
        width: '100%',
        height: '100%',
    },
    numberInputPortrait: {
        fontFamily: 'RobotoBold',
        backgroundColor: Colors.mspaintPink,
        height: deviceWidth <= Resolutions.phoneLarge ? 48 : 64,
        width: deviceWidth <= Resolutions.phoneLarge ? 56 : 72,
        fontSize: deviceWidth <= Resolutions.phoneLarge ? 24 : 40,
        borderWidth: deviceWidth <= Resolutions.phoneLarge ? 2 : 4,
        borderRadius: 4,
        borderColor: Colors.white,
        color: Colors.black,
        textAlign: 'center',
        opacity: 0.7,
    },
    buttonsContainerPortrait: {
        flexDirection: 'row',
        width: '100%',
        padding: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
    },
    buttonContainerPortrait: {
        flex: 1,
        marginHorizontal: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
    },
    captionPortrait: {
        margin: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
        padding: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
        justifyContent: 'center',
        alignItems: 'center',
    },


    //
    screenLandscape: {
        flex: 1,
    },
    containerLandscape: {
        flex: 1,
    },
    mainLandscape: {
        flex: 1,
        height: deviceHeight - 96,
    },
    subUpperLandscape: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    subLowerLandscape: {
        flex: 6,
        justifyContent: 'flex-end',
        padding: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    headerLeftLandscape: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerRightLandscape: {
        borderWidth: deviceWidth <= Resolutions.phoneLarge ? 3 : 5,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth <= Resolutions.phoneLarge ? 60 : 80,
        width: deviceWidth <= Resolutions.phoneLarge ? 120 : 160,
        height: deviceWidth <= Resolutions.phoneLarge ? 120 : 160,
        overflow: 'hidden',
    },
    contentUpperLandscape: {
        margin: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    contentLowerLandscape: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    contentOuterLandscape: {
        flex: 1,
    },
    contentInnerLandscape: {
        margin: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
        fontFamily: 'RobotoBold',
        backgroundColor: Colors.mspaintPink,
        height: deviceWidth <= Resolutions.phoneLarge ? 64 : 96,
        width: deviceWidth <= Resolutions.phoneLarge ? 64 : 96,
        fontSize: deviceWidth <= Resolutions.phoneLarge ? 28 : 36,
        borderWidth: deviceWidth <= Resolutions.phoneLarge ? 2 : 4,
        borderRadius: 4,
        borderColor: Colors.white,
        color: Colors.black,
        textAlign: 'center',
        opacity: 0.7,
    },


    content: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },


    imageLandscape: {
        width: '100%',
        height: '100%',
    },




    contentCenteredVertical: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

})

export default StartGameScreen
