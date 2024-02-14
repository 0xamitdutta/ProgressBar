import "./App.css"
import { useState, useEffect } from 'react'
import ProgressBar from './components/ProgressBar'

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevValue => prevValue + 1)
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [value])
  

  return (
    <div className="container">
      <h1 style={{color: 'white'}}>Progress Bar</h1>
      <ProgressBar value={value} />
    </div>
  )
}

export default App
