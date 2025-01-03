import React, { useState } from "react";

function App() {
  const [sana, setSana] = useState("");
  const [result, setResult] = useState("");

  const change = (e) => {
    setSana(e.target.value);
  };

  const Fangba = () => {
    setResult(sana);
  };

  return (
    <div>
      <input type="text" onChange={change} value={sana} />
      <button onClick={Fangba}>Update Result</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
