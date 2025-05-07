import React from 'react'
import { useState } from 'react'

const Display = ({calval}) => {
  const [output, setoutput] = useState("")
  return (
    <div className='mb-8'>
      <input className='px-4 py-2 rounded-xl text-2xl  bg-green-950 border-[1px] border-blue-200 text-green-400 font-semibold ' type="text"  value={calval}   readOnly/>
    </div>
  )
}

export default Display
