import {useEffect, useState} from 'react';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectFilter} from '../store/filtersSlice';
import {FlatList, StyleSheet, View} from 'react-native';
import {Pharmacy} from './Pharmacy';

export const PharmaciesList = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const {selectedCity, selectedDistrict} = useSelector(selectFilter);

  useEffect(() => {
    (async () => {
      fetch(
        `https://www.nosyapi.com/apiv2/pharmacyLink?city=${selectedCity.toLowerCase()}&county=${selectedDistrict.toLowerCase()}&apikey=iZ9ViN6e1145QFPjd0DHSdvuvwoyEHYSLBnMEMWprkoXIZuP2Ypdk4z89KkT`,
      )
        .then(resp => resp.json())
        .then(json => setPharmacies(json.data));
    })();
  }, [selectedCity, selectedDistrict]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pharmacies}
        keyExtractor={item => item.EczaneAdi}
        renderItem={({item}) => <Pharmacy data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
});
