import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from '../styles/modules/app.module.scss'
import TodoModal from "./TodoModal";

export default function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={styles.appHeader}>
      <Button variant="primary"
      onClick={()=>setModalOpen(true)}
      >Add Task</Button>
      <SelectButton id="status">
        <option value="all" >ALL</option>
        <option value="incomplete">incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
      <TodoModal type='add' modalOpen = {modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
