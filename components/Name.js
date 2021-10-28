import React, { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import * as db from "../firebase";
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
} from "@expo-google-fonts/baloo-2";
import AppLoading from "expo-app-loading";

const Name = ({ navigation }) => {
	const [text, setText] = useState("");

	navigation.setOptions({
		headerRight: () => (
			<Pressable onPress={() => navigation.navigate("Time")}>
				<Text>Skip</Text>
			</Pressable>
		),
	});

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.headertext}>What's your name?</Text>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						marginVertical: 20,
						padding: 10,
					}}
					onChangeText={(text) => setText(text)}
					defaultValue={text}
				/>
				<Pressable
					style={styles.button}
					onPress={() => {
						navigation.navigate("Time");
					}}
				>
					<Text style={styles.buttonText}>Next</Text>
				</Pressable>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFEBAF",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		fontFamily: "Baloo2_400Regular",
	},
	headertext: {
		fontSize: 26,
		lineHeight: 30,
		fontFamily: "Baloo2_400Regular",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 25,
		elevation: 3,
		backgroundColor: "#15999B",
		width: 200,
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
export default Name;
