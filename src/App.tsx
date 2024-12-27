import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

interface TaskProps {
    id: string;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskProps[]>([
        { id: "1", text: "Сделать домашку в Аттракторе", completed: false },
        { id: "2", text: "Устать", completed: true },
        { id: "3", text: "Спать", completed: false }
    ]);

    const [taskText, setTaskText] = useState<string>("");

    const handleToggle = (id: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleAddTask = (text: string) => {
        const newTask = {
            id: String(new Date()),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <AddTaskForm currentText={taskText} setCurrentText={setTaskText} onAddTask={handleAddTask} />
            {tasks.map(task => (
                <Task
                    key={task.id}
                    text={task.text}
                    completed={task.completed}
                    onToggle={() => handleToggle(task.id)}
                    onDelete={() => handleDeleteTask(task.id)}
                />
            ))}
        </div>
    );
};

export default App;
