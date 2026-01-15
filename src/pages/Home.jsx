import { Link } from 'react-router-dom';

function Home({ tasks, deleteTask }) {
    return (
        <div className="home">
            <h1>Liste des tâches</h1>

            {tasks.length === 0 ? (
                <p className="empty-message">Aucune tâche en cours</p>
            ) : (
                <ul className="task-list">
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            <div className="task-info">
                                <Link to={`/tache/${task.id}`} className="task-title">
                                    {task.title}
                                </Link>
                                <span className={`status status-${task.status.toLowerCase().replace(' ', '-')}`}>
                                    {task.status}
                                </span>
                            </div>
                            <button onClick={() => deleteTask(task.id)} className="btn-delete">
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;