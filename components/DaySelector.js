import * as React from "react";
import { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import firebase from "../firebase";
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';

const DaySelector = () => {
	const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	const date = new Date();
	const today = date.getDay();

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold
	});

	const handleClick = () => {
		setviewDate(true);
	};

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={styles.container}
			>
				{week.map((day, i) => {
					console.log(week.indexOf(day));
					return (
						<View>
							<Pressable style={styles.dayButton}>
								<Text style={{fontFamily:Baloo2_600SemiBold, fontSize: 16}}>{day}</Text>
							</Pressable>
							{week.indexOf(day) === today ? (
								<Text style={styles.dot}></Text>
							) : null}
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default DaySelector;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		height: 100,
	},

	buttonContainer: {
		position: "relative",
	},

	dayButton: {
		borderRadius: 50,
		width: 60,
		height: 60,
		backgroundColor: "FAF9F6",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		borderStyle: "solid",
		borderWidth: 3,
		borderColor: "white",
	},

	dot: {
		borderRadius: 50,
		width: 5,
		height: 5,
		backgroundColor: "#15999B",
		position: "absolute",
		bottom: 20,
		left: 33,
	},
});
