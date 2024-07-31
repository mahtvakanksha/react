import { useState } from 'react';
import './App.css'

function App() {
let [counter,setCounter]=useState(10);
const inc=()=>{
counter+=1;
if(counter>24)
  alert("can't exceed above 24")
else setCounter(counter);
}
const dec=()=>{
  counter-=1;
  if(counter<0)
    alert("can't exceed below 0")
  else setCounter(counter);
}
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={inc}>Increase</button>
      <br></br>
      <button onClick={dec}>Decrease</button>
    </>
  )
}

export default App
