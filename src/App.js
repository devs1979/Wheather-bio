import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/diwesh09/Wheather-bio.git">
          Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/diwesh09">
          Diwesh Tiwari
        </a>{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
