import { useState } from 'react'

function App() {
  const [color, setColour] = useState("#F5EEE6");

  return (
    <div className='w-full h-screen' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl' style={{backgroundColor : "#E6A4B4"}}>
          
          <button onClick={() => setColour("#EEE2DE")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor : "#EEE2DE"}}>
            #EEE2DE
          </button>

          <button onClick={() => setColour("#EA906C")}
          className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor : "#EA906C"}}>
            #EA906C
          </button>

          <button onClick={() => setColour("#B31312")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor : "#B31312"}}>
            #B31312
          </button>

          <button onClick={() => setColour("#2B2A4C")}
          className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor : "#2B2A4C"}}>
            #2B2A4C
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
