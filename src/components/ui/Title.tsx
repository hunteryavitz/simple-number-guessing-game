import {Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../constants/colors'

function Title({ children }) {
  return (
    <Text style={ styles.title }>{ children }</Text>
  )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    title: {
        fontFamily: 'RobotoThin',
        fontSize: deviceWidth < 480 ? 22 : 36,
        color : Colors.mspaintYellow,
        textAlign: 'center',
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderRadius: 4,
        borderColor: Colors.black,
        padding: deviceWidth < 480 ? 12 : 24,
        minWidth: 280,
        maxWidth: '80%',
        backgroundColor: 'rgba(0,0,0,0.9)',
    }
})

export default Title
