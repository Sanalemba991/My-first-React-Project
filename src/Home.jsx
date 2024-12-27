import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <h1>Home Page for My Project</h1>
        <p>
          haka-based International Crimes Tribunal (ICT) has issued arrest
          warrants for Hasina and several former Cabinet ministers, advisers,
          and military and civil officials for "crimes against humanity and
          genocide".
        </p>
      </div>
    </>
  );
}

export default Home;
