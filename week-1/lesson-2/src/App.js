import React, { useState } from "react";
import NavbarCustom from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const students = ["Nurdan", "Timur", "Akim"];
  const group = "JS27";
  const [counter, setCounter] = useState(1);
  console.log(counter);
  // const [state, setState] = useState("START")
  // console.log(state)
  return (
    <div>
      <NavbarCustom students={students} group={group} />
      <button onClick={handlePlus}>+</button>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {/* <button onClick={()=>setState("CHANGED")}>Change State</button> */}
    </div>
  );
};

export default App;
