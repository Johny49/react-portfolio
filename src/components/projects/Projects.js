import React from "react";
import Spacer from "../Spacer";
import { ProjectImg0, ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5 } from '../../images/index';
import Project from "./Project";

const Projects = () => {
    const projects = [
        { name: "Weather Dashboard", ghLink: "https://github.com/Johny49/weather-dashboard/", deployedLink: "https://johny49.github.io/weather-dashboard/", type: "site", imgSrc: ProjectImg0, alt: "screenshot of weather dashboard", key: 0 },
        { name: "Test Your Knowledge", ghLink: "https://github.com/Johny49/test-your-knowledge/", deployedLink: "https://johny49.github.io/test-your-knowledge/", type: "site", imgSrc: ProjectImg1, alt: "screenshot of test your knowledge webpage", key: 1 },
        { name: "Password Generator", ghLink: "https://github.com/Johny49/password-generator/", deployedLink: "https://johny49.github.io/password-generator/", type: "site", imgSrc: ProjectImg2, alt: "screenshot of password generator webpage", key: 2 },
        {
            name: "Employee Tracker CMS", ghLink: "https://github.com/Johny49/employee-tracker-cms", deployedLink: "https://drive.google.com/drive/folders/17AvkjUoSTC1Nji76Mpb2CnqLLxsnVDh5", type: "video", imgSrc:
                ProjectImg3, alt: "screenshot of plan it work day scheduler", key: 3
        },
        { name: "E-Commerce Backend", ghLink: "https://github.com/Johny49/e-commerce-back-end", deployedLink: "https://drive.google.com/drive/folders/1BQRRPhXHZzI-hGZ5gswIW9H_-gHgJeNy", type: "video", imgSrc: ProjectImg4, alt: "screenshot of Pokedex website", key: 4 },
        { name: "Tapper", ghLink: "https://github.com/Johny49/tapper", deployedLink: "#", type: "none", imgSrc: ProjectImg5, alt: "screenshot of Tapper app on an iPad", key: 5 }]

    //key = project.name
    return (
        <section>
            <h2 className="section-header  col-12 p-3">Projects</h2>
            <Spacer />
            <div>
                {projects.map(project => (
                    < Project {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
