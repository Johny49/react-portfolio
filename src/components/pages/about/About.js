import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import headshot from './headshot.png';


function About() {
    return (
        <section id="about" className="row py-4">
            <h2 className="section-header col-lg-2 col-sm-12 p-3">About</h2>
            <div className="section-content col-10">
                <img
                    src={headshot}
                    alt="headshot of Geoffrey Johnson, a white male wearing purple shirt and tie"
                    className="img-fluid shadow-4 p-1"
                />
                <p className="px-2">Full stack web developer in training with skills in HTML, CSS, and JavaScript. Proven experience supporting both technology and users of technology, working collaboratively with diverse user groups, and development of training and professional development materials. I have earned a degree in network administration, am a certified teacher, and have earned a certificate through completion of a rigorous coding bootcamp. I bring a robust knowledge of accessibility and assistive technology to support individuals with disabilities. I love solving problems and excel at developing effective solutions to complex problems, refining workflows, and streamlining processes.</p>
            </div>
        </section>
    );
}

export default About;