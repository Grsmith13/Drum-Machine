import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Drumpad from "./components/Drumpad";
import ControlPanel from "./components/ControlPanel";
const CenteredContainer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        id="drum-machine"
        className="container row border border-success my-5"
      >
        <div className="col">
          <Drumpad id="drum-pad" />
        </div>
        <div className="col">
          {/* <ControlPanel />  Control panel portion will be worked on when time is available. */}
        </div>
      </div>
    </div>
  );
};

export default CenteredContainer;
