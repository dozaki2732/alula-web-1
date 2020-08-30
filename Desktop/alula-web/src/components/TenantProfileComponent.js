import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Nav, Dropdown, Form } from 'tabler-react';


import logo from '../images/logo-color.svg';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar */}
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className="ml-5">
                            <img 
                                src={logo}
                                height="55px"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Item to="/tenant" value="Dashboard" icon="activity" />
                                <Nav.Item active hasSubNav value="Settings" icon="settings">
                                    <Nav.SubItem value="Profile" icon="user" />
                                    <Dropdown.ItemDivider />
                                    <Nav.SubItem value="Help" icon="help-circle" />
                                    <Nav.SubItem to="/home" value="Sign Out" icon="log-out" />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                {/* END Navigation Bar */}

                {/* Edit Profile */}
                <Container classname="mt-5">
                    <h1 className="display-4 my-5 p-5">Profile</h1>
                    <div className="m-5">
                        <p className="lead">Edit Profile</p>
                        <div>
                            <Form.FieldSet>
                                <Form.Group label="Update Property ID" isRequired>
                                    <p>Only update this portion if you have moved into a new property. Updating this will send future rent payments to cover the new property, never an old one.</p>
                                    <Form.InputGroup>
                                        <Form.InputGroupPrepend>
                                        <Form.InputGroupText>
                                            A-
                                        </Form.InputGroupText>
                                        </Form.InputGroupPrepend>
                                        <Form.MaskedInput 
                                            name="update-prop-id" 
                                            mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                                        />
                                    </Form.InputGroup>
                                </Form.Group>
                                <hr />
                                <Form.Group label="Update Name" isRequired>
                                    <Form.Input name="update-name" />
                                </Form.Group>
                                <Form.Group label="Update Email" isRequired>
                                    <Form.Input name="update-email" />
                                </Form.Group>
                                <Form.Group label="Update Password" isRequired>
                                    <Form.Input type="password" name="update-password" />
                                </Form.Group>
                                <Form.Group label="Phone number" isRequired>
                                    <Form.MaskedInput 
                                        name="update-phone-number"
                                        mask={["(", /\d/, /\d/, /\d/, ")", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <button type='submit' value='Submit' class="btn btn-primary">Update Profile</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Edit Profile */}

                {/* Update Payment Method */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Update Payment Method</p>
                        <div>
                            <Form.FieldSet>
                                <p>Once saved, you will <strong>not</strong> have to re-enter your card number everytime you make a payment.</p>
                                <Form.Group label="Account Holder's Name" isRequired>
                                    <Form.Input name="update-acc-name" />
                                </Form.Group>
                                <Form.Group label="Card Number" isRequired>
                                    <Form.MaskedInput 
                                        name="update-card-number"
                                        mask={[/\d/, /\d/, /\d/, /\d/, "", /\d/,/\d/,/\d/,/\d/, "", /\d/,/\d/,/\d/,/\d/, "", /\d/,/\d/,/\d/,/\d/]}
                                    />
                                </Form.Group>
                                <Form.Group label="Expiration" isRequired>
                                    <Form.Input 
                                        name="update-card-expiration" 
                                        placeholder="e.g 01/21"
                                        mask={[/\d/, /\d/, "/", /\d/,/\d/]}
                                    />
                                </Form.Group>
                                <Form.Group label="CVC" isRequired>
                                    <Form.Input 
                                        name="update-cvc" 
                                        mask={[/\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <Form.Group label="Address" isRequired>
                                    <Form.Input name="update-address" className="mb-4" placeholder="Address" />
                                    <Form.Input name="update-city" className="mb-4" placeholder="City" />
                                    <Form.Input name="update-state" className="mb-4" placeholder="State" />
                                    <Form.MaskedInput 
                                        name="update-zipcode"
                                        placeholder="Zip Code"
                                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                                <button type='submit' value='Submit' class="btn btn-primary">Update Payment Method</button>
                            </Form.FieldSet>
                        </div>
                    </div>
                </Container>
                {/* END Update Payment Method */}

                {/* Preferences */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p className="lead">Preferences</p>
                        <Form.FieldSet>
                            <Form.Group className="my-3" label="Email Preferences">
                                <Form.Switch type="radio" name="invoice-opt" value="invoice-opt" label="Receive Invoice Notifications via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="service-opt" value="service-opt" label="Receive Service Requests Notifications via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="month-statement-opt" value="month-statement-opt" label="Receive Montly Statement via Email" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Switch type="radio" name="tax-statement-opt" value="month-statement-opt" label="Receive a copy of your Schedule E 1040 via Email" />
                            </Form.Group>
                        </Form.FieldSet>
                    </div>
                </Container>
                {/* END Preferences */}

                {/* Privacy and Policy */}
                <Container className="mt-5">
                    <div className="m-5">
                        <p class="lead">Privacy and Policy</p>
                        <Form.FieldSet>
                            <Form.Group>
                                <a href="">Privacy Policy</a>
                            </Form.Group>
                            <Form.Group>
                                <a href="">Terms & Conditions</a>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <a href="" className="red">Delete Account</a>
                                {/* NEEDS MODAL TO CONFIRM DELETE */}
                            </Form.Group>

                        </Form.FieldSet>
                    </div>
                </Container>

                {/* END Privacy and Policy */}

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

export default Profile;