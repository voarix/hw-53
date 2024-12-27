import React from "react";
import "./AddTaskForm.css";

interface AddTaskFormProps {
  currentText: string;
  setCurrentText: (text: string) => void;
  onAddTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  currentText,
  setCurrentText,
  onAddTask,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentText.trim()) {
      onAddTask(currentText);
    } else {
      alert("Введите задачу");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"form-add-task"}>
      <input
        type="text"
        placeholder="Добавь новую задачу"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
        className="field"
      />
      <button type="submit" className={"submit-btn"}>
        Добавить
      </button>
    </form>
  );
};

export default AddTaskForm;
