import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import AgeWeightSelectionBox from './AgeWeightSelectionBox';
import { setAgeValue, setWeightValue, } from '../redux/reducers/bmi'

function AgeWeightSelection() {

  const dispatch = useDispatch();
  const age = useSelector(state => state.bmi.age);
  const weight = useSelector(state => state.bmi.weight);
  const types = [{
      title: 'age', 
      num: age
    },{
      title: 'weight', 
      num: weight
  }]

  const handleChange = e => {
    const { name } = e.target;
    switch (name) {
      case "age-plus":
        return dispatch(setAgeValue('increment'))
      case "age-minus":
        return dispatch(setAgeValue('decrement'))
      case "weight-plus":
        return dispatch(setWeightValue('increment'))
      case "weight-minus":
        return dispatch(setWeightValue('decrement'))
      default:
        break;
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {types.map((type, i) => {
        return (
          <AgeWeightSelectionBox 
            key={i}
            type={type.title}
            num={type.num}
            handleChange={handleChange}
          />
        )
      })}
    </div>
  )
}

export default AgeWeightSelection
