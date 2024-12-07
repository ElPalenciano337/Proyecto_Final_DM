import React from "react";
import './summary.css';


interface SummaryProps {
  pending: number;
  completed: number;
}

const Summary: React.FC<SummaryProps> = ({ pending, completed }) => {
  return (
    <div className="summary-container">
      <h2>Resumen</h2>
      <p>Tareas pendientes: {pending}</p>
      <p>Tareas completadas: {completed}</p>
    </div>
  );
};

export default Summary;
