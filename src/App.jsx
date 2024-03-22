import Appname from "./components/name";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import Welcomemsg from "./components/Welcomemsg";
import "./App.css";
import { useState } from "react";
import { TodoitemsContext } from "./store/Todo-items-store";
function App() {
  const [todoitems, settodoitems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    settodoitems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const deleteItem = (todoname) => {
    const newTodoitems = todoitems.filter((item) => item.name !== todoname);
    settodoitems(newTodoitems);
  };

  return (
    <TodoitemsContext.Provider
      value={{
        todoitems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <Welcomemsg></Welcomemsg>
        <Todoitems></Todoitems>
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
