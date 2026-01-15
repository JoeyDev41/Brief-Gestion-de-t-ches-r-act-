import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page introuvable</h2>
            <p>Oups ! La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="btn-home">
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default NotFound;