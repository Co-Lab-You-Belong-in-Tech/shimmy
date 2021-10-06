import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Time from './components/Time';
import {app} from './firebase';

const Stack = createNativeStackNavigator();

console.log(app);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
        <Stack.Screen  
        options={{
          headerTitle:"", 
          headerTransparent: true,
          headerStyle: {
            borderBottomWidth: 0
          },
          
      }}
        name="Name" 
        component={Name}/>
        <Stack.Screen name="Time" component={Time}/>
        {/* <Stack.Screen name="Date" component={}/>
        <Stack.Screen name="Notification" component={}/>
        <Stack.Screen name="Menu" component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
