import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
    nav: {
        backgroundColor: '#1f7a8c',
        color: '#022b3a',
        padding: '0 20px',
    },
    li: {
        backgroundColor: '#022b3a',
        color: '#bfdbf7'
    },
    a: {
        color: '#bfdbf7'
    },
    aSelected: {
        color: '#1f7a8c'
    }
};

function Navbar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs" style={styles.nav}>
            <li className="nav-item" style={styles.li}>
                <a
                    href="#about"
                    style={currentPage === 'About' ? styles.aSelected : styles.a}
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item" style={styles.li}>
                <a
                    href="#projects"
                    style={currentPage === 'Projects' ? styles.aSelected : styles.a}
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="nav-item" style={styles.li}>
                <a
                    href="#contact"
                    style={currentPage === 'Contact' ? styles.aSelected : styles.a}
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li className="nav-item" style={styles.li}>
                <a
                    href="#resume"
                    style={currentPage === 'Resume' ? styles.aSelected : styles.a}
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navbar;