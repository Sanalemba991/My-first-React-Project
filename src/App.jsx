import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    window.alert(`You clicked ${data} times`); // Show an alert whenever data changes
  }, [data]); // Run the effect only when `data` changes

  return (
    <div>
      <h1>Hello {data}</h1>
      <button onClick={() => setData(data + 1)}>Click me</button>
    </div>
  );
}

export default App;
