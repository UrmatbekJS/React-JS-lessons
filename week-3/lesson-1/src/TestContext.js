import React, { createContext, useContext } from "react";

const testContext = createContext();
export const useTest = () => {
  return useContext(testContext);
};
const TestContext = ({ children }) => {
  const arrName = ["Said", "Mustafa", "Kanai", "Samat"];

  const values = {
    arrName,
  };

  return (
    <div>
      <testContext.Provider value={values}>{children}</testContext.Provider>
    </div>
  );
};

export default TestContext;
