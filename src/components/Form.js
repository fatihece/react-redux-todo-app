import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/todos/todosSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !=="") {
      dispatch(
        addToDo({
          id: nanoid(),
          text: inputValue,
          isCompleted: false,
        })
      );
    } else {
      alert("Please enter a todo !!!")
    }
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div className="form-control">
        <input
          type="text"
          placeholder=" Enter your todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
