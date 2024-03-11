import { useState } from "react";
import { v4 } from "uuid";

import TodoItem from "../TodoItem";

import "./index.css";

const TodoApp = () => {
  const [todosList, setTodosList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeTodoId, setActiveTodoId] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddTodo = () => {
    if (activeTodoId !== "") {
      setTodosList((prev) =>
        prev.map((todo) => {
          if (todo.id === activeTodoId) {
            return {
              ...todo,
              title: inputValue,
              updatedCount: todo.updatedCount + 1,
            };
          }
          return todo;
        })
      );
      setInputValue("");
      setActiveTodoId("");
    } else {
      if (inputValue === "") {
        alert("This field should not be empty");
        return;
      }
      const inputArray = inputValue.split(" ");
      let noOfTimes = parseInt(inputArray[inputArray.length - 1]);
      let todoTitle = inputArray.slice(0, inputArray.length - 1).join(" ");

      if (isNaN(noOfTimes)) {
        noOfTimes = 1;
        todoTitle = inputValue;
      }
      const newTodosArray = [];

      for (let i = 0; i < noOfTimes; i++) {
        const newTodo = { id: v4(), title: todoTitle, updatedCount: 0 };
        newTodosArray.push(newTodo);
      }

      setTodosList((prev) => [...prev, ...newTodosArray]);
      setInputValue("");
    }
  };

  const deleteTodoItem = (id) => {
    setTodosList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodoItem = (id) => {
    const todoInEdit = todosList.find((todo) => todo.id === id);
    setInputValue(todoInEdit.title);
    setActiveTodoId(id);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Day Goals!</h1>
      <input
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={onInputChange}
      />
      <br />
      <button type="button" onClick={onAddTodo} className="add-todo-btn">
        Add Todo
      </button>
      {todosList.length === 0 ? (
        <p className="no-todos-msg">Todos list is empty</p>
      ) : (
        <ul className="todos-list">
          {todosList.map((todo) => (
            <TodoItem
              key={todo.id}
              todoDetails={todo}
              deleteTodoItem={deleteTodoItem}
              editTodoItem={editTodoItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
