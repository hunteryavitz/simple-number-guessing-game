import {View, Image, StyleSheet, Text, Dimensions} from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from "../components/ui/Card";

function GameOverScreen({ rounds, userNumber, onNewGame }) {
    return (
        <View style={ styles.container }>
            <Title>IT's [[ALLLL OVER]] AT HALF PRICE !!</Title>
            <View style={ styles.imageContainer }>
                <Image
                    source={ require('../../assets/images/spamton-fortnite-dance.gif') }
                    style={ styles.image }
                />
            </View>
            <View style={ styles.card }>

                <Card>
                        <Text style={ styles.summaryText }>Your number was <Text style={ styles.highlight }>{ userNumber }</Text>...</Text>
                        <Text style={ styles.summaryText }>And it only took me <Text style={ styles.highlight }>{ rounds }</Text> guesses !!</Text>
                    <PrimaryButton
                        onPress={ onNewGame }>Play Again ??</PrimaryButton>
                </Card>
            </View>
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: deviceWidth < 480 ? 64 : 96,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: deviceWidth < 480 ? 4 : 6,
        borderColor: 'Colors.black',
        borderRadius: deviceWidth < 480 ? 150 : 260,
        width: deviceWidth < 480 ? 300 : 520,
        height: deviceWidth < 480 ? 300 : 520,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'RobotoLight',
        fontSize: deviceWidth < 480 ? 24 : 40,
        textAlign: 'center',
        marginVertical: deviceWidth < 480 ? 12 : 18,
        color: Colors.mspaintYellow
    },
    highlight: {
        fontFamily: 'RobotoBold',
        color: Colors.mspaintPink,
        fontSize: deviceWidth < 480 ? 32 : 48,
    },
    button: {
        marginVertical: 24,
    },
    card: {
        width: '100%',
    }
})

export default GameOverScreen
