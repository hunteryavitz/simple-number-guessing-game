import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Title({ children }) {
  return (
    <Text style={ styles.title }>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'RobotoBold',
        fontSize: 24,
        color : Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 16,
    }
})

export default Title
