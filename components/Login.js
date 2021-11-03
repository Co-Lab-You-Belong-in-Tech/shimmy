import React, { useRef, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { USER_AGENT_HEADER } from '@aws-amplify/core';

export default function Login() {
    const passwordRef = useRef(null); 
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const setFormInput = (k, v) => {
        setForm({...form, [k]: v});
    }

    const signup = async () => {
        try {
            const res = await Auth.signUp({
                username: "example@example.com",
                password: "examplepassword123",
                attributes: {
                    email: "example@example.com",
                    name: "Example User"
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const login = async () => {
        setLoading(true);
        const { username, password } = form;
        try {
        const res = await Auth.signIn(username, password) 
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
 
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput 
                value={form.username}
                returnKeyType="next" 
                placeholder="username" 
                onChangeText={(value) => {
                    setFormInput("username", value)
                }}
                style={{
                    height: 50,
                    width: '100%',
                    bottomBorderWidth: 1,
                    backgroundColor: 'green',
                    padding: 10,
            }} />
            <TextInput 
                value={form.password}
                onSubmitEditing={() => {
                    passwordRef.current?.focus()
                }}
                onChangeText={(value) => {
                    setFormInput("password", value)
                }}
                secureTextEntry 
                returnKeyType="done" 
                placeholder="password" 
                style={{
                    height: 50,
                    width: '100%',
                    bottomBorderWidth: 1,
                    backgroundColor: 'green',
                    padding: 10,
                }} />
            <Button loading={loading} onPress={signup}> Login</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Baloo2_400Regular'
        },	
  })