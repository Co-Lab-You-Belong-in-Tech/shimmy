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

  function storeDate(date) {
      const db = firebase.database();
      const reference = ref(db, 'users/');
      set(ref(db, 'users/'), {
        date: date
      })
  }

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

  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    onValue(reference, (snapshot) => {
        const date = snapshot.val().date;
        console.log(date);
      });
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
  roundButton1: {
    margin: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 100,
    backgroundColor: '#ccc',
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
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Sunday"}
          >
          <Text>S</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Monday"}>
          <Text>M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Tuesday"}>
          <Text>T</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Wednesday"}>
          <Text>W</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Thursday"}>
          <Text>T</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Friday"}>
          <Text>F</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          defaultValue={"Saturday"}>
          <Text>S</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Pressable style={styles.button} onPress={showTimepicker}>
          <Text style={styles.buttonText}>Select a Time</Text> 
        </Pressable>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Time;