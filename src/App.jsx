import React, { useState } from 'react'

function App() {
  const [ram,setRam]=useState("");

  const handle=(event)=>{
    setRam(event.target.value);
  }
  return (
    <div>
      <input
      type='text'
      value={ram}
      onChange={handle}
      placeholder='Enter a man'/>
      <p>Your Name is {ram}</p>
    
    </div>
  )
}

export default App
