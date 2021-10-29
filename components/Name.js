import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet} from 'react-native';
import * as db from '../firebase';
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

const Name = ({navigation}) => {
  const [text, setText] = useState('')

  navigation.setOptions({
    headerRight:() => (
      <Pressable onPress={() => navigation.navigate('Time')}>
        <Text>Skip</Text>
      </Pressable>
    )
  })

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />; 
	} else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
          start={{ x: -1, y: 0 }}
          style={styles.background}
         />
        <Text style={styles.headertext}>What's your name?</Text>
        <TextInput
            style={{
              height: 44,
              width: 300,
              top: 24,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: "1px solid #687273",
              borderRadius: 10,
              margin: 20,
            }}
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
        <Pressable 
        style={styles.button}
        onPress={() => {
            navigation.navigate('Time');
        }}>
        <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFEBAF',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Baloo2_400Regular'
	},
	headertext: {
		fontSize: 26,
		lineHeight: 30,
		fontFamily: 'Baloo2_400Regular'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 25,
		elevation: 3,
		backgroundColor: '#15999B',
    width: 300,
	},
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
  background: {
    position: 'absolute',
    zIndex: -1, // works on ios
    elevation: -1, // works on android
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  }
})
export default Name;