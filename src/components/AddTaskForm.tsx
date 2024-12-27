import React from "react";

const AddTaskForm: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Добавь новую задачу" />
      <button>Добавить</button>
    </div>
  );
};
export default AddTaskForm;
