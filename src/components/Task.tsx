import React from "react";

interface TaskProps {
  text: string;
  completed: boolean;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<TaskProps> = ({ text, completed, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
    </div>
  );
};

export default Task;
