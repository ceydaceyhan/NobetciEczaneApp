import {Pressable, StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

function CallButton({children, phoneNumber}) {
  const handlePress = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlePress}>
        <LinearGradient
          colors={['#FF0000', '#DC143C']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.buttonInnerContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}
export default CallButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 6,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 24,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
