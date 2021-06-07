import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gender: 'male',
  height: 160,
  age: 20,
  weight: 65,
  bmiValue: null,
  category: '',
  type: '',
};

const bmiReducer = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    setGenderValue: (state, action) => {
      state.gender = action.payload
    },
    setHeightValue: (state, action) => {
      state.height = action.payload
    },
    setAgeValue: (state, action) => {
      switch (action.payload) {
        case "increment": 
          state.age += 1;
          break;
        case "decrement": 
          state.age -= 1;
          break;
        default: break;
      }
    },
    setWeightValue: (state, action) => {
      switch (action.payload) {
        case "increment": 
          state.weight += 1;
          break;
        case "decrement": 
          state.weight -= 1;
          break;
        default: break;
      }
    },
    // calculate: (state, action) => {
    //   state.bmiValue = (action.payload.weight / (action.payload.height / 100) ** 2).toFixed(2);
    //   switch(true){
    //     case state.bmiValue >= 40:
    //       state.type = 'danger';
    //       state.status = 'Severly Obese';
    //       return;
    //     case state.bmiValue >= 35 && state.bmiValue < 40:
    //       state.type = 'danger';
    //       state.status = 'Heavily Obese';
    //       return;
    //     case state.bmiValue >= 30 && state.bmiValue < 35:
    //       state.type = 'danger';
    //       state.status = 'Obese';
    //       return;
    //     case state.bmiValue >= 25 && state.bmiValue < 30:
    //       state.type = 'warning';
    //       state.status = 'Overweight';
    //       return;
    //     case state.bmiValue >= 18.5 && state.bmiValue < 25:
    //       state.type = 'success';
    //       state.status = 'Perfectly Fine';
    //       return;
    //     case state.bmiValue < 18.5:
    //       state.type = 'warning';
    //       state.status = 'Underweight';
    //       return;
    //     default: 
    //       return 'Out of range';
    //   }
    // },
  },
});

export const { 
  setGenderValue, 
  setHeightValue, 
  setAgeValue, 
  setWeightValue, 
} = bmiReducer.actions;

export default bmiReducer.reducer;
