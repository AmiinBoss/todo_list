import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            router.push('/login');
        } else {
            // Load initial TODOs from localStorage
            const savedTodos = localStorage.getItem('todos');
            if (savedTodos) {
                setTodos(JSON.parse(savedTodos));
            } else {
                // Fetch initial TODOs from the server if not available in localStorage
                fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                    .then(response => response.json())
                    .then(data => setTodos(data))
                    .catch(error => console.error('Error fetching data:', error));
            }
        }
    }, [router]);

    useEffect(() => {
        // Save TODOs to localStorage whenever they change
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const editTodo = (id: number, title: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>TODO App</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} />
        </div>
    );
};

export default Home;
