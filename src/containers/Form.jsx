import React from 'react';
import { GenderSelection, HeightInput, AgeWeightSelection, } from '../components';

export default function Form() {

  return (
    <div className="p-4">
      <GenderSelection />
      <HeightInput />
      <AgeWeightSelection />
      <div className="flex items-center justify-center mt-4">
        <button 
          className="font-header flex items-center justify-center w-full px-4 py-2 uppercase text-xl font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none" 
        >
          calculate your bmi
        </button>
      </div>
    </div>
  )
}
