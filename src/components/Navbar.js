import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// const styles = {
//     nav: {
//         background: '#e3f2fd',
//         minHeight: 50,
//         lineHeight: 3.5,
//         fontSize: '1.2rem',
//         color: '#022b3aff',
//         padding: '0 20px',
//     },
// };

function Navbar(currentPage, handlePageChange) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                href="#about-me"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#resume"
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;