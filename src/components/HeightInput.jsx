import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setHeightValue } from '../redux/reducers/bmi';

function HeightInput() {
  const dispatch = useDispatch();
  const heightValue = useSelector(state => state.bmi.height);

  const [height, setHeight] = useState(heightValue)
  const handleRange = e => {
    setHeight(e.target.value)
    dispatch(setHeightValue(e.target.value))
  }

  return (
    <div className="my-4 p-2 rounded-md shadow-md bg-gray-600">
      <h6 className="mb-0 uppercase text-white text-sm text-center font-thin opacity-70">height</h6>
      <div className="text-center text-white">
        <span className="text-4xl font-bold">{height}</span>
        <span className="text-lg text-gray-50 opacity-70 pl-1">cm</span>
      </div>
      <div className="mt-2 mx-4">
        <input 
          type="range" 
          className="slider w-full h-1 outline-none bg-gray-300 appearance-none opacity-70 transition-opacity transition-duration-300 hover:transition-opacity-1" 
          min="120" 
          max="220" 
          value={height} 
          onChange={handleRange}
        />
      </div>

      
    </div>
  )
}

export default HeightInput
