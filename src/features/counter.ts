import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    click: 0,
    custom: 0,
  },
  reducers: {
    countClick: state => {
      state.click++;
    },
    countCustom: (state, action: PayloadAction<number>) => {
      state.custom += action.payload;
    },
  },
});
