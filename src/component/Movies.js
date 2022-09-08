import { useNavigation } from "@react-navigation/native"
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native"



export default function Movies({ image, text, decription }) {
    console.log(
        text
    )
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container} >

            <Image source={image} style={styles.img} />
            <Text style={styles.txt}>{text}</Text>
            <Text style={styles.dec}>{decription}</Text>

            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.navigate('SingleMovie', { image, text, decription })
            }}>
                <Text style={styles.txt}>
                    Show
                </Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        margin: 2,
        backgroundColor: 'black',
        width: 370,
        borderRadius: 20

    },
    txt: {
        marginLeft: 10,
        fontSize: 35,
        fontStyle: 'italic',
        color: '#72FFFF',
    },
    img: {
        width: 350,
        height: 200,
        borderRadius: 20,
        margin: 10
    },
    dec: {
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        padding: 10
    },
    btn: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: 90,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#B7C4CF',
        borderWidth: 2,

    }

})