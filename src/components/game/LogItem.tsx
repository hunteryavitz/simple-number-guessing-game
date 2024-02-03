import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'

function LogItem({ round, guess }: { round: number, guess: string }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        itemPortrait: {
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
        itemTextPortrait: {
            fontFamily: 'RobotoBold',
            fontSize: deviceWidth < 480 ? 14 : 24,
            color: Colors.white,
        },
        itemLandscape: {
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
        itemTextLandscape: {
            fontFamily: 'RobotoBold',
            fontSize: deviceWidth < 480 ? 14 : 24,
            color: Colors.white,
        }
    })

    if (width > height) {
        content = (
            <>
                <View style={ styles.itemLandscape }>
                    <Text style={ styles.itemTextLandscape }>Round { round }</Text>
                    <Text style={ styles.itemTextLandscape }>Spamton Guessed: { guess }</Text>
                </View>
            </>
        )
    } else {
        content = (
            <>
                <View style={ styles.itemPortrait }>
                    <Text style={ styles.itemTextPortrait }>Round { round }</Text>
                    <Text style={ styles.itemTextPortrait }>Spamton Guessed: { guess }</Text>
                </View>
            </>
        )
    }

  return content
}

export default LogItem
