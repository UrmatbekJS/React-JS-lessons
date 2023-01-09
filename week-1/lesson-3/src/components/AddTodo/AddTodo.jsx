import React, { useState } from "react";

const AddTodo = (props) => {
  //   console.log(props);
  const [task, setTask] = useState("");
  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    console.log(newTask);
    props.handleTask(newTask);
  };
  return (
    <div>
      <input value={task} type="text" onChange={handleInput} />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};

export default AddTodo;
