import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.tasks);
    console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
