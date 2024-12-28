import React, { useState, useEffect } from 'react';

function SimpleExample() {
  const [message, setMessage] = useState('Hello, world!');

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setMessage('State updated after 2 seconds');
    }, 2000);

   
  }, []); 

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default SimpleExample;
