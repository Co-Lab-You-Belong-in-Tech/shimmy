import * as React from "react";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { View, Text, Pressable, StyleSheet } from "react-native";
import {
	useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
} from "@expo-google-fonts/baloo-2";
import {
	Montserrat_100Thin,
	Montserrat_100Thin_Italic,
	Montserrat_200ExtraLight,
	Montserrat_200ExtraLight_Italic,
	Montserrat_300Light,
	Montserrat_300Light_Italic,
	Montserrat_400Regular,
	Montserrat_400Regular_Italic,
	Montserrat_500Medium,
	Montserrat_500Medium_Italic,
	Montserrat_600SemiBold,
	Montserrat_600SemiBold_Italic,
	Montserrat_700Bold,
	Montserrat_700Bold_Italic,
	Montserrat_800ExtraBold,
	Montserrat_800ExtraBold_Italic,
	Montserrat_900Black,
	Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import { Icon } from "react-native-elements";
import ShimmyCard from "./ShimmyCard";
import DaySelector from "./DaySelector";

const HomeScreen = ({ navigation }) => {
	navigation.setOptions({
		headerShow: false,
		headerLeft: () => null,
	});

	let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold,
		Montserrat_600SemiBold,
	});

	function HomeScreen() {
		if (!fontsLoaded) {
			return <AppLoading />;
		} else {
			return (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Text
						style={{
							position: "absolute",
							top: 20,
							fontFamily: "Baloo2_600SemiBold",
							fontSize: 29,
							lineHeight: 40,
						}}
					>
						Shimmy
					</Text>
					<DaySelector />
					<Text
						style={{
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 16,
							lineHeight: 24,
						}}
					>
						Today's schedule:
					</Text>
					<ShimmyCard>
						<Pressable onPress={() => navigation.navigate("Shimmytime")}>
							<Text>Test</Text>
						</Pressable>
					</ShimmyCard>
				</View>
			);
		}
	}

	function SettingsScreen() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text
					style={{
						position: "absolute",
						top: 20,
						fontFamily: "Baloo2_600SemiBold",
						fontSize: 29,
						lineHeight: 40,
					}}
				>
					Shimmy
				</Text>
				<Text>Settings screen will include...</Text>
				<Text>Membership information</Text>
				<Text>Setting shimmy time</Text>
				<Text>Toggle notifications</Text>
				<Text>Allow music</Text>
				<Text>Allow haptics</Text>
			</View>
		);
	}

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName='Home'
			activeColor='#fff'
			tabBarOptions={customTabBarStyle}
			shifting='false'
		>
			<Tab.Screen
				name='Home'
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ color }) => (
						<Icon name='home' color={color} size={26} />
					),
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name='Add'
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ color }) => (
						<View
							style={{
								position: "absolute",
								bottom: 20, // space from bottombar
								height: 56,
								width: 56,
								borderRadius: 56,
								color: "#15999B",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Icon name='add-circle' color='#15999B' size={68} />
						</View>
					),
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name='Profile'
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ color }) => (
						<Icon name='insights' color={color} size={26} />
					),
				}}
				component={HomeScreen}
			/>
		</Tab.Navigator>
	);
};

// Styles

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	button: {
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 25,
		elevation: 3,
		backgroundColor: "#15999B",
	},
	roundButton: {
		margin: 15,
		width: hp("10%"),
		height: wp("10%"),
		justifyContent: "center",
		alignItems: "center",
		padding: 1,
		borderRadius: 100,
		backgroundColor: "lightgrey",
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
const customTabBarStyle = {
	height: 84,
	activeTintColor: "#0091EA",
	inactiveTintColor: "gray",
	style: { backgroundColor: "white" },
};

export default HomeScreen;
