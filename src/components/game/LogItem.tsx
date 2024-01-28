import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from "../../constants/colors";

function LogItem({ round, guess }: { round: number, guess: string }) {
  return (
      <View style={ styles.item }>
          <Text style={ styles.itemText }>Round { round }</Text>
          <Text style={ styles.itemText }>Spamton Guessed: { guess }</Text>
      </View>
  )
}

const deviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: deviceWidth < 480 ? 3 : 5,
        borderRadius: 8,
        backgroundColor: Colors.mspaintBlue,
        padding: deviceWidth < 480 ? 12 : 16,
        marginVertical: deviceWidth < 480 ? 8 : 16,
        elevation: 3,
        shadowColor: 'Colors.dark900',
        shadowOffset: {
            width: 8, height: 8
        },
        shadowRadius: 8,
        shadowOpacity: 0.25
    },
    itemText: {
        fontFamily: 'RobotoBold',
        fontSize: deviceWidth < 480 ? 14 : 24,
        color: Colors.white,
    }
})

export default LogItem
