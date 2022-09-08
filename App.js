import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Homescreen from './src/screens/Homescreen';
import SingleMovie from './src/screens/SingleMovie';
import Splash from './src/screens/Splash';
export default function App() {
const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen  name="Home" component={Homescreen}/>
      <Stack.Screen  name="SingleMovie" component={SingleMovie}/>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>


  );
}


