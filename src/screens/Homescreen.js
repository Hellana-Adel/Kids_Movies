import { View, FlatList,  StyleSheet, } from 'react-native';
import Header from '../component/Header'
import Home from '../component/Home';
import Movies from '../component/Movies';


export default function Homescreen() {
    const data = [
        {
            image: require('../../assets/Dora.jpg'),
            text: "Dora",
            decription: "Dora Marquez embarks on a mission with her monkey, Boots, and her friends to rescue her missing parents and solve the mystery of a fabled city of gold."
        },
        {
            image: require('../../assets/insideout.png'),
            text: "Inside Out",
            decription: "Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life. Story by: Pete Docter, Ronnie del Carmen Producers: John Lasseter, Andrew Stanton, Jonas Rivera, Mark Nielsen "
        },
        {
            image: require('../../assets/monsters.jpg'),
            text: "Monsters",
            decription: "Six years after Earth has suffered an alien invasion, a cynical journalist agrees to escort a shaken American tourist through an infected zone in Mexico to the safety of the U.S. border."
        },
        {
            image: require('../../assets/ratatouille.jpg'),
            text: "Ratatouille",
            decription: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
        },
        {
            image: require('../../assets/frozen.jpeg'),
            text: "Frozen",
            decription: "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. Story by: Chris Buck; ‎Jennifer Lee‎"
        },
        {
            image: require('../../assets/sonic.jpg'),
            text: "Sonic",
            decription: "An extraterrestrial hedgehog is discovered by a scientist with evil intentions and plans to use his superpowers for his selfish needs. Release date: June 26, 2020 (Japan)"
        },
    ]
    return (
        <View style={styles.container} >
{/*  <Header></Header> */}
                <Home></Home >

                <FlatList data={data} renderItem={({ item }) => {
                    return <Movies image={item.image} text={item.text} decription={item.decription}></Movies>
                }} />
           


        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72FFFF',

    }
})