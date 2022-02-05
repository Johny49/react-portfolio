import React from "react";
import Spacer from "./Spacer";
import { ExternalLink } from "react-external-link";

function Resume() {
    const styles = {
        ul: {
            flexDirection: "row",
            flexWrap: "wrap"
        },
        li: {
            backgroundColor: "#e1e5f2",
            color: "#022b3a",
        }
    };

    const skills = ["OOP", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.JS", "Express", "SQL", "MongoDB", "Firebase", "React.JS", "Swift"];
    const skillsList = skills.map((skill) => <li className="list-group-item col-4" style={styles.li} key={skill}>{skill}</li>);

    return (
        <section className="row py-4">
            <h2 className="section-header col-12 p-3">Resume</h2>
            <br></br>
            <section text-center>
                <h5>Skills</h5>
                <ul className="list-group" style={styles.ul}>{skillsList}</ul>
            </section>
            <Spacer />
            <div className="section-content col-12 text-center">
                <button className="btn btn-info">
                    <ExternalLink
                        className="contact-link" target="_blank"
                        href="https://drive.google.com/file/d/1A0sNzrA2vAYQnpavDapzr7HuMzGi9JBr/view?usp=sharing">
                        View or Download Full Resume on Google Drive
                    </ExternalLink>
                </button>
            </div>
            <Spacer />
        </section>
    );
}

export default Resume;
