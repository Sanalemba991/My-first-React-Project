import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  return (
    <div>
      <h1>Hello {data}</h1>
      <button onClick={() => setData(data + 1)}>Click me</button>
    </div>
  );
}

export default App;
