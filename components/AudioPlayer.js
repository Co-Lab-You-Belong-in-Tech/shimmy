import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const Tracks = [
  {
    id: 0,
    name: "Shimmy - ShimmyTime",
    track: require('../assets/audio/Computer Music All-stars - Albatross v2.mp3'),
  },
];

export default function App() {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [CurrentSong, SetCurrentSong] = React.useState(Tracks[0]);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();

    return () => Unload();
  }, [CurrentSong]);

  const Unload = async () => {
    await sound.current.unloadAsync();
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LoadAudio = async () => {
    SetLoaded(false);
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          CurrentSong.track,
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          PlayAudio();
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  const NextSong = () => {
    if (CurrentSong.id === Tracks[Tracks.length - 1].id) {
      SetCurrentSong(Tracks[0]);
    } else {
      SetCurrentSong(Tracks[CurrentSong.id + 1]);
    }
  };

  const PrevSong = () => {
    if (CurrentSong.id === 0) {
      SetCurrentSong(Tracks[Tracks.length - 1]);
    } else {
      SetCurrentSong(Tracks[CurrentSong.id - 1]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.AudioPLayer}>
        {Loading === true ? (
          <ActivityIndicator size={'small'} color={'red'} />
        ) : (
          <>
            <Button title="Play" onPress={PlayAudio} />
            <Button title="Pause Song" onPress={PauseAudio} />
            <Text>Currently Playing : {CurrentSong.name}</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  AudioPLayer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});