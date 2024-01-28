import {Dimensions, StyleSheet, Text} from 'react-native'
import Colors from '../../constants/colors'

function Caption({ children, style }) {
    return (
        <Text style={ [styles.caption, style] } >
            { children }
        </Text>
    )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    caption: {
        color: Colors.mspaintYellow,
        fontFamily: 'RobotoBold',
        fontSize: deviceWidth < 480 ? 14 : 24,
    },
})
export default Caption
