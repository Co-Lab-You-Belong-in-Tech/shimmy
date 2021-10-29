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
import { LinearGradient } from 'expo-linear-gradient';

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
      width: 150,
      backgroundColor: 'white',
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
    },
    background: {
      position: 'absolute',
      zIndex: -1, // works on ios
      elevation: -1, // works on android
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
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
      <LinearGradient
        colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
        start={{ x: -1, y: 0 }}
        style={styles.background}
      />
      <Text style={styles.headertext}>
       When would you like to have shimmy time?
      </Text>
      <Text style={styles.subtext}>This is a 1 minute movement break.</Text>
        <Picker
          selectedValue={time}
          onValueChange={(value) => setTime(value)}
          style={styles.picker}
        >
          <Picker.Item label="09:00" value="0900" />
          <Picker.Item label="09:15" value="0915" />
          <Picker.Item label="09:30" value="0930" />
          <Picker.Item label="09:45" value="0945" />
          <Picker.Item label="10:00" value="1000" />
          <Picker.Item label="10:15" value="1015" />
          <Picker.Item label="10:30" value="1030" />
          <Picker.Item label="10:45" value="1045" />
          <Picker.Item label="12:00" value="1200" />
          <Picker.Item label="12:15" value="1215" />
          <Picker.Item label="12:30" value="1230" />
          <Picker.Item label="12:45" value="1245" />
          <Picker.Item label="13:00" value="1300" />
          <Picker.Item label="13:15" value="1315" />
          <Picker.Item label="13:30" value="1330" />
          <Picker.Item label="13:45" value="1345" />
          <Picker.Item label="14:00" value="1400" />
          <Picker.Item label="14:15" value="1415" />
          <Picker.Item label="14:30" value="1430" />
          <Picker.Item label="14:45" value="1445" />
          <Picker.Item label="15:00" value="1500" />
          <Picker.Item label="15:15" value="1515" />
          <Picker.Item label="15:30" value="1530" />
          <Picker.Item label="15:45" value="1545" />
          <Picker.Item label="16:00" value="1600" />
          <Picker.Item label="16:15" value="1615" />
          <Picker.Item label="16:30" value="1630" />
          <Picker.Item label="16:45" value="1645" />
          <Picker.Item label="17:00" value="1700" />
          <Picker.Item label="17:15" value="1715" />
          <Picker.Item label="17:30" value="1730" />
          <Picker.Item label="17:45" value="1745" />
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