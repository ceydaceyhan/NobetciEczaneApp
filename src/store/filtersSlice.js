import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedCity: '',
  selectedDistrict: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.selectedCity = action.payload;
      state.selectedDistrict = '';
    },
    setDistrict: (state, action) => {
      state.selectedDistrict = action.payload;
    },
  },
});

export const {setCity, setDistrict} = filterSlice.actions;
export const selectFilter = state => state.filter;

export default filterSlice.reducer;
