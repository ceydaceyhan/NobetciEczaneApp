import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
