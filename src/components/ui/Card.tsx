import {
    Dimensions,
    StyleSheet,
    useWindowDimensions,
    View
} from 'react-native'
import Colors from '../../constants/colors'

function Card({ children }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        cardPortrait: {
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
        cardLandscape: {
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

    if (width > height) {
        content = (
            <>
                <View style={ styles.cardLandscape }>
                    { children }
                </View>
            </>
        )
    } else {
        content = (
            <>
                <View style={ styles.cardPortrait }>
                    { children }
                </View>
            </>
        )
    }

    return content
}

export default Card
