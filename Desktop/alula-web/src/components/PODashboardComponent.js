import React, { Component } from 'react';
import '../css/dashboard.css';

import logo from '../images/logo.svg';

// JSON DATA
import { OVERVIEW } from '../shared/overview';
import { SERVICEREQUEST } from '../shared/serviceRequest';
import { PROPERTY } from '../shared/property';
import { INVOICES } from '../shared/invoices';

class PODashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: OVERVIEW,
            serviceRequests: SERVICEREQUEST,
            properties: PROPERTY,
            invoices: INVOICES
        }
    }

    renderServiceRequestTableData() {
        return this.state.serviceRequests.map((serviceRequests) => {
            const { property, created, completion_status } = serviceRequests
            return(
                <tr>
                    <td><a href="">{property}</a></td>
                    <td>{created}</td>
                    <td className="font-weight-medium">{completion_status}</td>
                </tr>
            )
        })
    }

    renderPropertyTableData() {
        return this.state.properties.map((properties) => {
            const { id, property, revenue, loses, status } = properties
            return(
                <tr>
                    <td>{property}</td>
                    <td>${revenue}</td>
                    <td>${loses}</td>
                    <td>{status}</td>
                    <td>
                        <button className="del-prop">Delete</button>
                    </td>
                </tr>
            )
        })
    }

    renderInvoiceTableData() {
        return this.state.invoices.map((invoices) => {
            const { number, property, created, status, amount } = invoices
            return(
                <tr>
                    <td><a href="">{number}</a></td>
                    <td>{property}</td>
                    <td>{created}</td>
                    <td>{status}</td>
                    <td>{amount}</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand navbar-dark bg-gradient-dark">
                    <a className="navbar-brand ml-3" href="#">
                        <img src={logo} width="65px" />
                    </a>
                    {/* Navbar Right*/}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4">
                            <a className="nav-link"><i class="far fa-bell fa-fw"></i></a>
                        </li>
                        <li className="nav-item mr-1">
                            <a className="nav-link">|</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="/profile">Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                    {/* END Navbar Right */}
                </nav>
                {/* END Navigation Bar */}
                {/* Main Content */}
                {/* Overview */}
                <section id="overview">
                    <div className="container mt-5">
                        <div className="d-flex justify-content-between">
                            <h1 className="mt-4">Dashboard</h1>
                            <a class="btn-sm btn-primary m-4 generate" href="#" role="button"><i class="fas fa-download mr-2"></i>Generate Report</a>
                        </div>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">
                                        Properties Managed:
                                        <br />
                                        4
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#property-table">View Properties</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">
                                        Total Service Requests:
                                        <br />    
                                        3
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#service-table">View Service Requests</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">
                                        Total Revenue
                                        <br />
                                        $90,000
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link">Year to Date</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">
                                        Total Loses
                                        <br />
                                        $2,500
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link">Year to Date</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END Overview */}
                {/* Properties */}
                <section id="property-table">
                    <div className="container">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex justify-content-between py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Properties</h6>
                                <a href="/add-property" className="text-gray-900"><i class="fas fa-plus mr-2"></i>Add Property</a>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Show:</label>
                                        <select className="form-control-sm">
                                            <option>5</option>
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        <label className="ml-1">entries</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_filter" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <label className="mr-2">Search:</label>
                                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className="text-gray-900">
                                                <th>Property</th>
                                                <th>Revenue</th>
                                                <th>Losses</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr className="text-gray-900">
                                                <th>Property</th>
                                                <th>Revenue</th>
                                                <th>Losses</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {this.renderPropertyTableData()}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Showing 4 of 4</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_pagination" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Properties */}
                {/* Service Requests */}
                <section id="service-table">
                    <div className="container">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Service Requests</h6>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Show:</label>
                                        <select className="form-control-sm">
                                            <option>5</option>
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        <label className="ml-1">entries</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_filter" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <label className="mr-2">Search:</label>
                                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className="text-gray-900">
                                                <th>Property</th>
                                                <th>Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr className="text-gray-900">
                                                <th>Property</th>
                                                <th>Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {this.renderServiceRequestTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Showing 3 of 3</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_pagination" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Service Requests */}
                {/* Invoices */}
                <section id="invoice-table">
                    <div className="container">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Invoices</h6>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Show:</label>
                                        <select className="form-control-sm">
                                            <option>5</option>
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        <label className="ml-1">entries</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_filter" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <label className="mr-2">Search:</label>
                                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className="text-gray-900">
                                                <th>Number</th>
                                                <th>Property</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr className="text-gray-900">
                                                <th>Number</th>
                                                <th>Property</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {this.renderInvoiceTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <div className="form-group my-3 text-gray-800">
                                        <label className="pl-3 mr-2">Showing 5 of 36</label>
                                    </div>
                                </div>
                                <div class="col-md-6 d-none d-md-block">
                                    <div id="dataTable_pagination" class="form-inline my-3 text-gray-800 d-flex justify-content-end pr-3">
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link" href="#">8</a></li>

                                                <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Invoices */}
                
                {/* Footer */}
                <div classNameName="container">
                    <navbar>
                        <p className="ml-5 mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </navbar>
                </div>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default PODashboard;