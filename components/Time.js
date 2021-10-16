import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Time = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const buttonClickedHandler = value => {
    const dateRef = firebase.database().ref("date");
    const date = {
      date: value,
    }
    dateRef.push(date)
  };

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
      alignItems: 'center',
      justifyContent: 'center',
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
      margin: 58,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#15999B',
      width: 200
    },
    roundButton: {
      margin: 15,
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
});

  return (
    <View style={styles.screen}>
      <Pressable style={styles.timeButton} onPress={showTimepicker}>
        <Text style={styles.buttonText}>Select a Time</Text> 
      </Pressable>
      <View style={styles.row}>
        <DateTimePicker
              testID="dateTimePicker"
              display="spinner"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
        />
          <TouchableOpacity
              onPress={() => { 
              let value = "Sunday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>S</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Monday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>M</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Tuesday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>T</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Wednesday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>W</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Thursday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>T</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Friday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>F</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Saturday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text style={styles.buttonText}>S</Text>
          </TouchableOpacity>
          </View>
          <View>
 
          </View>
          <Pressable 
            style={styles.button}
            onPress={() => {
                navigation.navigate('Home');
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
    </View>
  );
};

export default Time;