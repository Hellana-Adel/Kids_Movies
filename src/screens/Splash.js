import { View, StyleSheet, ImageBackground ,Text } from "react-native"

export default function Splash({ navigation }) {
    setTimeout(() => {
        navigation.navigate("Home")
    }, 5000)

    return (
        <View style={styles.container}>

            <ImageBackground source={require("../../assets/splash.jpg")} resizeMode="cover" style={styles.img}>
                <Text style={styles.txt}>
                    Let's start our Movie ^_^
                </Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
                flex: 1,
            },
            txt: {
                color: '#72FFFF',
                fontSize: 45,
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'center',
                lineHeight: 84,
                marginTop:120,
                marginLeft:-10,
        
            },
            img: {
               
                width: 400,
                height: 700,
                flex: 1,
                justifyContent: 'center',
            }
})