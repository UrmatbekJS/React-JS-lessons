import React from "react";
import Data from "./components/Data";

const App = () => {
  let arr = ["Neymar", "Messi", "SIUU"];
  console.log("JSJSJS27");

  const getInfo = (data) => {
    return console.log(data);
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {arr.map((item, index) => {
        return (
          <>
            <Data key={index} />
            {item}
          </>
        );
      })}
    </div>
  );
};

export default App;
