import React, { useState } from 'react';
import { TextInput, View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InsightsScreen = ({navigation}) => {
  const [text, setText] = useState('')

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
	});

    return (
      <View style={styles.container}>
      <LinearGradient
        colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
        start={{ x: -1, y: 0.1 }}
        style={styles.background}/>
        <Text style={styles.headertext}> Here are the insights </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFEBAF',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Baloo2_400Regular'
	  },	
  background: {
		position: 'absolute',
		zIndex: -1, // works on ios
		elevation: -1, // works on android
		left: 0,
		right: 0,
		top: 0,
		height: windowHeight,
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
})

export default InsightsScreen;