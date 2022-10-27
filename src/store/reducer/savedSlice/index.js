import { createSlice } from '@reduxjs/toolkit';

let data = localStorage.getItem('saved')
  ? JSON.parse(localStorage.getItem('saved'))
  : [];

const initialState = {
  value: data,
};
export const savedSlice = createSlice({
  name: 'saveItem',
  initialState,
  reducers: {
    addSaved: (state, action) => {
      state.value = [...state.value, action.payload];
      data = state.value;
      localStorage.setItem('saved', JSON.stringify(data));
    },
    deleteSaved: (state, action) => {
      const temp = state.value.filter((val) => val.title !== action.payload);
      state.value = temp;
      data = state.value;
      localStorage.setItem('saved', JSON.stringify(data));
    },
  },
});

export const { addSaved, deleteSaved } = savedSlice.actions;

export default savedSlice.reducer;
