import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import AudioPlayer from './AudioPlayer';
import { LinearGradient } from 'expo-linear-gradient';
import Ring from './Ring';
import { useFonts,
Baloo2_500Medium,
	Baloo2_400Regular,
	Baloo2_600SemiBold
  } from '@expo-google-fonts/baloo-2';

  const windowHeight = Dimensions.get('window').height;


const Shimmytime = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  navigation.setOptions({
    headerTransparent: true,
    headerLeft: () => <HeaderBackButton onPress={() => navigation.navigate('Home')}/>
  })

  
	let [fontsLoaded] = useFonts({
    Baloo2_500Medium,
		Baloo2_400Regular,
    Baloo2_600SemiBold
	});
  return (
    <View style={styles.container}>
     
      <LinearGradient
        // Background Linear Gradient
        //background: linear-gradient(167.96deg, #FFD5A0 9.37%, #FFEBAF 50%, #B6E8E9 90.1%);
        colors={['#FFD5A0', '#FFEBAF', '#B6E8E9']}
        start={{ x: -1, y: 0.1 }}
        style={styles.background}
      />
      <View>
      <Text style={{ margin: 50, marginTop: 150, color: '#313838', fontFamily: 'Baloo2_500Medium', textAlign: 'center', alignItems: 'center', fontSize: 26, lineHeight: 30, letterSpacing: '-0.02em' }}>Move in a way that feels good to you!</Text>
      </View>
      <View style={{ position: 'absolute', alignItems: 'center' }}>
      <Ring size={300} style={{ position: 'absolute', alignItems: 'center' }}/>
     <Image source={require('../assets/shimmydancer.gif')} style={{ position: 'absolute', top: 70, alignItems: 'center', zIndex: 1, width: 180, height: 180 }} />
      <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={60}
          colors='#FFA332'
          rotation='counterclockwise'
          onComplete={() => [true]}
          size={300}
          style={{ position: 'absolute', top: 400, padding: 50 }}
          >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return <Text style={{marginTop:'70%'}}>{`${minutes < 1 ? 0 : '01' }:${seconds}`}</Text>
          }}
      </CountdownCircleTimer>
      </View>
        <AudioPlayer />
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
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  background: {
		position: 'absolute',
		zIndex: -1, // works on ios
		elevation: -1, // works on android
		left: 0,
		right: 0,
		top: 0,
		height: windowHeight,
	},
  });
export default Shimmytime;