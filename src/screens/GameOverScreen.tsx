import { View, Image, StyleSheet, Text } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({ rounds, userNumber, onNewGame }) {
    return (
        <View style={ styles.container }>
            <Title>IT's [[ALLLL OVER]] AT HALF PRICE!</Title>
            <View style={ styles.imageContainer }>
                <Image
                    source={ require('../../assets/images/spamton-fortnite-dance.gif') }
                    style={ styles.image }
                />
            </View>
            <Text style={ styles.summaryText }>Your number was <Text style={ styles.highlight }>{ userNumber }</Text>...</Text>
            <Text style={ styles.summaryText }>And it only took me <Text style={ styles.highlight }>{ rounds }</Text> guesses!!</Text>
            <PrimaryButton
                onPress={ onNewGame }>Play Again</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 48,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        borderWidth: 3,
        borderColor: 'Colors.primary800',
        borderRadius: 200,
        width: 400,
        height: 400,
        overflow: 'hidden',
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%',
    },

    summaryText: {
        // fontFamily: 'RobotoBlack',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 12,
    },

    highlight: {
        // fontFamily: 'RobotoBold',
        color: Colors.accent500,
        fontSize: 28,
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 24,
    }
})

export default GameOverScreen
