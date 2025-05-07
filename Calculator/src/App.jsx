import React, { useState } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';

const App = () => {
  const [calval, setcalval] = useState("");

  return (
    <div className='bg-gradient-to-br from-gray-800 via-zinc-900 to-black text-blue-100 min-h-screen w-full flex items-center  flex-col '>
      <h1 className="text-3xl font-semibold  text-blue-200 mb-6 text-center pt-6 ">
        Calculate Now...!
      </h1>

      <div className='bg-zinc-950 px-6 py-6 rounded-2xl shadow-2xl  border-2 border-zinc-700 '>
        <Display calval={calval} />
        <Buttons calval={calval} setcalval={setcalval} />
      </div>
    </div>
  );
};

export default App;
