import React, { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const num1 = 5;
    const num2 = 3;
    const sum = num1 + num2;
    setResult(sum);
  }, [4]);

  return (
    <div>
      <h1>Result: {result}</h1>
    </div>
  );
}

export default App;
