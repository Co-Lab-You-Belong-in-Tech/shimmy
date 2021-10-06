import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet} from 'react-native';
import firebase from '../firebase';


const Name = ({navigation}) => {
    const [text, setText] = useState('')

    const dbRef = firebase.database().ref()

    navigation.setOptions({
        headerRight:() => (
            <Pressable onPress={() => navigation.navigate('Time')}>
                <Text>Skip</Text>
            </Pressable>
        )
    })

    return (
        <View style={styles.container}>
            <Text>What's your name?</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginVertical: 20,
                    padding: 10
                }}
                onChangeText={text => setText(text)}
                defaultValue={text}

            />
            <Pressable 
            style={styles.nextButton}
            onPress={() => {
                dbRef.push(text)
                navigation.navigate('Time');
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    nextButton: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'black',
    },

    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

})
export default Name;