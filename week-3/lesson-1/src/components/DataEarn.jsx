import React from "react";
import { useTest } from "../TestContext";

const DataEarn = () => {
  const { arrName } = useTest();
  console.log(arrName);
  return <div></div>;
};

export default DataEarn;
