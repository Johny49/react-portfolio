import React from "react";
import { ExternalLink } from "react-external-link";
import { ProjectImg0 } from "../../images/index";

function Project({ name, ghLink, deployedLink, type, imgSrc, alt }) {

    return (
        <div className="container">
            <div className="card">
                <img
                    className="card-imgSrc-top"
                    src={imgSrc}
                    alt={"project.alt"}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a href={ghLink} className="btn btn-info">
                        View Repo on Github
                    </a>
                    <a href={deployedLink} className="btn btn-info">
                        View Deployed
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;