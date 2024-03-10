import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";

import TodoItem from "./components/TodoItem";

const App = () => {
  const [todosList, setTodosList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddTodo = () => {
    if (inputValue === "") {
      alert("This field should not be empty");
      return;
    }
    const newTodo = { id: v4(), title: inputValue };
    setTodosList((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const deleteTodoItem = (id) => {
    setTodosList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Day Goals!</h1>
      <input
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="button" onClick={onAddTodo}>
        Add Todo
      </button>
      <ul>
        {todosList.map((todo) => (
          <TodoItem
            key={todo.id}
            todoDetails={todo}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </div>
  );
};
export default App;
