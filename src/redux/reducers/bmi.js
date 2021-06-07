import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gender: 'male',
  height: 160,
  age: 20,
  weight: 65,
  bmiValue: 0,
  classification: "",
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
    calculateBMI: (state, action) => {
      state.bmiValue = (state.weight / (+state.height / 100) ** 2).toFixed(2);
      switch(true){
        case state.bmiValue >= 40:
          state.classification = 'severly obese';
          return;
        case state.bmiValue >= 35 && state.bmiValue < 40:
          state.classification = 'heavily obese';
          return;
        case state.bmiValue >= 30 && state.bmiValue < 35:
          state.classification = 'obese';
          return;
        case state.bmiValue >= 25 && state.bmiValue < 30:
          state.classification = 'overweight';
          return;
        case state.bmiValue >= 18.5 && state.bmiValue < 25:
          state.classification = 'normal';
          return;
        case state.bmiValue < 18.5:
          state.classification = 'underweight';
          return;
        default: 
          return 'Out of range';
      }
    },
    resetState: (state) => {
      return initialState;
    }
  },
});

export const { 
  setGenderValue, 
  setHeightValue, 
  setAgeValue, 
  setWeightValue, 
  calculateBMI, 
  resetState, 
} = bmiReducer.actions;

export default bmiReducer.reducer;
