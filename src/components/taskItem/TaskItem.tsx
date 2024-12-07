import React from "react";
import './taskItem.css';

interface Task {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onClick: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onClick }) => {
  return (
    <div className="task-list-container">
      <div
        className={`task-item ${task.completed ? "completed" : "pending"}`}
        onClick={() => onClick(task)}
      >
        <h3>{task.title}</h3>
        <p>Tipo: {task.type}</p>
        <p>{task.completed ? "Completada" : "Pendiente"}</p>
      </div>
    </div>
  );
};

export default TaskItem;
