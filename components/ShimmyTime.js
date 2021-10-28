import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import SvgComponent from './SvgComponent';
import AudioPlayer from './AudioPlayer';
import { LinearGradient } from 'expo-linear-gradient';
import Ring from './Ring';

const Shimmytime = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  navigation.setOptions({
    headerTransparent: true,
    headerLeft: () => <HeaderBackButton onPress={() => navigation.navigate('Home')}/>
  })
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        //background: linear-gradient(167.96deg, #FFD5A0 9.37%, #FFEBAF 50%, #B6E8E9 90.1%);
        colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
        start={{ x: 0, y: 1}}
        style={styles.background}
      />
            <Text>Shimmy time</Text>
      <Text>Move in a way that feels good to you!</Text>
      <View style={{ position: 'absolute', alignItems: 'center' }}>
      <Ring size={300} style={{ position: 'absolute', alignItems: 'center' }}/>
      <SvgComponent style={{ position: 'absolute', top: 40, alignItems: 'center' }} />
      <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={60}
          colors='#FFA332'
          rotation='counterclockwise'
          onComplete={() => [true]}
          size={300}
          style={{ position: 'absolute', top: 400 }}
          >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return <Text style={{marginTop:'70%'}}>{`${minutes < 1 ? 0 : '01' }:${seconds}`}</Text>
          }}
      </CountdownCircleTimer>
      </View>
      <View style={{ top: 200 }}>
        <AudioPlayer />
      </View>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  });
export default Shimmytime;