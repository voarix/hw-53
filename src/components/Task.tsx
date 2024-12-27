import React from "react";

interface TaskProps {
  text: string;
  completed: boolean;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = ({text, completed, onToggle, onDelete}) => {
  return (
    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
      <input type="checkbox" checked={completed} onChange={onToggle}/>
      <span style={{textDecoration: completed ? "line-through" : "none"}}>
        {text}
      </span>
      <button onClick={onDelete} style={{marginLeft: "auto"}}>
        Удалить
      </button>
    </div>
  );
};

export default Task;
