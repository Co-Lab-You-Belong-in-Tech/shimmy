import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import IconLabel from './IconLabel';

const iconColor = '#B6E8E9';

const ShimmyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>Shimmy Time</Text>
          <Text style={styles.categoryStyle}>1 min</Text>
          <View style={styles.iconLabelStyle}>
            <IconLabel name="ios-time" label="label" color={iconColor} />
            <IconLabel name="ios-pin" label="label" color={iconColor} />
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 50,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#B6E8E9',
    height: 184,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.65,
    shadowRadius: 1,
    elevation: 9,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default ShimmyCard;