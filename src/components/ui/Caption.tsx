import {
    Dimensions,
    StyleSheet,
    Text,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'
import Resolutions from '../../constants/screens/resolutions'

function Caption({ children, style }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        captionPortrait: {
            color: Colors.mspaintYellow,
            fontFamily: 'RobotoBold',
            fontSize: deviceWidth <= Resolutions.phoneLarge ? 14 : 24,
        },
        captionLandscape: {
            color: Colors.mspaintYellow,
            fontFamily: 'RobotoBold',
            fontSize: deviceWidth <= Resolutions.phoneLarge ? 18 : 32,
        },
    })

    if (width > height) {
        content = (
            <>
                <Text style={ [styles.captionLandscape, style] } >
                    { children }
                </Text>
            </>
        )
    } else {
        content = (
            <>
                <Text style={ [styles.captionPortrait, style] } >
                    { children }
                </Text>
            </>
        )
    }

    return content
}

export default Caption
