import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteTodo, toggle } from "../redux/todos/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   localStorage.setItem("my-todos",JSON.stringify( todos))
  // }, [todos])
 
  return (
    <div>
      {!todos.length && <h3 style={{ textAlign: "center", color: "#fff" }}>There is no todo to show!!!</h3>}
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} 
              className={`todo ${todo?.isCompleted ? "done" : ""}`}>
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch(toggle(todo.id))}
                style={{cursor:"pointer", width:"1rem", height:"1rem"}}
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
