import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
  Pressable,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as db from '../firebase'
import Basic from './basic';



const HomeScreen = ({navigation}) => {
  navigation.setOptions({
    headerLeft: () => null,
  })

  const componentMap = {
    Basic,
  };

  console.log(db.getShimmy("123"))

  let [fontsLoaded] = useFonts({
		Baloo2_400Regular,
		Baloo2_600SemiBold
	});

  const [mode, setMode] = React.useState('Basic');

  const renderExample = () => {
      const Component = componentMap[mode];
      return <Component />;
  };

  function HomeScreen() {
    if (!fontsLoaded) {
      return <AppLoading />; 
    } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ position: 'absolute', top: 20, fontFamily: 'Baloo2_600SemiBold', fontSize: 29, lineHeight: 40 }}>Shimmy</Text>
        <Text>Home screen will include...</Text>
        <Text>Weekly progress bar</Text>
        <Text>Schedule view</Text>
        <View style={styles.container}>
          <View style={styles.switchContainer}>
              {Object.keys(componentMap).map(type => (
                  <TouchableOpacity
                      key={type}
                      style={[
                          styles.switch,
                          {
                              backgroundColor:
                                  mode === type ? 'grey' : 'white',
                          },
                      ]}
                      onPress={() => setMode(type)}
                  >
                      <Text>{type}</Text>
                  </TouchableOpacity>
              ))}
          </View>
          {renderExample()}
      </View>
        <Pressable style={styles.scheduleButton}
          onPress={() => navigation.navigate('Shimmytime')}>
            <Text>SHIMMYTIME TEST</Text>
			  </Pressable>
      </View>
    );
  }};
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ position: 'absolute', top: 20, fontFamily: 'Baloo2_600SemiBold', fontSize: 29, lineHeight: 40 }}>Shimmy</Text>
        <Text>Settings screen will include...</Text>
        <Text>Membership information</Text>
        <Text>Setting shimmy time</Text>
        <Text>Toggle notifications</Text>
        <Text>Allow music</Text>
        <Text>Allow haptics</Text>
        <Pressable style={styles.scheduleButton}></Pressable>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            <Ionicons
              name={
                focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Settings') {
          return (
            <Ionicons
              name={focused ? 'ios-list-box' : 'ios-list'}
              size={size}
              color={color}
            />
          );
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tomato',
    })}
  >
        <Tab.Screen 
          name="Home"
          options={{
            cardStyle: { backgroundColor: '#FFEBAF' },
            headerTitle:"", 
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0
            },
            }}
          component={HomeScreen} 
        />

      <Tab.Screen
        name="Shimmy"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
          name="Settings" 
          options={{
          cardStyle: { backgroundColor: '#FFEBAF' },
          headerTitle:"", 
          headerTransparent: true,
          headerStyle: {
            borderBottomWidth: 0
          },
          }}
        component={SettingsScreen} />
      </Tab.Navigator>

  );
}

// Styles
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#15999B',
    },
    roundButton: {
      margin: 15,
      width: hp('10%'),
      height: wp('10%'),
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
      borderRadius: 100,
      backgroundColor: 'lightgrey',
    },
    scheduleButton: {
      postion: 'absolute',
      marginBottom: 10,
      width: 56,
      height: 56,
      borderRadius: 50,
      backgroundColor: '#15999B',
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 50,
      flexWrap: 'wrap',
  },
  switch: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      marginVertical: 2,
      paddingVertical: 10,
      width: Dimensions.get('window').width / 3,
  },
});

export default HomeScreen;