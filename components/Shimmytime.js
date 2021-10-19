import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import SvgComponent from './SvgComponent';

const Shimmytime = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  navigation.setOptions({
    headerLeft: () => <HeaderBackButton onPress={() => navigation.navigate('Home')}/>
  })

  return (
       <View style={styles.container}>
          <Text>Move in a way that feels good to you!</Text>
          <SvgComponent style={{position: 'absolute', marginBottom: 20}} />
          <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={60}
              colors='#FFA332'
              rotation='counterclockwise'
              onComplete={() => [true]}
              size={300}
              >
              {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                return <Text style={{marginTop:'70%'}}>{`${minutes < 1 ? 0 : 1 }:${seconds}`}</Text>
              }}
          </CountdownCircleTimer>
          <Text>Music title go here</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });
export default Shimmytime;