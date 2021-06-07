import { configureStore } from '@reduxjs/toolkit'
import bmiReducer from './reducers/bmi'

export default configureStore({
  reducer: {
    bmi: bmiReducer,
  }
})
