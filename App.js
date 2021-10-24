import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shimmytime from './components/Shimmytime';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
