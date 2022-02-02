import React, { useState } from "react";
import Navbar from './Navbar';
import About from "./pages/About";
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        switch (currentPage) {
            case 'AboutMe': return <About />;
            case 'Projects': return <Projects />;
            case 'Contact': return <Contact />;
            case 'Resume': return <Resume />;
            default: return <About />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;
