import React, { Component } from 'react';
import { Navbar, Container, Pagination } from 'react-bootstrap';
import { Nav, Table, Button, Dropdown, Badge, Form } from 'tabler-react';


import logo from '../images/logo-color.svg';
import { Link } from 'react-router-dom';

import { CREATED_SERVICE_REQUESTS } from '../shared/createdServiceRequests';

class TenantDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceRequests: CREATED_SERVICE_REQUESTS
        }
    }

    renderMyServiceRequestTableData() {
        return this.state.serviceRequests.map((serviceRequests) => {
            const { created, completed } = serviceRequests
            return(
                <Table.Row>
                    <Table.Col>{created}</Table.Col>
                    <Table.Col>{completed}</Table.Col>
                </Table.Row>
            )
        })
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
                            <Nav.Item active value="Dashboard" icon="activity" />
                                <Nav.Item hasSubNav value="Settings" icon="settings">
                                    <Nav.SubItem to="/tenant-profile" value="Profile" icon="user" />
                                    <Dropdown.ItemDivider />
                                    <Nav.SubItem value="Help" icon="help-circle" />
                                    <Nav.SubItem to="/home" value="Sign Out" icon="log-out" />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                {/* END Navigation Bar */}

                <Container>
                    <h1 className="display-4 my-5 p-5">Dashboard</h1>
                </Container>
                
                {/* Payment Due/Lease Term */}
                <Container className="mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <p className="lead m-3">Make a Payment</p>
                                <div className="container text-center my-5">
                                    <h5 className="lead mb-5">Payment Due:</h5>
                                    <h1 className="display-3">(PRICE)</h1>
                                    <button className="btn btn-outline-success">Pay Rent</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card other-card">
                                <p className="lead m-3">Lease Term</p>
                                <div className="container text-center my-5">
                                    <h5 className="lead mb-5">Remaining</h5>
                                    <h1 className="display-3">(REMAINING LEASE LENGTH)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* END Payment/Lease Term */}

                {/* Service Request */}
                <Container className="mt-5">
                    <div className="card">
                    <div className="d-flex justify-content-between">
                            <p className="lead m-3">Service Requests</p>
                            <Link className="btn btn-sm btn-success m-3" to="/service-request"><i class="fas fa-plus mr-2"></i>Add Service Request</Link>
                        </div>
                        <div className="table-responsive">
                            <div className="container text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        <Table.ColHeader>Completed</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.renderMyServiceRequestTableData()}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <Container className="d-flex justify-content-center">
                            {/* PAGINATION GOES HERE */}
                        </Container>
                    </div>
                </Container>

                {/* END Service Request */}

                {/* Invoices Table - Needs Pagination. Invoices can be opened in printable PDF */}
                <Container className="mt-5">
                    <div className="card">
                        <div className="d-flex">
                            <p className="lead m-3">Invoices</p>
                            <Badge color="success" className="badge m-4">
                                New
                            </Badge>
                        </div>
                        <div className="table-responsive">
                            <Container className="text-center">
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>No.</Table.ColHeader>
                                        <Table.ColHeader>Subject</Table.ColHeader>
                                        <Table.ColHeader>Client</Table.ColHeader>
                                        <Table.ColHeader>Created</Table.ColHeader>
                                        <Table.ColHeader>Status</Table.ColHeader>
                                        <Table.ColHeader>Amount</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col><a href="">Invoice Prop</a></Table.Col>
                                            <Table.Col>Subject Prop</Table.Col>
                                            <Table.Col>Client</Table.Col>
                                            <Table.Col>Created</Table.Col>
                                            <Table.Col>Status Prop</Table.Col>
                                            <Table.Col>Amount Prop</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Container>
                        </div>
                        <Container className="d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Container>
                    </div>
                </Container>
                {/* END Invoices Table */}

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

export default TenantDashboard;