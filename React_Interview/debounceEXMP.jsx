import React, { useState } from 'react'

export default function App() {

  const[count,setC]= useState(0);
  const betterFunc=(func,delay)=>{
    let timer;
    return ()=>{
      if(timer)
      clearTimeout(timer);
      timer=setTimeout(()=>{
        func(c=>c+1)
      },delay)
    }
  }
  return (
    <div className="App">
      <span>
        Count: {count}
      </span>
      <hr/>
     <button onClick={betterFunc(setC,1000)}>
      Click Me
     </button>
    </div>
  );
}