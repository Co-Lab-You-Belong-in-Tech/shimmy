import * as React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

const DaySelector = () => {
	const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	const date = new Date();
	const today = date.getDay();

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
								<Text>{day}</Text>
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
		backgroundColor: "lightgrey",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		borderStyle: "solid",
		borderWidth: 3,
		borderColor: "#15999B",
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
