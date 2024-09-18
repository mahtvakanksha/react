import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);

  const [num,setNum]=useState(false);

  const [char,setChar]=useState(false);

  const [pswd,setPswd]=useState("");

  const pswdGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num)str+="0123456789";
    if(char)str+="!@#$%^&*_-+=~/?.>,<;:"
    for(let i=1;i<length;i++)
    {
      let char=Math.floor(Math.random()*length+1);
      pass=str.charAt
      (char);
    }
    setPswd(pass);
  },[length,num,char,setPswd])

  return (
    <>
    
     <div className="w-full rounded-xl p-3 m-3 bg-slate-500 ">
       <h1 className=" text-3xl text-center text-slate-800 m-2" >Password generator</h1>
        <div className=" flex rounded-lg overflow-hidden my-3" >
        <input type="text" value={pswd} 
        className='outline-none rounded-xl w-full p-2 m-3 bg-slate-400 placeholder-slate-800'
        placeholder='password' 
        readonly></input>
        <button className="text-white bg-blue-600 rounded-xl p-3 my-3">Copy</button> </div> 
      <div className='flex flex-wrap px-3'>
        <input type="range" 
        min={6} max={20}
        value={length}
        className="me-4 rounded-xl cursor-pointer "
        onChange={(e)=>{setLength(e.target.value)}}
        ></input>
        <label>{length}</label>
      <input type="checkbox"
       className='ms-3 me-2'
       onChange={()=>{
        setNum((prev)=>!prev);
       }}
       ></input>
      <label>nums</label>
      <input type="checkbox" 
      className='ms-3 me-2'
      onChange={()=>{
        setChar((prev)=>!prev);
       }}
      ></input>
      <label>chars</label>
      </div>
     </div>
    </>
  )
}

export default App
