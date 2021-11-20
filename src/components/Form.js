import { nanoid } from "@reduxjs/toolkit";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/todos/todosSlice";


const Form = () => {
    const dispatch = useDispatch();
    const[inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        id: nanoid(),
        text: inputValue,
        isCompleted: false,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder=" Enter your todo..." value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    </form>
  );
};

export default Form;
