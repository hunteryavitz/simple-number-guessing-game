import {
    Text,
    View,
    Pressable,
    StyleSheet,
    Dimensions,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'

function PrimaryButton({ children, onPress }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        buttonOuterContainerPortrait: {
            borderRadius: 16,
            margin: deviceWidth < 480 ? 12 : 24,
            overflow: 'hidden',
        },
        buttonInnerContainerPortrait: {
            backgroundColor: Colors.mspaintYellow,
            padding: deviceWidth < 480 ? 12 : 24,
            elevation: 4,
        },
        buttonTextPortrait: {
            fontFamily: 'RobotoBold',
            color: Colors.black,
            fontSize: deviceWidth < 480 ? 18 : 32,
            textAlign: 'center',
        },
        pressedPortrait: {
            opacity: 0.2
        },
        buttonOuterContainerLandscape: {
            borderRadius: 16,
            margin: deviceWidth < 480 ? 12 : 24,
            overflow: 'hidden',
        },
        buttonInnerContainerLandscape: {
            backgroundColor: Colors.mspaintYellow,
            padding: deviceWidth < 480 ? 12 : 24,
            elevation: 4,
        },
        buttonTextLandscape: {
            fontFamily: 'RobotoBold',
            color: Colors.black,
            fontSize: deviceWidth < 480 ? 18 : 32,
            textAlign: 'center',
        },
        pressedLandscape: {
            opacity: 0.2
        }
    })

    function pressHandler() {
        onPress()
    }

    if (width > height) {
        content = (
            <>
                <View style={ styles.buttonOuterContainerLandscape }>
                    <Pressable
                        onPress={ pressHandler }
                        android_ripple={{ color: Colors.mspaintBlue, borderless: false }}
                        style={({ pressed }) =>
                            pressed
                                ? [styles.buttonInnerContainerLandscape, styles.pressedLandscape]
                                : styles.buttonInnerContainerLandscape
                        }
                    >
                        <Text style={ styles.buttonTextLandscape }>{ children }</Text>
                    </Pressable>
                </View>
            </>
            )
    } else {
        content = (
            <>
                <View style={ styles.buttonOuterContainerPortrait }>
                    <Pressable
                        onPress={ pressHandler }
                        android_ripple={{ color: Colors.mspaintBlue, borderless: false }}
                        style={({ pressed }) =>
                            pressed
                                ? [styles.buttonInnerContainerPortrait, styles.pressedPortrait]
                                : styles.buttonInnerContainerPortrait
                        }
                    >
                        <Text style={ styles.buttonTextPortrait }>{ children }</Text>
                    </Pressable>
                </View>
            </>
        )
    }

    return content
}

export default PrimaryButton
