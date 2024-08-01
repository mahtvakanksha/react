import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj={
  //   username:"abcd",
  //   age:23
  // }
  return (
    <>
        <h1 class="text-green-500 mb-4">HELLO WORLD</h1>
       <Card username="oqrs" btnText="click"/>
       <Card username="abcd"/>
    </>
  )
}

export default App
