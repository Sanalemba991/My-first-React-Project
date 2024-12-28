import React, { useState, useEffect } from 'react';

function ButtonExample() {
  const [message, setMessage] = useState('Hello, click the button!');

  // useEffect that runs only once when the component first loads
  useEffect(() => {
    setMessage('Component has loaded!'); // Change the message once
  }, []);  // [] means "do this only once when the component mounts"

  // Function to handle button click
  const handleClick = () => {
    setMessage('You clicked the button!'); // Change the message when button is clicked
  };

  return (
    <div>
      <h1>{message}</h1> {/* Display the message */}
      <button onClick={handleClick}>Click me!</button> {/* Button to change the message */}
    </div>
  );
}

export default ButtonExample;
