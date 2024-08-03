import { useState } from "react"

function App() {
  const [color, setColor] = useState("#99582a")

  return (
    <>
  <div className="h-screen w-screen" style={{backgroundColor:color}}>
    <div className="fixed bottom-12
bg-slate-300 m-1   p-3">
      <div className="bg-slate-100 flex flex-wrap flex-col gap-6 justify-center">
        <button
        onClick={()=>setColor("red")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"red"}}>Red</button>
        <button
        onClick={()=>setColor("green")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"green"}}>green
        </button>   
        <button
        onClick={()=>setColor("yellow")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"yellow"}}>yellow</button>   
        <button
        onClick={()=>setColor("pink")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"pink"}}>pink</button>   
        <button
        onClick={()=>setColor("orange")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"orange"}}>orange</button>   
        <button
        onClick={()=>setColor("white")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:"white"}}>white</button>   
        <button
        onClick={()=>setColor("black")} className="border-double p-2 bg-slate-400 text-black " 
        style={{backgroundColor:""}}>black</button>
        
           </div>
    </div>
  </div>
    </>
  )
}

export default App
