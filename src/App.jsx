import React from "react";
import Vid from "./video/Vid.mp4"
function App() {
  return (
    <>
    <h1>My First React Project for Video</h1>
    <div className="my">
     
  <video controls>
              
              <source src={Vid}></source></video>
      <img
        className="sam"
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/is-shanks-evil-in-one-piece.jpg?q=50&fit=crop&w=1140&h=&dpr=1." alt="Shanks"
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
