import React from "react";

function App() {
  return (
    <>
    <h1>My First React Project for Video</h1>
    <div className="my">
     
      <iframe
        className="bor"
        height={350}
        width={907}
        frameBorder={0}
        src="https://www.youtube.com/embed/pqZuSz8_2DM?list=RDCLAK5uy_ksEjgm3H_7zOJ_RHzRjN1wY-_FFcs7aAU&start=0"
        allowFullScreen
      />
      <img
        className="sam"
        src="https://images2.alphacoders.com/136/1369766.jpeg"
      />
      <h1 className="ram">Shanks</h1>
      <div>
      <button className="but">Click Me</button>
      </div>
     
    </div>
  
    </>
  );
}

export default App;
