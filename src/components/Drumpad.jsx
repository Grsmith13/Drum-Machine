import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import drum from "./Audio";
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
      <div className="container">
        <div className="col-md-5">
          <Row>
            <Col className="booger">
              <Button id="Q" className="drum-pad" onClick={() => soundOn("Q")}>
                Q
                <audio
                  ref={audioRefs.Q}
                  id="Q"
                  className="clip"
                  src={drum.q.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="W" className="drum-pad" onClick={() => soundOn("W")}>
                W
                <audio
                  ref={audioRefs.W}
                  id="W"
                  className="clip"
                  src={drum.w.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="E" className="drum-pad" onClick={() => soundOn("E")}>
                E
                <audio
                  ref={audioRefs.E}
                  id="E"
                  className="clip"
                  src={drum.e.sound.src}
                ></audio>
              </Button>
            </Col>
          </Row>
        </div>

        <div className="col-md-5">
          <Row>
            <Col>
              <Button id="A" className="drum-pad" onClick={() => soundOn("A")}>
                A
                <audio
                  ref={audioRefs.A}
                  id="A"
                  className="clip"
                  src={drum.a.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="S" className="drum-pad" onClick={() => soundOn("S")}>
                S
                <audio
                  ref={audioRefs.S}
                  id="S"
                  className="clip"
                  src={drum.s.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="D" className="drum-pad" onClick={() => soundOn("D")}>
                D
                <audio
                  ref={audioRefs.D}
                  id="D"
                  className="clip"
                  src={drum.d.sound.src}
                ></audio>
              </Button>
            </Col>
          </Row>
        </div>

        <div className="col-md-5">
          <Row>
            <Col>
              <Button id="Z" className="drum-pad" onClick={() => soundOn("Z")}>
                Z
                <audio
                  ref={audioRefs.Z}
                  id="Z"
                  className="clip"
                  src={drum.z.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="X" className="drum-pad" onClick={() => soundOn("X")}>
                X
                <audio
                  ref={audioRefs.X}
                  id="X"
                  className="clip"
                  src={drum.x.sound.src}
                ></audio>
              </Button>
            </Col>
            <Col>
              <Button id="C" className="drum-pad" onClick={() => soundOn("C")}>
                C
                <audio
                  ref={audioRefs.C}
                  id="C"
                  className="clip"
                  src={drum.c.sound.src}
                ></audio>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div id="display">{displayText}</div>
    </section>
  );
};
export default Drumpad;

//   return (
//     <section id="drum-machine" tabIndex="0">
//       <div className="container">
//         <div className="col-md-5">
//           <Row>
//             <Col className="drum-pad" id="Q">
//               <Button onClick={() => soundOn("q")}>Q</Button>
//               <audio id="Q" className="clip" src={drum.q.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="W">
//               <Button onClick={() => soundOn("w")}>W</Button>
//               <audio id="W" className="clip" src={drum.w.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="E">
//               <Button onClick={() => soundOn("e")}>E</Button>
//               <audio id="E" className="clip" src={drum.e.src}></audio>
//             </Col>
//           </Row>
//         </div>
//         <div className="col-md-5">
//           <Row>
//             <Col className="drum-pad" id="A">
//               <Button onClick={() => soundOn("a")}>A</Button>
//               <audio id="A" className="clip" src={drum.a.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="S">
//               <Button onClick={() => soundOn("s")}>S</Button>
//               <audio id="S" className="clip" src={drum.s.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="D">
//               <Button onClick={() => soundOn("d")}>D</Button>
//               <audio id="D" className="clip" src={drum.d.src}></audio>
//             </Col>
//           </Row>
//         </div>
//         <div className="col-md-5">
//           <Row>
//             <Col className="drum-pad" id="Z">
//               <Button onClick={() => soundOn("z")}>Z</Button>
//               <audio id="Z" className="clip" src={drum.q.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="X">
//               <Button onClick={() => soundOn("x")}>X</Button>
//               <audio id="X" className="clip" src={drum.x.src}></audio>
//             </Col>
//             <Col className="drum-pad" id="C">
//               <Button onClick={() => soundOn("c")}>C</Button>
//               <audio id="C" className="clip" src={drum.c.src}></audio>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </section>
//   );

//   // Attach and detach event listeners on mount/unmount
//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("keyup", handleKeyUp);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []); // Empty dependency array ensures that this effect runs only once on mount
