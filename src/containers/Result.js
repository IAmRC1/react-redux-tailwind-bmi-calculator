import React from 'react'
import { useSelector } from 'react-redux'

function Result() {

  const bmiValue = useSelector(state => state.bmi.bmiValue)
  const classification = useSelector(state => state.bmi.classification)
  const statement = () => {
    switch (classification) {
      case 'severly obese': return 'How are you even alive?'
      case 'heavily obese': return 'See a doctor. ASAP!'
      case 'obese': return 'It\'s time to step out of your home.'
      case 'overweight': return 'You need to shed some extra kilos.'
      case 'normal': return 'You have a normal body weight. Good Job!'
      case 'underweight': return 'It\'s time you start eating some proteins.'
      default:
        break;
    }
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl xl:text-6xl mb-4 font-bold text-white">Your Result</h1>
      <div className="rounded-md shadow-md bg-gray-600 p-8 font-bold">
        <h6 className="mb-3 uppercase text-sm text-green-400">{classification}</h6>
        <h6 className="mb-3 text-6xl text-white tracking-widest">{bmiValue}</h6>
        <p className="mb-0 text-white opacity-70">Normal BMI range:</p>
        <p className="mb-3 text-white">18.5 - 25 kg/m<sup>2</sup></p>
        <h6 className="mb-0 text-white">{statement()}</h6>
      </div>
    </div>
  )
}

export default Result
