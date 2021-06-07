import React, { useState, } from 'react'
import GenderSelectionBox from './GenderSelectionBox';
import { useDispatch, useSelector } from 'react-redux';
import { setGenderValue } from '../redux/reducers/bmi'

const genders = ['male', 'female']

function GenderSelection() {
  const dispatch = useDispatch();
  const genderValue = useSelector(state => state.bmi.gender);
  
  const [gender, setGender] = useState(genderValue)
  const handleGenderChange = e => {
    setGender(e.target.value)
    dispatch(setGenderValue(e.target.value))
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {genders.map((g, i) => {
        return (
          <GenderSelectionBox 
            key={i}
            title={g}
            gender={gender}
            handleGenderChange={handleGenderChange}
          />
        )
      })}
    </div>
  )
}

export default GenderSelection
