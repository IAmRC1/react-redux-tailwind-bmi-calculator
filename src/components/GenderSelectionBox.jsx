import React from 'react'
import { IoMdFemale, IoMdMale } from 'react-icons/io';

function GenderSelectionBox({ title, gender, handleGenderChange }) {

  return (
    <label className="flex-1 p-4 rounded-md shadow-md bg-gray-600 relative">
      <input 
        type="radio" 
        name="gender" 
        className="absolute hidden" 
        value={title} 
        onChange={handleGenderChange} 
      />
      {title === "male" 
        ? <IoMdMale className={`mx-auto text-white text-6xl ${title === gender ? "opacity-100" : "opacity-50"}`} />
        : <IoMdFemale className={`mx-auto text-white text-6xl ${title === gender ? "opacity-100" : "opacity-50"}`} />
      }
      <h6 className={`mt-2 mb-0 uppercase text-white text-sm text-center font-thin ${title === gender ? "opacity-100" : "opacity-50"}`}>{title}</h6>
    </label>
  )
}

export default GenderSelectionBox
