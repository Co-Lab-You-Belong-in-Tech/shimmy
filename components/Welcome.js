import React from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';
import { 
	Montserrat_400Regular,
	Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import SvgComponent from './SvgComponent';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold,
		Montserrat_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />; 
	} else {
	return (
		<View style={styles.container}>
			      <LinearGradient
        colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
        start={{ x: -1, y: 0.1 }}
        style={styles.background}
      />
			<Text style={styles.headertext}>Welcome to</Text>
			<Text style={{fontFamily: 'Baloo2_600SemiBold', fontSize: 90}}>shimmy</Text>
			<SvgComponent />
			<Text style={styles.tagline}>Sit less, move more</Text>
			<Pressable 
				onPress={() => navigation.navigate('Name')}
				style={styles.button}
			>
				<Text style={styles.text}>Get Started</Text>    
			</Pressable>
			<Login />
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
	background: {
		position: 'absolute',
		zIndex: -1, // works on ios
		elevation: -1, // works on android
		left: 0,
		right: 0,
		top: 0,
		height: windowHeight,
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
		fontFamily: 'Montserrat_400Regular',
		fontSize: 16,
		fontWeight: 500,
		lineHeight: 24,
		fontWeight: 'bold',
		letterSpacing: "-0.02em",
		color: 'white',
	},
	headertext: {
		letterSpacing: '-0.02em',
		fontSize: 26,
		lineHeight: 30,
		fontFamily: 'Baloo2_400Regular'
	},
	tagline: {
		fontSize: 26,
		padding: 20,
		lineHeight: 30,
		fontWeight: 400,
		fontFamily: 'Baloo2_400Regular',
		letterSpacing: '-0.02em'
	}
})

export default Welcome;