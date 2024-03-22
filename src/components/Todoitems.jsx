import { TodoitemsContext } from "../store/Todo-items-store";
import { useContext } from "react";
import Todoitem from "./Todoitem";

const Todoitems = () => {

  const { todoitems } = useContext(TodoitemsContext);

  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          tododate={item.duedate}
          todoname={item.name}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
