import { GrEdit } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, deleteTodoItem, editTodoItem } = props;
  const { id, title, updatedCount } = todoDetails;

  const onDeleteTodo = () => {
    deleteTodoItem(id);
  };

  const onEditClick = () => {
    editTodoItem(id);
  };

  return (
    <li className="todo-item">
      <p className="todo-title">
        {title} (Updated {updatedCount} {updatedCount === 1 ? `Time` : `Times`})
      </p>
      <div className="todo-buttons">
        <button type="button" onClick={onEditClick}>
          <GrEdit size={20} color="#ffffff" />
        </button>
        <button type="button" onClick={onDeleteTodo}>
          <RxCross2 size={20} color="red" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
