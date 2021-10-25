import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Ring = () => {
    return <View style={styles.circle} />;
  };
  
  const styles = StyleSheet.create({
    circle: {
      elevation: 0,
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: 300 / 2,
      backgroundColor: "white",
    },
});

export default Ring;