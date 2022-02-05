import React from "react";
import { ExternalLink } from 'react-external-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function Footer() {
    return (

        <footer className="text-center">
            <br></br>
            <section>
                {/* <ul className="list-group list-group-horizontal justify-content-center"> */}
                {/* <li className="list-group-item"> */}
                <Button className="btn-info mx-1">
                    <ExternalLink className="text-light" href="https://github.com/Johny49" target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                    </ExternalLink>
                </Button>
                {/* </li> */}
                {/* <li className="list-group-item"> */}
                <Button className="btn-info mx-1">
                    <ExternalLink className="text-light" href="https://www.linkedin.com/in/johnsonge49/" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span>
                    </ExternalLink>
                </Button>
                {/* </li> */}
                {/* <li className="list-group-item"> */}
                <Button className="btn-info mx-1">
                    <ExternalLink className="text-light" href="https://stackoverflow.com/users/17213151/" target="_blank" rel="noopener noreferrer">
                        <span>Stack Overflow</span>
                    </ExternalLink>
                </Button>
                {/* </li> */}
                {/* </ul> */}
            </section>
            <hr></hr>
            <h4>{`\u00a9`} 2021 Geoffrey Johnson</h4>
        </footer>
    );
}

export default Footer;