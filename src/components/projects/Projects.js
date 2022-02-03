import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { ProjectImg0, ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5 } from '../../images/index';
import Project from "./Project";

const Projects = () => {
    const projects = [
        { name: "Weather Dashboard", ghLink: "https://github.com/Johny49/weather-dashboard/", deployedLink: "https://johny49.github.io/weather-dashboard/", type: "site", imgSrc: ProjectImg0, alt: "screenshot of weather dashboard" },
        { name: "Test Your Knowledge", ghLink: "https://github.com/Johny49/test-your-knowledge/", deployedLink: "https://johny49.github.io/test-your-knowledge/", type: "site", imgSrc: ProjectImg1, alt: "screenshot of test your knowledge webpage" },
        { name: "Password Tracker", ghLink: "https://github.com/Johny49/password-generator/", deployedLink: "https://johny49.github.io/password-generator/", type: "site", imgSrc: ProjectImg2, alt: "screenshot of password generator webpage" },
        {
            name: "Employee Tracker CMS", ghLink: "https://github.com/Johny49/employee-tracker-cms", deployedLink: "https://drive.google.com/drive/folders/17AvkjUoSTC1Nji76Mpb2CnqLLxsnVDh5", type: "video", imgSrc:
                ProjectImg3, alt: "screenshot of plan it work day scheduler"
        },
        { name: "E-Commerce Backend", ghLink: "https://github.com/Johny49/e-commerce-back-end", deployedLink: "https://drive.google.com/drive/folders/1BQRRPhXHZzI-hGZ5gswIW9H_-gHgJeNy", type: "video", imgSrc: ProjectImg4, alt: "screenshot of Pokedex website" },
        { name: "Tapper", ghLink: "https://github.com/Johny49/tapper", deployedLink: "#", type: "none", imgSrc: ProjectImg5, alt: "screenshot of Tapper app on an iPad" }]

    //key = project.name
    return (
        <div>
            {projects.map(project => (
                < Project {...project} />
            ))}
        </div>
    );
}

export default Projects;
