import * as React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

const DaySelector = () => {
	const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	const date = new Date();

	return (
		<View style={styles.container}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{week.map((day) => {
					return (
						<Pressable style={styles.dayButton}>
							<Text>{day}</Text>
						</Pressable>
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
	},
	dayButton: {
		borderRadius: 50,
		width: 60,
		height: 60,
		backgroundColor: "lightgrey",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
});
