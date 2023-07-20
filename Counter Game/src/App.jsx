import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count+1)
    console.log('Increment on Click', count)
  }

  function decrementCount() {
    setCount(count-1)
    console.log('Decrement on Click', count)
  }


  return (
    <>
      <div className='container'> VALUE OF COUNT 
        <div>{count}</div>
      </div>
      <button onClick={incrementCount}>Inc</button>
      <button onClick={decrementCount}>Dec</button>
    </>
  )
}

export default App
