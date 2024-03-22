import { useContext, useRef } from "react";
import { VscAdd } from "react-icons/vsc";
import { TodoitemsContext } from "../store/Todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoitemsContext);
  const TodoNameElement = useRef();
  const DueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoname = TodoNameElement.current.value;
    const dueDate = DueDateElement.current.value;
    TodoNameElement.current.value = "";
    DueDateElement.current.value = "";
    console.log(`${todoname} due on: ${dueDate}`)
    addNewItem(todoname, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row row1" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={TodoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={DueDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success button1">
            Add <VscAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
