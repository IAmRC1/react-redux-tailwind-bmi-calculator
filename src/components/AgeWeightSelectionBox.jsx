import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function AgeWeightSelectionBox({ type, num, handleChange }) {

  return (
    <div className="flex-1 p-2 rounded-md shadow-md bg-gray-600">
      <h6 className="mb-0 uppercase text-gray-100 text-sm text-center font-thin">{type}</h6>
      <h3 className="mb-0 text-white text-4xl text-center font-bold">{num}</h3>
      <div className="grid grid-cols-2 gap-2 my-2">
        {['plus', 'minus'].map((btn, ind) => <CBtn key={ind} type={type} val={btn} handleChange={handleChange} />)}
      </div>
    </div>
  )
}

function CBtn({ val, type, handleChange }){
  return (
    <button 
      name={`${type}-${val}`}
      className="w-10 h-10 rounded-full opacity-70 bg-gray-100 mx-auto focus:outline-none" 
      onClick={handleChange}
    >
      {val === "plus" 
        ? <AiOutlinePlus size="20" className="mx-auto pointer-events-none" /> 
        : <AiOutlineMinus size="20" className="mx-auto pointer-events-none" />
      }
    </button>
  )
}

export default AgeWeightSelectionBox


