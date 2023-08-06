import React from 'react';
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img style={{ width: 85, height: 45 }} src={logo} alt='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <p className="btn  p-3 nav-link" >Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="btn p-3 nav-link" >About</p>
                        </li>
                        <li className="nav-item">
                            <p className="btn p-3 nav-link">Services</p>
                        </li>
                        <li className="nav-item">
                            <p className="btn p-3 nav-link">Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
