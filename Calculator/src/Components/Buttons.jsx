import React, { useState } from 'react'

const Buttons = ({ calval, setcalval }) => {
  const [calButton, setcalButton] = useState([
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'Clear'
  ]);



  function clickHandler(btn) {
    if (btn === "Clear") { setcalval("") }
    else if (btn === "=") {
      setcalval(eval(calval))
    }
    else {
      setcalval(calval + btn)
    }


  }


  return (
    <div className='grid grid-cols-4 px-6 py-4  gap-4'>
      {calButton.map((btn, idx) => {
        return <button key={idx} className='border-[1px] border-blue-400 p-2 rounded  font-semibold
         shadow-[1px_1px_1px_rgba(241,213,221,0.5)] text-md  [&:nth-child(17)]:bg-red-600    ' onClick={() => clickHandler(btn)}>{btn}</button>
      })}
    </div>
  )
}

export default Buttons