import React from "react";
import Spacer from "../components/Spacer";
import { ExternalLink } from "react-external-link";
import { Form, FormControl, Button } from "react-bootstrap";

function Contact() {
    return (
        <section className="row p-2">
            <h2 className="section-header  col-12 p-3">Contact</h2>
            <br></br>
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
                <br></br>
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
            <Spacer />
            <form>
                <h5>Send a message:</h5>
                <Form.Group className="mb-3" controlId="contact-form">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <br></br>
                    <FormControl as="textarea" aria-label="With textarea" placeholder="Type your message here" />
                    <Form.Group className="text-center">
                        <Form.Text className="text-muted">
                            **This is a test form with no back-end configured.**
                        </Form.Text>
                        <br></br>
                        <Button className="btn-info" type="submit">Submit form</Button>
                    </Form.Group>
                </Form.Group>
            </form>
        </section>
    );
}

export default Contact;
