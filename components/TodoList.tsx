// components/TodoList.tsx
import React, { useState } from 'react';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onEdit: (id: number, title: string) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
    const [editId, setEditId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState<string>('');

    const handleEdit = (id: number, title: string) => {
        setEditId(id);
        setEditTitle(title);
    };

    const handleSave = (id: number) => {
        onEdit(id, editTitle);
        setEditId(null);
        setEditTitle('');
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    {editId === todo.id ? (
                        <input 
                            type="text" 
                            value={editTitle} 
                            onChange={(e) => setEditTitle(e.target.value)} 
                        />
                    ) : (
                        <span>{todo.title}</span>
                    )}
                    {editId === todo.id ? (
                        <button className="save-btn" onClick={() => handleSave(todo.id)}>Save</button>
                    ) : (
                        <>
                            <button className="edit-btn" onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
                            <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
