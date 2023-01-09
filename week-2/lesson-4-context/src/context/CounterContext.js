import React, { createContext, useState } from "react";

export const counterContext = createContext();
// переменная которая хранит в себе контекст

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  // компонент хранится все функции и переменные Примает дочерные элементы вдохными данными
  return (
    <counterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </counterContext.Provider>
  ); // возращает через метод Provider  все дочерные элементы и им передаем все функции и переменные
};

export default CounterContextProvider;
