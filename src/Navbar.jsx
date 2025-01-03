import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
