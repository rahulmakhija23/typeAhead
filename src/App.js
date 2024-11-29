import "./styles.css";
import cities from "../src/data.js";
import { useEffect, useState } from "react";
import Visual from "./Visual.js";
const initalInput = cities;
export default function App() {
  const [state, setStates] = useState(initalInput);
  const [currentInput, handleCurrentInput] = useState("");

  const GilteredText = function (newStates, currentInput) {
    console.log(newStates);
    newStates.map((item) => {
      const itemLength = item.toLowerCase().indexOf(currentInput.toLowerCase());
      console.log(item + ">>>>>>>>>" + itemLength);
      const subStringStates = item.substr(itemLength, currentInput.length);
      console.log(
        item.toLowerCase().substr(0, itemLength - 1) +
          subStringStates.toUpperCase() +
          item.toLowerCase().substr(subStringStates + 1, item.length)
      );
    });
  };
  const visualFetch = (currentInput) => {
    // console.log(currentInput);
    const newStates = state.filter((data) => {
      return data.toLowerCase().indexOf(currentInput.toLowerCase()) > -1;
    });
    GilteredText(newStates, currentInput);
    setStates([]);
    setStates(newStates);
  };
  useEffect(() => {
    if (currentInput == "") {
      setStates(initalInput);
    } else {
      visualFetch(currentInput);
    }
  }, [currentInput]);
  return (
    <>
      <input
        type="text"
        datatype="conty"
        value={currentInput}
        onChange={(e) => handleCurrentInput(e.target.value)}
      />
      <br />
      <br />
      <br />

      {/* next is diaplying result */}

      <ul>
        {state.map((usOn, index) => {
          return <li key={index}>{usOn}</li>;
        })}
      </ul>
    </>
  );
}
