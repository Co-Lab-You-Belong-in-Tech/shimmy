import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Time from './components/Time';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(242, 242, 242)',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
        <Stack.Screen  
        options={{
          cardStyle: { backgroundColor: '#FFEBAF' },
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
    backgroundColor: '#FFEBAF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
