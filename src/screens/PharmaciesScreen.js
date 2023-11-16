import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectFilter} from '../store/filtersSlice';
import {PharmaciesList} from '../components/PharmaciesList';

function PharmaciesScreen({navigation}) {
  const {selectedCity, selectedDistrict} = useSelector(selectFilter);
  // const [pharmacies, setPharmacies] = useState([]);

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

  // const fetchPharmacies = useCallback(async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.nosyapi.com/apiv2/pharmacyLink?city=${selectedCity.toLowerCase()}&county=${selectedDistrict.toLowerCase()}&apikey=iZ9ViN6e1145QFPjd0DHSdvuvwoyEHYSLBnMEMWprkoXIZuP2Ypdk4z89KkT`,
  //     );
  //     setPharmacies(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Eczaneler alınırken bir hata oluştu:', error);
  //   }
  // }, [selectedCity, selectedDistrict]);
  // useEffect(() => {
  //   if (selectedCity && selectedDistrict) {
  //     fetchPharmacies();
  //   }
  // }, [selectedCity, selectedDistrict, fetchPharmacies]);

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

  // const renderItem = ({item}) => {
  //   console.log('Rendered Item:', item);
  //   return (
  //     <View style={styles.pharmacyItem}>
  //       <Text>Eczane Adı: {item.EczaneAdi}</Text>
  //       <Text>Adres: {item.Adresi}</Text>
  //       <Text>Telefon: {item.Telefon}</Text>
  //     </View>
  //   );
  // };

  return <PharmaciesList />;
}

export default PharmaciesScreen;

const styles = StyleSheet.create({
  container: {
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
  pharmacyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
