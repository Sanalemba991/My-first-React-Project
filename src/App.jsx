import React, { useEffect, useState } from 'react'

function App() {
  const[sana,setSana]=useState('sana')
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setSana('State is updates')
    },2000)
  },[])
  return (
    <div>
      <h>{sana}</h>
    </div>
  )
}

export default App
