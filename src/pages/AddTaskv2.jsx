import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask({ addTask }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.title.trim() === '') {
            alert('Merci de saisir un titre');
            return;
        }

        addTask(formData);
        navigate('/'); // Redirection vers l'accueil après ajout
    };

    return (
        <div className="add-task">
            <h1>Ajouter une tâche</h1>

            <form onSubmit={handleSubmit} className="task-form">
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Titre de la tâche"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description de la tâche"
                        rows="4"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Statut</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="A faire">À faire</option>
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                    </select>
                </div>
                <button type="submit" className="btn-submit">
                    Ajouter la tâche
                </button>
            </form>
        </div>
    );
}

export default AddTask;