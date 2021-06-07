import React from 'react'
import { useDispatch } from 'react-redux';
import { calculateBMI, resetState, } from '../redux/reducers/bmi';

function SubmitButton({
  isResultOpen,
  setIsResultOpen
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center mt-4 mx-4 sm:w-2/3 md:w-1/2 sm:m-auto sm:px-4">
      <button 
        className="font-header flex items-center justify-center w-full px-4 py-2 uppercase text-xl font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none" 
        onClick={() => {
          isResultOpen 
          ? dispatch(resetState()) 
          : dispatch(calculateBMI())
            setIsResultOpen(!isResultOpen)
        }}
      >
        {isResultOpen ? "re-calculate your bmi" : "calculate your bmi"}
      </button>
    </div>
  )
}

export default SubmitButton
