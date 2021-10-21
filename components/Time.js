import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import * as db from '../firebase';
import { useFonts,
	Baloo2_400Regular,
	Baloo2_600SemiBold,
  } from '@expo-google-fonts/baloo-2';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const DEFAULT_SCHED = {
  uid: 123,
  repeats: true,
  time: null
}

const Time = ({navigation}) => {
  const [schedule, setSchedule] = React.useState(DEFAULT_SCHED)
  const [submitting, setSubmitting] = React.useState(false)

  const handleCreateShedule = () => {
    try {
      setSubmitting(true)
      db.createShimmy(schedule)
      setSchedule(DEFAULT_LIST)
      setSubmitting(false)
    } catch(error) {
      console.error(error)
    } finally {
      setSubmitting(false)
  }}

  const handleChange = (value) => {
    setSchedule(prevState => ({ ...prevState, time: value }))
  } 

  const styles = StyleSheet.create({
    headertext: {
      fontSize: 26,
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
    timeButton:{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 75,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#15999B',
      width: 200
    },
    roundButton: {
      margin: 10,
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
      borderRadius: 50,
      backgroundColor: '#076264',
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: 'white',
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>
       When would you like to have shimmy time?
      </Text>
      <Text style={styles.subtext}>This is a 1 minute movement break.</Text>
        <Picker
          selectedValue={"0900"}
          onValueChange={(value) => handleChange(value)}
          mode="dropdown" // Android only
          style={styles.picker}>
          <Picker.Item label="09:00" value="0900" />
          <Picker.Item label="09:30" value="0930" />
          <Picker.Item label="10:30" value="1030" />
          <Picker.Item label="11:00" value="1100" />
        </Picker>
        <Pressable 
        style={styles.button}
        onPress={handleCreateShedule
        }></Pressable>
    </View>
    );
}
export default Time;