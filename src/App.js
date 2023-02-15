import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  const [color , setColor] = useState("black")

  useEffect(() => {
    (count >= 0 && count <= 4 && setColor("green"));
    (count >= 5 && count <= 9 && setColor("blue"));
    (count === 10 && setColor("red"));
  }, [count])

  const handleInc = ()=>{
    (count < 10 && setCount(count+1)); 

  }

  const handleDec = () =>{
    (count > 0 && setCount(count-1));

  }
  return (
    <div className='App'>
      <h1>Counter Application</h1>
      <h1 style={{
        color: color,
        fontSize:"60px"
      }}>{count}</h1>
      <button className="btn" onClick={()=>{handleInc()}}>Increment</button>
      <button className="btn" onClick={()=>{handleDec()}}>Decrement</button>
    </div>
  )
}