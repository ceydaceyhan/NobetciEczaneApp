import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectFilter} from '../store/filtersSlice';
import {PharmaciesList} from '../components/PharmaciesList';

function PharmaciesScreen({navigation}) {
  const {selectedCity, selectedDistrict} = useSelector(selectFilter);
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    // Simulate an asynchronous operation, like fetching data
    const fetchData = async () => {
      try {
        // Your asynchronous code here

        // Simulate a delay of 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when the operation is done
      }
    };

    fetchData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImageSource: require('../assets/custom.png'),
      headerTitle: () => headerTitleComponent,
      headerTitleAlign: 'center',
    });
  }, [navigation, headerTitleComponent]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#FF0000"
          style={styles.indicator}
        />
      ) : (
        <PharmaciesList />
      )}
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },
  pharmacyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
