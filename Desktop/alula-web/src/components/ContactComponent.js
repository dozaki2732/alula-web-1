import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Nav, Form, Button } from 'tabler-react';

import logo from '../images/logo-color.svg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar */}
                <Navbar className="mx-5">
                    <Nav>
                        <Nav.Item to="/home" value="back" icon="arrow-left" />
                    </Nav>
                </Navbar>
                {/* END Navigation Bar */}

                {/* Contact Form */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Contact Us</p>
                        <div>
                            <Form.FieldSet>
                                <Form.Group label="Name" isRequired>
                                    <Form.Input name="contact-name" />
                                </Form.Group>
                                <Form.Group label="Email" isRequired>
                                    <Form.Input name="contact-email" />
                                </Form.Group>
                                <Form.Group label="Subject" isRequired>
                                    <Form.Input name="contact-subject" />
                                </Form.Group>
                                <Form.Group label="Message" isRequired>
                                    <Form.Textarea rows={10} />
                                </Form.Group>
                                <button type='submit' value='Submit' class="btn btn-primary">Send Message</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Contact Form */}

                {/* Footer */}
                <Container>
                    <Navbar>
                        <p class="mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </Navbar>
                </Container>
                {/* END Footer */}
            </React.Fragment>
        );
    }
    
}

export default Contact;
    

