import React from "react";
import { useState } from "react";
import "./App.css";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import { evaluate } from "mathjs";
const App = () => {
  const [input, setInput] = useState("");
  // function to calculate a result on a specifi button click and update the state
  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    }
  };
  return (
    <div>
      <h1>My Calculator</h1>
      <Operators />
      <Numbers />
    </div>
  );
};

export default App;
