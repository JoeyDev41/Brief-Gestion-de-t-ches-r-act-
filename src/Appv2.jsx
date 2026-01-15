import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbarv2';
import Home from './pages/Homev2';
import TaskDetail2 from './pages/TaskDetailv2';
import AddTask from './pages/AddTaskv2';
import NotFound from './pages/NotFoundv2';
import './Appv2.css';

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
                    <Route path="/tache/:id" element={<TaskDetail2 tasks={tasks} />} />
                    <Route path="/ajouter" element={<AddTask addTask={addTask} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;