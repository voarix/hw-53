import React from "react";
import "./Task.css";

interface TaskProps {
  text: string;
  completed: boolean;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span className="task-text">{text}</span>
      <button onClick={onDelete} type="button" className="delete-btn">
        Удалить
      </button>
    </div>
  );
};

export default Task;
