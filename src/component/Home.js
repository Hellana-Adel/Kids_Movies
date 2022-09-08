import { SafeAreaView, Image, Text, StyleSheet } from "react-native"



export default function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.txt1}>Kids </Text>
            {/* <Text style={styles.txt2}>Find all series and movies in an easy way </Text> */}

            <Image source={require('../../assets/logoKids.jpg')} style={styles.img} />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 90,
        flexDirection: 'row',
        marginBottom: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 1,
      

    },

    txt1: {
        fontSize: 30,
        marginTop: 20,
        marginLeft:20,
        marginRight:180,
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
    },
 
    img: {
        width: 80,
        height: 80,
        flex: 'row',
        borderRadius:80

    }


})