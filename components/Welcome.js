import React from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';
import SvgComponent from './SvgComponent';
import * as db from '../firebase'

const Welcome = ({navigation}) => {
	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold
	});

	if (!fontsLoaded) {
		return <AppLoading />; 
	} else {
	return (
		<View style={styles.container}>
			<Text style={styles.headertext}>Welcome to</Text>
			<Text style={{fontFamily: 'Baloo2_600SemiBold', fontSize: 90}}>Shimmy</Text>
			<SvgComponent />
			<Text style={styles.tagline}>Sit less, move more</Text>
			<Pressable 
				onPress={() => navigation.navigate('Name')}
				style={styles.button}
			>
				<Text style={styles.text}>Get Started</Text>    
			</Pressable>
		</View>
	)
}};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEBAF',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
		width: 200
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	headertext: {
		fontSize: 26,
		lineHeight: 30,
		fontFamily: 'Baloo2_400Regular'
	},
	tagline: {
		fontSize: 26,
		padding: 20,
		lineHeight: 30,
		fontFamily: 'Baloo2_400Regular'
	}
})

export default Welcome;