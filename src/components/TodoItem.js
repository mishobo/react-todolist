import React, { useEffect, useState } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";
import { toast } from "react-hot-toast";
import TodoModal from "./TodoModal";
import Checkbox from "./Checkbox";

export default function TodoItem({ todo }) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if(todo.status === 'complete') {
      setChecked(true)
    } else {
      setChecked(false)
    }
  },[todo.status])

  const handleDelete = () => {
    console.log("deleting :", todo.id);
    dispatch(deleteTodo(todo.id));
    toast.success(todo.title + " deleted successfully");
  };

  const handleUpdate = () => {
    console.log("handle update");
    setUpdateModalOpen(true);
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <Checkbox checked={checked} setChecked={setChecked} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoTexts,
                todo.status === "complete" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal
        todo={todo}
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}
