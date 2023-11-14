import React from "react";
import { Button } from "react-bootstrap";

const ControlPanel = () => {
  return (
    <div>
      <h2>
        <Button>Power</Button>
      </h2>
      {/* <h2 id="display">filler</h2> removing this for the time being till I come back to it.  */}
      <input type="range"></input>
      <h2>
        <Button>bank</Button>
      </h2>
    </div>
  );
};

export default ControlPanel;
