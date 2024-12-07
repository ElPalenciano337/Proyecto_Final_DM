// src/components/addTask/AddTask.tsx
import React, { useState } from 'react';
import './addTask.css';

interface AddTaskProps {
    onAdd: (task: { title: string; description: string; type: string; completed: boolean }) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && type) {
            onAdd({ title, description, type, completed: false });
            setTitle('');
            setDescription('');
            setType('');
        } else {
            alert('El título y el tipo son obligatorios');
        }
    };

    return (
        <div className="add-task">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="title">Título:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="type">Tipo:</label>
                    <input
                        id="type"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='addTaskButton'>Agregar Tarea</button>
            </form>
        </div>
    );
};

export default AddTask;
