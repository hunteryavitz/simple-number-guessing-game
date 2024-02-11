import {
    Dimensions,
    StyleSheet,
    Text,
    useWindowDimensions
} from 'react-native'
import Colors from '../../constants/colors'
import Resolutions from "../../constants/screens/resolutions";

function Title({ children }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        titlePortrait: {
            fontFamily: 'RobotoThin',
            fontSize: deviceWidth <= Resolutions.phoneLarge ? 12 : 18,
            color : Colors.mspaintYellow,
            textAlign: 'center',
            borderWidth: deviceWidth <= Resolutions.phoneLarge ? 2 : 4,
            borderRadius: 4,
            borderColor: Colors.black,
            padding: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
            minWidth: deviceWidth <= Resolutions.phoneLarge ? 120 : 160,
            maxWidth: '80%',
            backgroundColor: 'rgba(0,0,0,0.9)',
        },
        titleLandscape: {
            fontFamily: 'RobotoBold',
            fontSize: deviceWidth <= Resolutions.phoneLarge ? 18 : 32,
            color : Colors.mspaintYellow,
            textAlign: 'center',
            borderWidth: deviceWidth <= Resolutions.phoneLarge ? 2 : 4,
            borderRadius: 4,
            borderColor: Colors.black,
            padding: deviceWidth <= Resolutions.phoneLarge ? 4 : 8,
            minWidth: deviceWidth <= Resolutions.phoneLarge ? 120 : 160,
            maxWidth: '90%',
            backgroundColor: 'rgba(0,0,0,0.6)',

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
