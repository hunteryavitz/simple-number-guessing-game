import {Text, View, Pressable, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../constants/colors'

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        onPress()
    }

    return (
        <View style={ styles.buttonOuterContainer }>
            <Pressable
                onPress={ pressHandler }
                android_ripple={{ color: Colors.mspaintBlue, borderless: false }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={ styles.buttonText }>{ children }</Text>
            </Pressable>
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 16,
        margin: deviceWidth < 480 ? 12 : 24,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.mspaintYellow,
        padding: deviceWidth < 480 ? 12 : 24,
        elevation: 4,
    },
    buttonText: {
        fontFamily: 'RobotoBold',
        color: Colors.black,
        fontSize: deviceWidth < 480 ? 18 : 32,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.2
    }
})

export default PrimaryButton
