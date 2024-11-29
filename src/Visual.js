import "./styles.css";
import React from "react";
import cities from "../src/data.js";
import { useEffect, useState } from "react";
const initalInput = cities;
export default function Visual({ states }) {
  console.log(states);
  return (
    <>
      <ul>
        {states.map((usOn) => {
          return <li key={Date.now() + 1}>{usOn}</li>;
        })}
      </ul>
    </>
  );
}
React.memo(Visual);
