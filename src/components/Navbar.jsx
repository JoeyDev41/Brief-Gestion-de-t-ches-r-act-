import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>📝 Brief React List V2</h2>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                        Acceuil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ajouter" className={({ isActive }) => isActive ? 'active' : ''}>
                        Ajouter une tâche
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;