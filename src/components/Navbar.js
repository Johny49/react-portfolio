import React from "react";
import '../styles/index.css';


const styles = {
    nav: {
        background: '#e3f2fd',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: '#022b3aff',
        padding: '0 20px',
    },
};

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={styles.nav}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;