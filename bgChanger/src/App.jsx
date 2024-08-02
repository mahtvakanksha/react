import { useState } from "react"

function App() {
  const [color, setColor] = useState("slate")

  return (
    <>
  <div className="h-screen w-screen" style={{backgroundColor:color}}>
    <div className="fixed bottom-12 border-r-2
    p-3">
      <div className="bg-slate-100 flex flex-wrap flex-col gap-6 justify-center">
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>

        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
        <button className="border-double p-2 bg-slate-400 text-black">{color}</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
