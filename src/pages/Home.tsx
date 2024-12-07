import React, { useState } from "react";
import Summary from "../components/summary/Summary";
import TaskItem from "../components/taskItem/TaskItem";
import TaskDetails from "../components/taskDetails/TaskDetails";
import AddTask from "../components/addTask/AddTask";
import './Home.css';

interface Task {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Comprar comida", description: "Ir al supermercado", type: "Hogar", completed: false },
    { title: "Trabajo", description: "Hacer el informe", type: "Trabajo", completed: true },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleClickTask = (task: Task) => {
    setSelectedTask(task);
  };

  const handleCompleteTask = (task: Task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div>
      <Summary
        pending={tasks.filter((task) => !task.completed).length}
        completed={tasks.filter((task) => task.completed).length}
      />

      <AddTask onAdd={handleAddTask} />

      <div>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onClick={handleClickTask} />
        ))}
      </div>

      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          onComplete={() => handleCompleteTask(selectedTask)}
          onDelete={() => handleDeleteTask(selectedTask)}
        />
      )}
    </div>
  );
};

export default Home;
