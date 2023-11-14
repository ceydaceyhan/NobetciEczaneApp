import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    margin: 18,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#dc143c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2, //android only
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
