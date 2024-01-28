import {StyleSheet, View} from 'react-native'
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={ styles.card }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        margin: 24,
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        opacity: 0.9,
        elevation: 4,
        shadowColor: Colors.dark900,
        shadowOffset: {
            width: 8, height: 8
        },
        shadowRadius: 8,
        shadowOpacity: 0.25
    },
})

export default Card
