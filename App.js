import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: 'gray' } }}
        >
        <Stack.Screen name="Tela1" component={Tela1} options = {{headerShown: false}} />
        <Stack.Screen name="Tela2" component={Tela2} options= {{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}