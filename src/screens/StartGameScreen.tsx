import { useState } from 'react'
import {
    Alert,
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    View,
    useWindowDimensions,
    Animated
} from 'react-native'
import ScrollView = Animated.ScrollView
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import Caption from '../components/ui/Caption'
import Resolutions from '../constants/screens/resolutions'
import Titles from '../constants/text/titles'
import Captions from '../constants/text/captions'
import Alerts from '../constants/text/alerts'
import Buttons from '../constants/text/buttons'

function StartGameScreen({ onEnteredNumber }) {
    const [enteredValue, setEnteredValue] = useState('')
    const { width, height } = useWindowDimensions()
    const deviceOrientation = width > height ? 1 : 0

    const marginTop = height <= Resolutions.phoneLarge ? 12 : 32
    const marginVertical = height <= Resolutions.phoneLarge ? 8 : 16
    const marginHorizontal = width <= Resolutions.phoneLarge ? 8 : 16

    function numberInputHandler(enteredText: string) {
        setEnteredValue(enteredText.replace(/[^0-9]/g, ''))
    }

    function confirmInputHandler() {
        const confirmedNumber = parseInt(enteredValue)
        if (isNaN(confirmedNumber) || confirmedNumber <= 0 || confirmedNumber > 99) {
            Alert.alert(Alerts.gameStartScreen.invalidNumber.title,
                Alerts.gameStartScreen.invalidNumber.message,
                [{ text: Alerts.gameStartScreen.invalidNumber.text, onPress: () => resetInputHandler }])
            return
        }

        onEnteredNumber(confirmedNumber)
        resetInputHandler()
    }

    function resetInputHandler() {
        setEnteredValue('')
    }

    if (deviceOrientation === 0) { // portrait specific styling
        return (
            <>
                <ScrollView style={styles.screenPortrait}>
                    <KeyboardAvoidingView
                        style={styles.screenPortrait}
                        behavior={"position"}>
                        <View
                            style={
                                [
                                    styles.containerPortrait, // global container styling
                                    {
                                        marginTop: marginTop, // class specific container styling
                                        marginVertical: marginVertical,
                                        marginHorizontal: marginHorizontal
                                    }
                                ]
                            }>
                            <View style={styles.mainPortrait}>
                                <View style={styles.subUpperPortrait}>
                                    <View style={styles.titlePortrait}>
                                        <Title children={Titles.gameStart}></Title>
                                        {/*<Text style={ styles.subHeaderPortrait }>{ Platform.OS === 'android' ? 'android' : 'on iOS' } { Platform.isTV ? 'tv' : 'mobile' }</Text>*/}
                                    </View>
                                    <View style={styles.headerPortrait}>
                                        <Image
                                            source={require('../../assets/images/spamton-eager.gif')}
                                            style={styles.imagePortrait}
                                        />
                                    </View>
                                </View>
                                <View style={styles.subLowerPortrait}>
                                    <Card>
                                        <Caption style={styles.contentUpperPortrait}>{Captions.gameStart}</Caption>
                                        <View style={styles.contentLowerPortrait}>
                                            <TextInput
                                                style={styles.contentInnerPortrait}
                                                maxLength={2}
                                                keyboardType={'number-pad'}
                                                autoCapitalize={'none'}
                                                autoCorrect={false}
                                                onChangeText={numberInputHandler}
                                                value={enteredValue}
                                            />
                                            <View style={styles.contentLowerButtonsPortrait}>
                                                <View style={styles.contentOuterPortrait}>
                                                    <PrimaryButton
                                                        onPress={resetInputHandler}
                                                    >{Buttons.gameStart.reset}</PrimaryButton>
                                                </View>
                                                <View style={styles.contentOuterPortrait}>
                                                    <PrimaryButton
                                                        onPress={confirmInputHandler}
                                                    >{Buttons.gameStart.submit}</PrimaryButton>
                                                </View>
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

    } else {

        // landscape
        return (
            <>
                <ScrollView style={styles.screenLandscape}>
                    <KeyboardAvoidingView
                        style={styles.screenLandscape}
                        behavior={"position"}>
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
                            <View style={styles.mainLandscape}>
                                <View style={styles.subUpperLandscape}>
                                    <View style={styles.headerLeftLandscape}>
                                        <Title children={Titles.gameStart}></Title>
                                        {/*<Text style={ styles.subHeaderLandscape }>{ Platform.OS === 'android' ? 'android' : 'on iOS' } { Platform.isTV ? 'tv' : 'mobile' }</Text>*/}
                                    </View>
                                    <View style={styles.headerRightLandscape}>
                                        <Image
                                            source={require('../../assets/images/spamton-eager.gif')}
                                            style={styles.imageLandscape}
                                        />
                                    </View>
                                </View>
                                <View style={styles.subLowerLandscape}>
                                    <Card>
                                        <Caption style={styles.contentUpperLandscape}>{Captions.gameStart}</Caption>
                                        <View style={styles.contentLowerLandscape}>
                                            <View style={styles.contentOuterLandscape}>
                                                <PrimaryButton
                                                    onPress={resetInputHandler}
                                                >{Buttons.gameStart.reset}</PrimaryButton>
                                            </View>
                                            <TextInput
                                                style={styles.contentInnerLandscape}
                                                maxLength={2}
                                                keyboardType={'number-pad'}
                                                autoCapitalize={'none'}
                                                autoCorrect={false}
                                                onChangeText={numberInputHandler}
                                                value={enteredValue}
                                            />
                                            <View style={styles.contentOuterLandscape}>
                                                <PrimaryButton
                                                    onPress={confirmInputHandler}
                                                >{Buttons.gameStart.submit}</PrimaryButton>
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
}

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({

    // portrait
    screenPortrait: {
        flex: 1,
    },
    containerPortrait: {
        flex: 1,
    },
    mainPortrait: {
        flex: 1,
        height: deviceHeight - 160,
    },
    subUpperPortrait: {
        flex: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    subLowerPortrait: {
        flex: 4,
        justifyContent: 'flex-end',
        padding: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    titlePortrait: {
        marginTop: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
    },
    headerPortrait: {
        borderWidth: deviceWidth <= Resolutions.phoneLarge ? 3 : 5,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth <= Resolutions.phoneLarge ? 98 : 160,
        width: deviceWidth <= Resolutions.phoneLarge ? 196 : 320,
        height: deviceWidth <= Resolutions.phoneLarge ? 196 : 320,
        overflow: 'hidden',
    },
    imagePortrait: {
        width: '100%',
        height: '100%',
    },
    contentUpperPortrait: {
        margin: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    contentLowerPortrait: {
        alignItems: 'center',
        paddingHorizontal: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
    },
    contentLowerButtonsPortrait: {
        flexDirection: 'row',
        width: '100%',
        padding: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
    },
    contentOuterPortrait: {
        flex: 1,
    },
    contentInnerPortrait: {
        margin: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
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

    // landscape
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
    imageLandscape: {
        width: '100%',
        height: '100%',
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
})

export default StartGameScreen
