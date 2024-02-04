import {
    Dimensions,
    StyleSheet,
    useWindowDimensions,
    View
} from 'react-native'
import Colors from '../../constants/colors'
import Resolutions from "../../constants/screens/resolutions";

function Card({ children }) {
    const deviceWidth = Dimensions.get('screen').width
    const { width, height } = useWindowDimensions()

    let content: any

    const styles = StyleSheet.create({
        cardPortrait: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: deviceWidth <= Resolutions.phoneLarge ? 12 : 12,
            padding: deviceWidth <= Resolutions.phoneLarge ? 12 : 12,
            borderWidth: deviceWidth <= Resolutions.phoneLarge ? 3 : 5,
            borderRadius: 8,
            borderColor: Colors.black,
            backgroundColor: Colors.black,
            opacity: 0.7,
            elevation: 4,
            shadowColor: Colors.dark900,
            shadowOffset: {
                width: deviceWidth <= Resolutions.phoneLarge ? 8 : 16, height: deviceWidth <= Resolutions.phoneLarge ? 8 : 16
            },
            shadowRadius: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
            shadowOpacity: 0.25
        },
        cardLandscape: {
            // justifyContent: 'center',
            alignItems: 'center',
            margin: deviceWidth <= Resolutions.phoneLarge ? 12 : 0,
            padding: deviceWidth <= Resolutions.phoneLarge ? 12 : 12,
            borderWidth: deviceWidth <= Resolutions.phoneLarge ? 3 : 5,
            borderRadius: 8,
            // borderBottomLeftRadius: 0,
            // borderBottomRightRadius: 0,
            borderColor: Colors.black,
            // backgroundColor: Colors.black,
            // opacity: 0.7,
            backgroundColor: 'rgba(0,0,0,0.4)',
            elevation: 4,
            shadowColor: Colors.dark900,
            shadowOffset: {
                width: deviceWidth <= Resolutions.phoneLarge ? 8 : 16, height: deviceWidth <= Resolutions.phoneLarge ? 8 : 16
            },
            shadowRadius: deviceWidth <= Resolutions.phoneLarge ? 8 : 16,
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
