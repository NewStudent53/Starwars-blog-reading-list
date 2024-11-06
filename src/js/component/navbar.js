import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo" style={{ width: '100px', height: 'auto' }} />
                </Link>
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
