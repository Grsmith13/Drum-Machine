import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import drum from "./Audio";
import "./Drumpad.css";
const Drumpad = () => {
  const [displayText, setDisplayText] = useState("");
  const audioRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null),
  };

  const soundOn = (key) => {
    const audioElement = audioRefs[key].current;
    if (audioElement) {
      audioElement.play();
      setDisplayText(drum[key.toLowerCase()].description);
    }
  };
  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (audioRefs[key]) {
      soundOn(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="drum-machine" tabIndex="0">
      <div className="drum-buttons">
        <Button id="Q" className="drum-pad" onClick={() => soundOn("Q")}>
          Q
          <audio
            ref={audioRefs.Q}
            id="Q"
            className="clip"
            src={drum.q.sound.src}
          ></audio>
        </Button>

        <Button id="W" className="drum-pad" onClick={() => soundOn("W")}>
          W
          <audio
            ref={audioRefs.W}
            id="W"
            className="clip"
            src={drum.w.sound.src}
          ></audio>
        </Button>

        <Button id="E" className="drum-pad" onClick={() => soundOn("E")}>
          E
          <audio
            ref={audioRefs.E}
            id="E"
            className="clip"
            src={drum.e.sound.src}
          ></audio>
        </Button>

        <Button id="A" className="drum-pad" onClick={() => soundOn("A")}>
          A
          <audio
            ref={audioRefs.A}
            id="A"
            className="clip"
            src={drum.a.sound.src}
          ></audio>
        </Button>

        <Button id="S" className="drum-pad" onClick={() => soundOn("S")}>
          S
          <audio
            ref={audioRefs.S}
            id="S"
            className="clip"
            src={drum.s.sound.src}
          ></audio>
        </Button>

        <Button id="D" className="drum-pad" onClick={() => soundOn("D")}>
          D
          <audio
            ref={audioRefs.D}
            id="D"
            className="clip"
            src={drum.d.sound.src}
          ></audio>
        </Button>

        <Button id="Z" className="drum-pad" onClick={() => soundOn("Z")}>
          Z
          <audio
            ref={audioRefs.Z}
            id="Z"
            className="clip"
            src={drum.z.sound.src}
          ></audio>
        </Button>

        <Button id="X" className="drum-pad" onClick={() => soundOn("X")}>
          X
          <audio
            ref={audioRefs.X}
            id="X"
            className="clip"
            src={drum.x.sound.src}
          ></audio>
        </Button>

        <Button id="C" className="drum-pad" onClick={() => soundOn("C")}>
          C
          <audio
            ref={audioRefs.C}
            id="C"
            className="clip"
            src={drum.c.sound.src}
          ></audio>
        </Button>
      </div>
      <div className="sound-display">
        <p id="display">{displayText}</p>
      </div>
    </section>
  );
};
export default Drumpad;
