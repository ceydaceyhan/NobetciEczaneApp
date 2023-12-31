import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import ilData from '../assets/il.json';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilter, setCity, setDistrict} from '../store/filtersSlice';
import WavyHeader from '../components/ui/WavyHeader';
import Title from '../components/ui/Title';

function FilterScreen() {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);
  const {selectedCity, selectedDistrict} = filterState || {};

  useEffect(() => {
    setCities(ilData.data.map(city => city.text));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const selectedCityData = ilData.data.find(
        city => city.text === selectedCity,
      );
      setDistricts(selectedCityData.districts.map(district => district.text));
    } else {
      setDistricts([]);
    }
  }, [selectedCity]);

  const nextHandler = () => {
    if (!selectedCity || !selectedDistrict) {
      Alert.alert(
        "You haven't selected a city!",
        'Try again by selecting the city and district.',
      );
    } else {
      navigation.navigate('Pharmacies');
    }
  };
  const onCityChange = itemValue => {
    dispatch(setCity(itemValue));
  };
  const onDistrictChange = itemValue => {
    dispatch(setDistrict(itemValue));
  };

  useEffect(() => {
    const unpicked = navigation.addListener('focus', () => {
      dispatch(setCity(''));
      dispatch(setDistrict(''));
    });
    return unpicked;
  }, [navigation, dispatch]);

  return (
    <>
      <WavyHeader customStyles={styles.svgCurve} />
      <Title>Select a City</Title>
      <View style={styles.rootContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCity}
            style={styles.picker}
            onValueChange={onCityChange}>
            <Picker.Item
              style={styles.pickerItemText}
              label="Select a city"
              value=""
            />
            {cities.map(city => (
              <Picker.Item key={city} label={city} value={city} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedDistrict}
            style={styles.picker}
            onValueChange={onDistrictChange}>
            <Picker.Item
              style={styles.pickerItemText}
              label="Select a district"
              value=""
            />
            {districts.map(district => (
              <Picker.Item key={district} label={district} value={district} />
            ))}
          </Picker>
        </View>
        <PrimaryButton onPress={nextHandler}>NEXT</PrimaryButton>
      </View>
    </>
  );
}
export default FilterScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 280,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderBottomWidth: 3,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  pickerItemText: {
    fontWeight: 'bold',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});
