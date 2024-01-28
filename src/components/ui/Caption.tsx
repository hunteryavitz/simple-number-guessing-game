import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

function Caption({ children, style }) {
    return (
        <Text style={ [styles.caption, style] } >
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    caption: {
        color: Colors.accent500,
        fontSize: 16,
        fontFamily: 'Roboto',
        marginVertical: 8
    },
})
export default Caption
