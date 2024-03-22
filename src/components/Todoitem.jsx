import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoitemsContext } from "../store/Todo-items-store";

function Todoitem({ todoname, tododate }) {
  const { deleteItem } = useContext(TodoitemsContext);

  return (
    <div className="container">
      <div className="row row1">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger button1"
            onClick={() => deleteItem(todoname)}
          >
            Delete <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
