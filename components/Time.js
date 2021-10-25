import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
  } from '@expo-google-fonts/baloo-2';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Div, ThemeProvider, Button, Input, Icon, Image } from 'react-native-magnus';

const Time = ({navigation}) => {
  const [daysArray, setDaysArray] = useState([]);
  const [time, setTime] = useState(false);

  navigation.setOptions({
    headerShown: false,
  })

  const styles = StyleSheet.create({
    headertext: {
      fontSize: 19,
      lineHeight: 30,
      fontFamily: 'Baloo2_400Regular'
    },
    subtext: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Montserrat_400Regular'
    },
    container: {
      backgroundColor: '#FFEBAF',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Baloo2_400Regular'
    },
    picker: {
      width: 300,
      backgroundColor: '#FFF0E0',
      borderColor: 'black',
      borderWidth: 1,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#15999B',
      width: 200
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: 'white',
    }
});

  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_600SemiBold,
    Montserrat_400Regular
  });

  const theme = {
    colors: {
      shimmygreen: "#076264"
    }
  }

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
          style={styles.picker}
        >
          <Picker.Item label="09:00" value="09:00" />
          <Picker.Item label="09:30" value="09:30" />
          <Picker.Item label="10:30" value="10:30" />
          <Picker.Item label="11:00" value="11:00" />
        </Picker>
        <View style={styles.row}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <Div row alignItems="center" justifyContent="center" flexDir="row" mt="xl">
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">S</Button>
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">M</Button>
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">T</Button>
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">W</Button>
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">T</Button>
            <Button bg="shimmygreen" h={40} w={40}  ml="md" rounded="circle">F</Button>
            <Button bg="shimmygreen" h={40} w={40} ml="md" rounded="circle">S</Button>
            </Div>
          </SafeAreaView>
        </ThemeProvider>
      </View>
          <Pressable 
            style={styles.button}
            onPress={() => {
              // for each day selected, add shimmy times to cloud
                navigation.navigate('Home');
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
    </View>
  )};
};

export default Time;