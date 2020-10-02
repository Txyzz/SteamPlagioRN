import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login';
import Conversa from './src/pages/Conversa';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer style={{backgroundColor: '#171a21', flex: 1}}>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Conversa" component={Conversa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
