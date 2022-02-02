import React from "react";
import { ExternalLink } from "react-external-link";

function Resume() {
    const skills = ["OOP", "HTML", "CSS", "JavaScript", "Node", "Express", "SQL", "MongoDB", "Firebase", "React", "Swift"];
    const skillList = skills.map((skill) => <li className="list-group-item"></li>);

    return (
        <section id="resume" className="row py-4">
            <h2 className="section-header col-lg-2 col-sm-12 px-3">Resume</h2>
            <h5>Skills</h5>
            <ul className="list-group">{skillList}</ul>
            <div className="section-content col-10">
                <ExternalLink
                    className="contact-link" target="_blank"
                    href="https://drive.google.com/file/d/1A0sNzrA2vAYQnpavDapzr7HuMzGi9JBr/view?usp=sharing">
                    View or Download on Google Drive
                </ExternalLink>
            </div>
        </section>);
}

export default Resume;
