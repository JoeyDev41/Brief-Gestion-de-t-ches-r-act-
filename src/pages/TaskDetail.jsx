import { useParams, Link, useNavigate } from 'react-router-dom';

function TaskDetail({ tasks }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <div className="not-found-task">
                <h2>Tâche introuvable</h2>
                <p>La tâche avec l'ID {id} n'existe pas.</p>
                <button onClick={() => navigate('/')} className="btn-back">
                    Retour à l'accueil
                </button>
            </div>
        );
    }

    return (
        <div className="task-detail">
            <Link to="/" className="btn-back">← Retour</Link>

            <div className="task-card">
                <h1>{task.title}</h1>
                <div className="task-meta">
                    <span className={`status status-${task.status.toLowerCase().replace(' ', '-')}`}>
                        {task.status}
                    </span>
                    <span className="task-id">ID: {task.id}</span>
                </div>
                <div className="task-description">
                    <h3>Description</h3>
                    <p>{task.description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskDetail;