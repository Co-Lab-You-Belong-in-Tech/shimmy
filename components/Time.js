import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../firebase';

const Time = ({navigation})  => {
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
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'black',
  },
  roundButton: {
    margin: 15,
    width: 15,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
          <TouchableOpacity
              onPress={() => { 
              let value = "Sunday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>S</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Monday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>M</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Tuesday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>T</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Wednesday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>W</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Thursday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>T</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Friday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>F</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => { 
              let value = "Saturday";
              buttonClickedHandler(value);
              }}
              style={styles.roundButton}
              >
              <Text>S</Text>
          </TouchableOpacity>
          </View>
          <View>
            <Pressable style={styles.button} onPress={showTimepicker}>
              <Text style={styles.buttonText}>Select a Time</Text> 
            </Pressable>
          </View>
    </View>
  );
};

export default Time;