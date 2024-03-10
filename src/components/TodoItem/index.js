import { GrEdit } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

const TodoItem = (props) => {
  const { todoDetails, deleteTodoItem } = props;
  const { id, title } = todoDetails;

  const onDeleteTodo = () => {
    deleteTodoItem(id);
  };
  return (
    <li>
      <p>{title}</p>
      <div>
        <button type="button">
          <GrEdit />
        </button>
        <button type="button" onClick={onDeleteTodo}>
          <RxCross2 />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
