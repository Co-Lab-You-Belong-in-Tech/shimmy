import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import firebase from "../firebase";
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
} from "@expo-google-fonts/baloo-2";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import {
	Div,
	ThemeProvider,
	Button,
	Input,
	Icon,
	Image,
} from "react-native-magnus";

const Time = ({ navigation }) => {
	const [daysArray, setDaysArray] = useState([]);
	const [time, setTime] = useState(false);

	const styles = StyleSheet.create({
		headertext: {
			fontSize: 26,
			lineHeight: 30,
			fontFamily: "Baloo2_400Regular",
		},
		subtext: {
			fontSize: 16,
			lineHeight: 24,
			fontFamily: "Montserrat_400Regular",
		},
		container: {
			backgroundColor: "#FFEBAF",
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			fontFamily: "Baloo2_400Regular",
		},
		row: {
			flexDirection: "row",
			flexWrap: "wrap",
		},
		button: {
			alignItems: "center",
			justifyContent: "center",
			margin: 30,
			paddingVertical: 16,
			paddingHorizontal: 32,
			borderRadius: 25,
			elevation: 3,
			backgroundColor: "#15999B",
			width: 200,
		},
		timeButton: {
			alignItems: "center",
			justifyContent: "center",
			margin: 75,
			paddingVertical: 16,
			paddingHorizontal: 32,
			borderRadius: 25,
			elevation: 3,
			backgroundColor: "#15999B",
			width: 200,
		},
		roundButton: {
			margin: 10,
			width: 45,
			height: 45,
			justifyContent: "center",
			alignItems: "center",
			padding: 1,
			borderRadius: 50,
			backgroundColor: "#076264",
		},
		buttonText: {
			fontSize: 16,
			lineHeight: 21,
			letterSpacing: 0.25,
			color: "white",
		},
	});

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold,
		Montserrat_400Regular,
	});

	const theme = {
		colors: {
			shimmygreen: "#076264",
		},
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.headertext}>
					When would you like to have shimmy time?
				</Text>
				<Text style={styles.subtext}>This is a 1 minute movement break.</Text>
				<Picker
					selectedValue={time}
					onValueChange={(value) => setTime(value)}
					mode='dropdown' // Android only
					style={styles.picker}
				>
					<Picker.Item label='09:00' value='09:00' />
					<Picker.Item label='09:30' value='09:30' />
					<Picker.Item label='10:30' value='10:30' />
					<Picker.Item label='11:00' value='11:00' />
				</Picker>
				<View style={styles.row}>
					<ThemeProvider theme={theme}>
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
						<Button bg='shimmygreen' />
					</ThemeProvider>
				</View>
				<Pressable
					style={styles.button}
					onPress={() => {
						// for each day selected, add shimmy times to cloud
						navigation.navigate("Home");
					}}
				>
					<Text style={styles.buttonText}>Next</Text>
				</Pressable>
			</View>
		);
	}
};

export default Time;
