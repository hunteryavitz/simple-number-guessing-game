import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.number }>{ children }</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderColor: Colors.black,
        padding: deviceWidth < 480 ? 12 : 24,
        margin: deviceWidth < 480 ? 24 : 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.mspaintPink,
    },
    number: {
        fontSize: deviceWidth < 480 ? 24 : 48,
        fontFamily: 'RobotoThin',
        fontWeight: 'bold',
        color: Colors.black,
    },
})

export default NumberContainer
