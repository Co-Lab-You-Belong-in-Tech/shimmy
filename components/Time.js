import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from "react-native";
import TimeSelector from "./TimeSelector";
import * as db from "../firebase";
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
} from "@expo-google-fonts/baloo-2";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import uuid from "react-native-uuid";
import { LinearGradient } from "expo-linear-gradient";

const Time = ({ navigation }) => {
	const [schedule, setSchedule] = useState({
		day: {
			scheduled: null,
			is_active: false,
			shimmy_id: uuid.v4(),
		},
	});

	const [submitting, setSubmitting] = React.useState(false);
	const [time, setTime] = React.useState("0900");

	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = React.useState(false);
	const [tuesday, setTuesday] = React.useState(false);
	const [wednesday, setWednesday] = React.useState(false);
	const [thursday, setThursday] = React.useState(false);
	const [friday, setFriday] = React.useState(false);
	const [saturday, setSaturday] = React.useState(false);

	const handleChange = (value) => {
		setTime(value);
	};

	// I don't know what I am doing here! How do I get my state to change, and remain set?
	useEffect(() => {}, [
		schedule,
		sunday,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
	]);

	const handleCreateShedule = () => {
		// Sets the date to true, dummy for now
		setSunday(true);
		// If true then set schedule with useState...
		if (sunday) {
			setSchedule({
				Sunday: {
					scheduled: time,
					is_active: true,
					shimmy_id: uuid.v4(),
				},
			});
			setSubmitting(true);
			// The call to firestore, I expect this to be the set state
			// But instead it uses the default state
			db.createShimmy("test321", schedule);
			setSubmitting(false);
		}
		if (monday) {
			setSchedule({
				Monday: {
					scheduled: time,
					is_active: true,
					shimmy_id: uuid.v4(),
				},
			});
			setSubmitting(true);
			db.createShimmy("test321", schedule);
			setSubmitting(false);
		}
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
		picker: {
			marginVertical: 30,
			width: 300,
			padding: 10,
			borderWidth: 1,
			borderColor: "#666",
		},
		background: {
			position: "absolute",
			zIndex: -1, // works on ios
			elevation: -1, // works on android
			left: 0,
			right: 0,
			top: 0,
			height: 1000,
		},
	});

	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				//background: linear-gradient(167.96deg, #FFD5A0 9.37%, #FFEBAF 50%, #B6E8E9 90.1%);
				colors={["#FFD5A0", "#FFEBAF", "#B6E8E9"]}
				start={{ x: -1, y: 0 }}
				style={styles.background}
			/>
			<Text style={styles.headertext}>
				When would you like to have shimmy time?
			</Text>
			<Text style={styles.subtext}>This is a 1 minute movement break.</Text>
			<TimeSelector
				value='0900'
				onValueChange={(value) => handleChange(value)}
				style={styles.picker}
			/>
			<Pressable
				style={styles.button}
				onPress={() => {
					// This handles the "submission"
					handleCreateShedule();
					navigation.navigate("Home");
				}}
			></Pressable>
		</View>
	);
};
export default Time;
