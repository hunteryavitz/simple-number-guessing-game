import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        containerPortrait: {
            borderWidth: deviceWidth < 480 ? 3 : 5,
            borderColor: Colors.black,
            padding: deviceWidth < 480 ? 12 : 24,
            margin: deviceWidth < 480 ? 24 : 48,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.mspaintPink,
        },
        numberPortrait: {
            fontSize: deviceWidth < 480 ? 24 : 48,
            fontFamily: 'RobotoThin',
            fontWeight: 'bold',
            color: Colors.black,
        },
        containerLandscape: {
            borderWidth: deviceWidth < 480 ? 3 : 5,
            borderColor: Colors.black,
            padding: deviceWidth < 480 ? 12 : 24,
            margin: deviceWidth < 480 ? 24 : 48,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.mspaintPink,
        },
        numberLandscape: {
            fontSize: deviceWidth < 480 ? 24 : 48,
            fontFamily: 'RobotoThin',
            fontWeight: 'bold',
            color: Colors.black,
        },
    })

    if (width > height) {
        content = (
            <>
                <View style={ styles.containerLandscape }>
                    <Text style={ styles.numberLandscape }>{ children }</Text>
                </View>
            </>
        )
    } else {
        content = (
            <>
                <View style={ styles.containerPortrait }>
                    <Text style={ styles.numberPortrait }>{ children }</Text>
                </View>
            </>
        )
    }

    return content
}

export default NumberContainer
