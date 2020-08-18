import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const font = {
        fontSize: 20,
        letterSpacing: 5,
        fontWeight: "bold"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <a className="navbar-brand" href="/index.html"><span style={font}>Todo List</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/index.html"><span id="font">Home</span> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/index.html"><span id="font">Features</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/index.html"><span id="font">Pricing</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar;