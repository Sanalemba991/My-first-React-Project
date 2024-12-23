import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <div className="op">
        <Link className="sam" to="/sana">
          Go to Sanalemba
        </Link>
        <Link className="sam" to="/prenita">
          Got to Prenita
        </Link>
        <Link className="sam" to="/react">
          Go to React
        </Link>
      </div>
      <h1>Home Page for My Project</h1>
      <p>
        haka-based International Crimes Tribunal (ICT) has issued arrest
        warrants for Hasina and several former Cabinet ministers, advisers, and
        military and civil officials for "crimes against humanity and genocide".
      </p>
    </div>
  );
}

export default Home;
