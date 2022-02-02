import React from "react";
import { ExternalLink } from 'react-external-link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (

        <footer>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <ExternalLink href="https://github.com/Johny49" target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                    </ExternalLink>
                </li>
                <li className="list-group-item">
                    <ExternalLink href="https://www.linkedin.com/in/johnsonge49/" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span>
                    </ExternalLink>
                </li>
                <li className="list-group-item">
                    <ExternalLink href="https://stackoverflow.com/users/17213151/" target="_blank" rel="noopener noreferrer">
                        <span>Stack Overflow</span>
                    </ExternalLink>
                </li>
            </ul>
            <h4><span id="copyright" className="p-3"></span>{`\u00a9`} 2021 Geoffrey Johnson</h4>
        </footer>
    );
}

export default Footer;