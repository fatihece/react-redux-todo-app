import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteTodo, toggle } from "../redux/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={todo.isCompleted ? "active" : ""}>
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch(toggle(todo.id))}
              />{" "}
              <span>{todo.text}</span>
              <MdDeleteForever
                className="delete-icon"
                size="1.3em"
                onClick={() => dispatch(deleteTodo(todo.id))}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
