import {StyleSheet, Text} from 'react-native';
import React from 'react';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    borderWidth: 4,
    borderColor: '#dc143c',
    borderRadius: 10,
    backgroundColor: '#dcdcdc',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: '80%',
    width: 300,
  },
});
