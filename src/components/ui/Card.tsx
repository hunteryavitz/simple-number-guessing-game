import {Dimensions, StyleSheet, View} from 'react-native'
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={ styles.card }>
            { children }
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 480 ? 12 : 24,
        padding: deviceWidth < 480 ? 12 : 24,
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: Colors.black,
        backgroundColor: Colors.black,
        opacity: 0.7,
        elevation: 4,
        shadowColor: Colors.dark900,
        shadowOffset: {
            width: deviceWidth < 480 ? 8 : 16, height: deviceWidth < 480 ? 8 : 16
        },
        shadowRadius: deviceWidth < 480 ? 8 : 16,
        shadowOpacity: 0.25
    },
})

export default Card
