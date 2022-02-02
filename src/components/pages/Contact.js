import React from "react";
import { ExternalLink } from "react-external-link";

function Contact() {
    return (
        <section id="contact" className="row py-4">
            <h2 className="section-header  col-lg-2 col-sm-12 px-3">Contact</h2>
            <div className="section-content col-10">
                <ExternalLink
                    className="contact-link"
                    href="tel:+19202853709">
                    (920)-285-3709
                </ExternalLink>
                <ExternalLink
                    className="contact-link"
                    href="mailto:johnson.ge.49@gmail.com">
                    johnson.ge.49@gmail.com
                </ExternalLink>
            </div>

            <form>

            </form>
        </section>
    );
}

export default Contact;
