import React from "react";
import Spacer from "../Spacer";
import { Button, Card } from "react-bootstrap";

const styles = {
    cardTitle: {
        color: '#022b3a',
        padding: '0 20px',
    }
};

function Project({ name, ghLink, deployedLink, type, imgSrc, alt }) {
    return (
        <div className="container col-10">
            <Card>
                <img
                    className="card-img-top"
                    src={imgSrc}
                    alt={alt}
                />
                <div className="card-body text-center">
                    <h5 className="card-title" style={styles.cardTitle}>{name}</h5>
                    <div>
                        <Button className="btn btn-info m-4">
                            <a href={ghLink} target="_blank" rel="noreferrer">
                                View Repo on Github
                            </a>
                        </Button>
                        <Button className="btn btn-info m-4">
                            <a href={deployedLink} target="_blank" rel="noreferrer" >
                                View Deployed
                            </a>
                        </Button>
                    </div>
                </div>
            </Card>
            <Spacer />
        </div>
    );
}

export default Project;