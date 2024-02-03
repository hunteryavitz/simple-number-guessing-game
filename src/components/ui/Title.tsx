import {
    Dimensions,
    StyleSheet,
    Text,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'

function Title({ children }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        titlePortrait: {
            fontFamily: 'RobotoThin',
            fontSize: deviceWidth < 520 ? 12 : 18,
            color : Colors.mspaintYellow,
            textAlign: 'center',
            borderWidth: deviceWidth < 520 ? 2 : 4,
            borderRadius: 4,
            borderColor: Colors.black,
            padding: deviceWidth < 520 ? 8 : 16,
            minWidth: deviceWidth < 520 ? 120 : 160,
            maxWidth: '80%',
            backgroundColor: 'rgba(0,0,0,0.9)',
        },
        titleLandscape: {
            fontFamily: 'RobotoThin',
            fontSize: deviceWidth < 520 ? 12 : 18,
            color : Colors.mspaintYellow,
            textAlign: 'center',
            borderWidth: deviceWidth < 520 ? 2 : 4,
            borderRadius: 4,
            borderColor: Colors.black,
            padding: deviceWidth < 520 ? 8 : 16,
            minWidth: deviceWidth < 520 ? 120 : 160,
            maxWidth: '80%',
            backgroundColor: 'rgba(0,0,0,0.9)',
        }
    })

    if (width > height) {
        content = (
            <>
                <Text style={ styles.titleLandscape }>{ children }</Text>
            </>
        )
    } else {
        content = (
            <>
                <Text style={ styles.titlePortrait }>{ children }</Text>
            </>
        )
    }

    return content
}

export default Title
