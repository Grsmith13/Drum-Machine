import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Drumpad from "./components/Drumpad";

const CenteredContainer = () => {
  return (
    <div className="container">
      <Drumpad id="drum-pad" />
    </div>
  );
};

export default CenteredContainer;
