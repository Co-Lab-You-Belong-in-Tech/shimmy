import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';


const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to shimmy</Text>
            <Text>Sit less, move more</Text>
            <Pressable 
                onPress={() => navigation.navigate('Name')}
                style={styles.button}
            >
                <Text style={styles.text}>Get Started</Text>    
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'black',
        width: 200
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})

export default Welcome;