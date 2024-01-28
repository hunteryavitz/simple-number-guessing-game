import {View, Text, StyleSheet} from 'react-native'

function LogItem({ round, guess }: { round: number, guess: string }) {
  return (
      <View style={ styles.item }>
          <Text style={ styles.itemText }>Round { round }</Text>
          <Text>Spamton Guessed: { guess }</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'Colors.accents500',
        borderWidth: 2,
        borderColor: 'Colors.primary800',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
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
    }
})

export default LogItem
