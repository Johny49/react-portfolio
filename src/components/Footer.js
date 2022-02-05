import React from "react";
import Spacer from "./Spacer";
import { ExternalLink } from 'react-external-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function Footer() {
    return (

        <footer className="text-center">
            <Spacer />
            <section>
                <Button className="btn-info mx-1">
                    <ExternalLink href="https://github.com/Johny49" target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                    </ExternalLink>
                </Button>
                <Button className="btn-info mx-1">
                    <ExternalLink href="https://www.linkedin.com/in/johnsonge49/" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span>
                    </ExternalLink>
                </Button>
                <Button className="btn-info mx-1">
                    <ExternalLink href="https://stackoverflow.com/users/17213151/" target="_blank" rel="noopener noreferrer">
                        <span>Stack Overflow</span>
                    </ExternalLink>
                </Button>
            </section>
            <hr></hr>
            <h6>{`\u00a9`} 2021 Geoffrey Johnson</h6>
        </footer>
    );
}

export default Footer;