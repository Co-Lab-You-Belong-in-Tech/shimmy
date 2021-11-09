import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/screens/WelcomeScreen';
import NameScreen from './components/screens/NameScreen';
import TimeScreen from './components/screens/TimeScreen';
import HomeScreen from './components/screens/HomeScreen';
import ShimmyCard from './components/ShimmyCard';
import ShimmyScreen from './components/screens/ShimmyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Welcome" 
          component={WelcomeScreen}
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
          component={NameScreen}
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
          component={TimeScreen}
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
          name="ShimmyTime"
          component={ShimmyScreen}
          options={{
            headerTitle: "shimmy time",
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="ShimmyCard"
          component={ShimmyCard}
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
