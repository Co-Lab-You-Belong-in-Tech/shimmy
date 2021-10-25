import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Time from './components/Time';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          component={Time}/>
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
