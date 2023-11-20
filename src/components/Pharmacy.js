import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CallButton from './ui/CallButton';

export const Pharmacy = ({data}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>{data.EczaneAdi}</Text>
      </View>
      <View>
        <Text style={styles.addressText}>{data.Adresi}</Text>
      </View>
      <View style={styles.downContainer}>
        <Text style={styles.phoneText}>Phone: {data.Telefon}</Text>
      </View>
      <View>
        <CallButton phoneNumber={data.Telefon}>CALL</CallButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
    height: 160,
    padding: 3,
    margin: 4,
    backgroundColor: '#dddddd',
    flexDirection: 'column',
    borderRadius: 8,
  },
  topContainer: {
    marginTop: 4,
  },
  downContainer: {
    flex: 1,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#636160',
  },
  addressText: {
    marginTop: 4,
    fontSize: 14,
    color: 'black',
  },
  phoneText: {
    marginTop: 5,
    color: 'black',
  },
});
