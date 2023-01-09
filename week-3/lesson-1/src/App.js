import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import DataEarn from "./components/DataEarn";
import TestContext from "./TestContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const postUser = async () => {
    await axios.post("http://localhost:8000/users", user);
  };

  // INIT_SATTE хранилище стейтов
  const INIT_STATE = {
    users: [],
    userDetail: {},
  };

  // функция reducer (которая будет помещать данные в INIT_STATE)
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "USERS":
        return { ...state, users: action.payload };
      case "USER_DETAIL":
        return { ...state, userDetail: action.payload };
      default:
        return state;
    }
  };

  const getUsers = async () => {
    const { data } = await axios("http://localhost:8000/users");
    dispatch({
      type: "USERS",
      payload: data,
    });
  };
  const getUserDetail = async () => {
    const { data } = await axios("http://localhost:8000/users/3");
    dispatch({
      type: "USER_DETAIL",
      payload: data,
    });
  };
  useEffect(() => {
    getUsers();
    getUserDetail();
  }, []);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // инициализируем useReduce()

  console.log(state);

  return (
    <>
      <TestContext>
        <DataEarn />
        <input
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          placeholder="last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <button onClick={postUser}>post</button>
      </TestContext>
    </>
  );
}

export default App;
