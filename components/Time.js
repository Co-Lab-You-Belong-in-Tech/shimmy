import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import firebase from "../firebase";
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
} from "@expo-google-fonts/baloo-2";

const Time = ({ navigation }) => {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const showTimepicker = () => {
		showMode("time");
	};

	const buttonClickedHandler = (value) => {
		const dateRef = firebase.database().ref("date");
		const date = {
			date: value,
		};
		dateRef.push(date);
	};

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

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.headertext}>
					When would you like to have shimmy time?
				</Text>
				<Text style={styles.subtext}>This is a 1 minute movement break.</Text>
				<Pressable style={styles.timeButton} onPress={showTimepicker}>
					<Text style={styles.buttonText}>Select a Time</Text>
				</Pressable>
				<View style={styles.row}>
					<DateTimePicker
						testID='dateTimePicker'
						display='spinner'
						value={date}
						mode={mode}
						is24Hour={true}
						onChange={onChange}
					/>
					<TouchableOpacity
						onPress={() => {
							let value = "Sunday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>S</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Monday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>M</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Tuesday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>T</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Wednesday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>W</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Thursday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>T</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Friday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>F</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							let value = "Saturday";
							buttonClickedHandler(value);
						}}
						style={styles.roundButton}
					>
						<Text style={styles.buttonText}>S</Text>
					</TouchableOpacity>
				</View>
				<View></View>
				<Pressable
					style={styles.button}
					onPress={() => {
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
