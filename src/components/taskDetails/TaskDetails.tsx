import React from "react";
import './taskDetails.css';

interface Task {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

interface TaskDetailsProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onComplete, onDelete }) => {
  return (
    <div className="task-details">
      <h2>Detalles de la Tarea</h2>
      <p><strong>Título:</strong> {task.title}</p>
      <p><strong>Descripción:</strong> {task.description}</p>
      <p><strong>Tipo:</strong> {task.type}</p>
      <p><strong>Estado:</strong> {task.completed ? "Completada" : "Pendiente"}</p>
      <div className="task-details-buttons">
        {!task.completed && <button className="completeTaskButton" onClick={onComplete}>Marcar como Completada</button>}
        <button className="deleteTaskButton" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default TaskDetails;
