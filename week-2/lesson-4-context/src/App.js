import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Counter from "./components/Counter/Counter";
import EditForm from "./components/EditForm/EditForm";
import UsersList from "./components/UsersList/UsersList";
import CounterContext from "./context/CounterContext";
import UsersContextProvider from "./context/usersContext";

const App = () => {
  return (
    <UsersContextProvider>
      <CounterContext>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add-user" element={<AddForm />} />
            <Route
              path="/users"
              element={
                <>
                  <AddForm />
                  <UsersList />
                </>
              }
            />
            <Route path="/edit/:id" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </CounterContext>
    </UsersContextProvider>
  );
};

export default App;
