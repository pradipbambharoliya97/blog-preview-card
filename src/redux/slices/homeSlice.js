import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

// ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: 'home',
//   initialState,
//   reducers: {
//     setValue: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setValue } = counterSlice.actions;
// export default counterSlice.reducer;
