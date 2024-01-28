import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.number }>{ children }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.accent500,
        padding: 8,
        margin: 8,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary800,
    },
    number: {
        fontSize: 28,
        fontFamily: 'RobotoThin',
        fontWeight: 'bold',
        color: Colors.accent500,
    },
})

export default NumberContainer
