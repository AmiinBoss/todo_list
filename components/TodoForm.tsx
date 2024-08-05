// components/TodoForm.tsx
import React, { useState } from 'react';

interface TodoFormProps {
    onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter a new TODO" 
                required 
            />
            <button type="submit">Add TODO</button>
        </form>
    );
};

export default TodoForm;
