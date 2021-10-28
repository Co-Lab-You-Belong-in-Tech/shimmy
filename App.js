import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import Shimmytime from "./components/Shimmytime";
import Modal from "react-native-modal";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					options={{
						cardStyle: { backgroundColor: "#FFEBAF" },
						headerTitle: "",
						headerTransparent: true,
						headerStyle: {
							borderBottomWidth: 0,
						},
					}}
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Shimmytime'
					component={Shimmytime}
					options={{
						headerTitle: "shimmy time",
						headerTitleAlign: "center",
						headerStyle: {
							borderBottomWidth: 0,
						},
					}}
				/>
				{/* <Stack.Screen name="Date" component={}/>
        <Stack.Screen name="Notification" component={}/>
        <Stack.Screen name="Menu" component={}/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFEBAF",
		alignItems: "center",
		justifyContent: "center",
	},
});
