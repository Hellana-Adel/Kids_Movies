import { ScrollView,  Text , StyleSheet , Image} from "react-native"
 export default function SingleMovie({route}) {
  
        return (
            <ScrollView style={styles.container}>
             
                    <Text style={styles.txt}>
                     ******{route.params.text}******
                    </Text>
                    <Image style={styles.img} source={route.params.image}/>
                  
                   <Text style={styles.txt2}>{route.params.decription}</Text>
                   <Text style={styles.txt}>
                    Price :- 200LE.
                   </Text>
            </ScrollView>
        )
    }
    const styles = StyleSheet.create({
container:{
    backgroundColor:'black',
 
},
txt:{
    color:'#72FFFF',
    fontSize:40,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:20,
    fontStyle:'italic',
    
},
txt2:{
    padding:20,
    color:'white',
    fontSize:20,
    fontStyle:'italic'
},
img:{
    width:400,
    height:600
}
    })