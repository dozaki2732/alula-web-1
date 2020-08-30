import React, { Component } from 'react';
import { Navbar, Container, Tab } from 'react-bootstrap';
import { Nav, Form, Table, Button } from 'tabler-react';

class AddServiceRequest extends Component {
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
                        <Nav.Item to="/tenant" value="back" icon="arrow-left" />
                    </Nav>
                </Navbar>
                {/* END Navigation Bar */}

                {/* Contact Form */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Submit Service Request</p>
                        <div>
                            <Form.FieldSet>
                                <Form.Group label="Message" isRequired>
                                    <Form.Textarea rows={5} />
                                </Form.Group>
                                <button type='submit' value='Submit' class="button">Send Service Request</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Contact Form */}

                </React.Fragment>
        );
    }
    
}

export default AddServiceRequest;