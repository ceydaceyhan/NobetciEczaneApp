import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function WavyHeader({customStyles}) {
  return (
    <View style={customStyles}>
      <View style={styles.wavy}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.svg}>
          <Path
            fill="#DC143C"
            d="M0,288L60,288C120,288,240,288,360,250.7C480,213,600,139,720,144C840,149,960,235,1080,261.3C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
export default WavyHeader;

const styles = StyleSheet.create({
  wavy: {
    backgroundColor: '#DC143C',
    height: 160,
  },
  svg: {
    position: 'absolute',
    top: 130,
  },
});
