import React from 'react';
import { GenderSelection, HeightInput, AgeWeightSelection, } from '../components';

export default function Form() {

  return (
    <div className="p-4">
      <GenderSelection />
      <HeightInput />
      <AgeWeightSelection />
    </div>
  )
}
