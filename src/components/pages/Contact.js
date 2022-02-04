import React from "react";
import { ExternalLink } from "react-external-link";
import { Form, FormControl, Button } from "react-bootstrap";

function Contact() {
    return (
        <section id="contact" className="row py-4">
            <h2 className="section-header  col-lg-2 col-sm-12 px-3">Contact</h2>
            <div className="section-content col-10">
                <div>

                    <h5>Phone:</h5>
                    <Button className="btn-info">
                        <ExternalLink
                            className="text-black"
                            href="tel:+19202853709">
                            (920)-285-3709
                        </ExternalLink>
                    </Button>
                </div>
                <div>

                    <h5>Email:</h5>
                    <Button className="btn-info">
                        <ExternalLink
                            className="text-black"
                            href="mailto:johnson.ge.49@gmail.com">
                            johnson.ge.49@gmail.com
                        </ExternalLink>
                    </Button>
                </div>
            </div>

            <form>
                <Form.Group className="mb-3" controlId="contact-form">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <FormControl as="textarea" aria-label="With textarea" placeholder="Type your message here" />
                    <Form.Text className="text-muted">
                        **This is a test form with no back-end configured.**
                    </Form.Text>
                    <br></br>
                    <Button className="btn-info"
                        type="submit">Submit form</Button>

                </Form.Group>
            </form>
        </section>
    );
}

export default Contact;
