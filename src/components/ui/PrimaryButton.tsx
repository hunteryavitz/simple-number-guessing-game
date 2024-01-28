import { Text, View, Pressable, StyleSheet  } from 'react-native'
import Colors from '../../constants/colors'

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        onPress()
    }

    return (
        <View style={ styles.buttonOuterContainer }>
            <Pressable
                onPress={ pressHandler }
                android_ripple={{ color: Colors.primary600, borderless: false }}
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

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 8,
        elevation: 4,
    },
    buttonText: {
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.5
    }
})

export default PrimaryButton
