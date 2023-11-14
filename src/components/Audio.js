import audio1 from "../assets/Cev_H2.mp3";
import audio2 from "../assets/Dsc_Oh.mp3";
import audio3 from "../assets/Heater-1.mp3";
import audio4 from "../assets/Heater-2.mp3";
import audio5 from "../assets/Heater-3.mp3";
import audio6 from "../assets/Heater-4_1.mp3";
import audio7 from "../assets/Heater-6.mp3";
import audio8 from "../assets/Kick_n_Hat.mp3";
import audio9 from "../assets/RP4_KICK_1.mp3";

const drum = {
  q: { sound: new Audio(audio1), description: "Cev_H2" },
  w: { sound: new Audio(audio2), description: "Dsc_Oh" },
  e: { sound: new Audio(audio3), description: "Heater-1" },
  a: { sound: new Audio(audio4), description: "Heater-2" },
  s: { sound: new Audio(audio5), description: "Heater-3" },
  d: { sound: new Audio(audio6), description: "Heater-4_1" },
  z: { sound: new Audio(audio7), description: "Heater-6" },
  x: { sound: new Audio(audio8), description: "Kick and Hat" },
  c: { sound: new Audio(audio9), description: "RP4 KICK" },
};
// const chooseAudio = () => {
//     if
// }
export default drum;
