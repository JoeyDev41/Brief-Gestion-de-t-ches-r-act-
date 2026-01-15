import { useState } from 'react';
import './App.css'

function App() {
    //Stockage de la liste des täches (tableau d'objets)
    const [tasks, setTasks] = useState([]);
    //Stockage de la saisie utilisateur
    const [task, setTask] = useState('');

    //Fonction pour ajouter une tâche
    const addTasks = (e) => {
        e.preventDefault();

        if (task.trim() === '') {
            alert('Merci de saisir un titre');
            return;
        }

        const newTask = {
            id: Date.now(),
            title: task
        };
        // Mise à jour de l'état
        setTasks([...tasks, newTask]);
        setTask('');
    };

    //Fonction pour supprimer une tâche
    const deleteTasks = (id) => {
        //Filtrage pour retirer l'élément par son ID
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className='container'>
            <h1>Brief To Do List React Vite </h1>
            <form onSubmit={addTasks} className="form-group">
                <input
                    type='text'
                    placeholder="Nouvelle Tâche"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type='submit' className='btn-add'>Ajouter</button>
            </form>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <span>{task.title}</span>
                        <button
                            onClick={() => deleteTasks(task.id)}
                            className="btn-delete"
                        >Supprimer
                        </button>
                    </li>
                ))}
            </ul>

            {tasks.length === 0 && <p>Aucune tâche en cours </p>}
        </div>
    )
}
export default App

//a corrigé//



