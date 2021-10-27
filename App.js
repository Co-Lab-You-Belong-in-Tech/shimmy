import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Time from './components/Time';
import HomeScreen from './components/HomeScreen';
import Shimmytime from './components/Shimmytime';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Welcome" 
          component={Welcome}
        />
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
          component={Name}
        />
        <Stack.Screen 
          name="Time" 
          options={{
            cardStyle: { backgroundColor: '#FFEBAF' },
            headerTitle:"", 
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0
            },
            }}
          component={Time}
        />
        <Stack.Screen 
          name="Home" 
          options={{
            cardStyle: { backgroundColor: '#FFEBAF' },
            headerTitle:"", 
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0
            },
            }}
          component={HomeScreen}/>
        <Stack.Screen
          name="Shimmytime"
          component={Shimmytime}
          options={{
            headerTitle: "shimmy time",
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
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
    backgroundColor: '#FAF9F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
