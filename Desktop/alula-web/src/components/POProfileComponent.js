import React, { Component } from 'react';
import '../css/dashboard.css';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

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

                {/* Main Section */}
                <section className="container my-5">
                    {/* Header */}
                    <h1 className="mt-4">Settings</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item">Settings</li>
                    </ol>
                    {/* END Header */}

                    {/* Onboarding Form */}
                    <p className="lead mb-5">Update your Profile</p>

                    {/* User Information */}
                    <div className="form-container mb-3">
                        <p className="lead pb-4">User Information</p>
                        <div className="form">
                            <div className="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="fullName" placeholder="Enter Full Name..." required/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="example@example.com" required/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password..." required/>
                            </div>
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" className="form-control mb-3" id="address" placeholder="Address" required/>
                                <input type="text" className="form-control mb-3" id="city" placeholder="City" required/>
                                <input type="text" className="form-control mb-3" id="state" placeholder="State" required/>
                                <input type="text" className="form-control" id="zip-code" placeholder="Zip Code" data-inputmask-inputformat="" required/>
                            </div>
                            <div className="form-group">
                                <label for="telephone-number">Telephone Number</label>
                                <input type="tel" className="form-control" id="telephone-number" placeholder="(555)555-5555" required/>
                            </div>
                        </div>
                    </div>
                    {/* END User Information */}

                    {/* Payment Information */}
                    <div className="form-container pb-4">
                        <p className="lead mb-2">Payment Method</p>
                        <div className="form">
                            <p className="small my-3">Enter the account to which you wish to receive rental payments as well as pay your monthly fee for this service.</p>
                            <div className="form-group">
                                <label for="account-name">Account Holder's Name</label>
                                <input type="text" className="form-control" id="account-name" placeholder="Enter Account Holder's Name..." required/>
                            </div>
                            <div className="form-group">
                                <label for="routing-number">Routing Number</label>
                                <input type="text" className="form-control" id="routing-number" placeholder="Enter Routing Number...." required/>
                            </div>
                            <div className="form-group">
                                <label for="account-number">Routing Number</label>
                                <input type="text" className="form-control" id="account-number" placeholder="Enter Account Number...." required/>
                            </div>
                        </div>
                    </div>
                    {/* END Payment Information */}
    
                    {/* User Preferences */}
                    <div className="form-container pb-4">
                        <p className="lead mb-2">Preferences</p>
                        <div className="form">
                            <p className="small my-3">Enter the account to which you wish to receive rental payments as well as pay your monthly fee for this service.</p>
                        </div>
                    </div>
                    {/* END User Preferences */}
                    <div className="row">
                        <div className="col-12">
                            <Link type='submit' value='Submit' class="button">Update Profile</Link>
                        </div>
                    </div>
                    {/* END Onboarding */}
                </section>
                {/* END Section */}

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

export default Profile;