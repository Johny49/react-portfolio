import React, { useState } from "react";
import Header from './Header';
import Navbar from './Navbar';
import About from "./about/About";
import Projects from './projects/Projects';
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About': return <About />;
            case 'Projects': return <Projects />;
            case 'Contact': return <Contact />;
            case 'Resume': return <Resume />;
            default: return <About />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="container col 12">
                {renderPage()}
                <Footer />
            </div>
        </div >
    );
}

export default PortfolioContainer;
