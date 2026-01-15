import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import AddTask from './pages/AddTask';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Sortir Tyson', description: 'Balade du chien', status: 'A faire' },
        { id: 2, title: 'Finir la V2 demander', description: 'transformer la V1 on V2 demandé par Olivier', status: 'Terminé' },
    ]);

    const addTask = (newTask) => {
        const taskWithId = {
            ...newTask,
            id: Date.now()
        };
        setTasks([...tasks, taskWithId]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app">
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home tasks={tasks} deleteTask={deleteTask} />} />
                    <Route path="/tache/:id" element={<TaskDetail tasks={tasks} />} />
                    <Route path="/ajouter" element={<AddTask addTask={addTask} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;