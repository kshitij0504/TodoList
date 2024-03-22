import { useContext } from "react";
import styles from "./Welcomemsg.module.css";
import { TodoitemsContext } from "../store/Todo-items-store";

const Welcomemsg = () => {

  const ContextObj = useContext(TodoitemsContext);
  const todoitems = ContextObj.todoitems;

  return (
    todoitems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default Welcomemsg;
