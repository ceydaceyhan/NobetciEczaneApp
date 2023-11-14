import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectFilter} from '../store/filtersSlice';

function PharmaciesScreen({navigation}) {
  const {selectedCity, selectedDistrict} = useSelector(selectFilter);

  const formatText = text => {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formattedCity = useMemo(() => formatText(selectedCity), [selectedCity]);
  const formattedDistrict = useMemo(
    () => formatText(selectedDistrict),
    [selectedDistrict],
  );

  const headerTitleComponent = useMemo(
    () => (
      <View>
        <Text style={styles.headerTitle}>Nöbetçi Eczaneler</Text>
        <Text style={styles.headerSubtitle}>
          {formattedCity}/{formattedDistrict}
        </Text>
      </View>
    ),
    [formattedCity, formattedDistrict],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImageSource: require('../assets/custom.png'),
      headerTitle: () => headerTitleComponent,
      headerTitleAlign: 'center',
    });
  }, [navigation, headerTitleComponent]);

  return (
    <View style={styles.container}>
      <Text>Selected City: {selectedCity}</Text>
      <Text>Selected District: {selectedDistrict}</Text>
    </View>
  );
}

export default PharmaciesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: 10,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },
});
