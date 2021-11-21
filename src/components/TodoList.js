import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteTodo, toggle } from "../redux/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} 
              className={`todo ${todo?.isCompleted ? "done" : ""}`}>
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch(toggle(todo.id))}
              />{" "}
              <span>{todo.text}</span>
              <MdDeleteForever
                className="delete-icon"
                size="1.6em"
                onClick={() => dispatch(deleteTodo(todo.id))}
                style={{ color: "red", cursor: "pointer" }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
