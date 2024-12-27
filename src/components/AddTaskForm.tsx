import React from "react";

interface AddTaskFormProps {
  currentText: string;
  setCurrentText: (text: string) => void;
  onAddTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ currentText, setCurrentText, onAddTask }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentText.trim()) {
      onAddTask(currentText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Добавь новую задачу"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddTaskForm;
