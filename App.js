import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import FilterScreen from './src/screens/FilterScreen';
import {StatusBar} from 'react-native';
import PharmaciesScreen from './src/screens/PharmaciesScreen';
import {Provider} from 'react-redux';
import store from './src/store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#DC143C" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FilterScreen"
              component={FilterScreen}
              options={{
                headerShown: false,
                statusBarStyle: 'light',
              }}
            />
            <Stack.Screen
              name="Pharmacies"
              component={PharmaciesScreen}
              options={{
                title: 'Nöbetçi Eczaneler',
                headerTitleAlign: 'center',
                statusBarColor: 'white',
                statusBarStyle: 'dark',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
