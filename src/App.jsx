import React from "react";
import Vid from "./video/Vid.mp4";

function App() {
  return (
    <div>
      <h1>My First React Project for Video</h1>
    <iframe
    height={350}
    width={907}
    src={Vid}
    allowFullScreen/>

    </div>
  );
}

export default App;
