import React, { Component} from 'react';
import "../css/dashboard.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo-color.svg';

// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //
// NEED MASK ON ZIP CODE, PHONE NUMBER, ROUTING NUMBER, ACCOUNT NUMBER //

class Onboarding extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Header */}
                    {/* Navigation Bar (back arrow)*/}
                    <nav>
                        <Link to="/user-select" className="link"><button className="nav-link mt-3 ml-5 back-btn"><i class="fas fa-arrow-left mr-2"></i>Back</button></Link>
                    </nav>
                    {/* END Navigation Bar */}

                    {/* Logo */}
                        <div className="container mb-5 text-center">
                            <Link to="/home"><a href=""><img src={logo} height="100" width="100" alt="company logo" /></a></Link>
                        </div>
                        <h2 className="text-center mb-1">Welcome to Alula</h2>
                        <p className="lead text-center text-muted pb-5 mb-5">Property Management Done Right!</p>
                    {/* END Logo */}

                {/* END Header */}

                {/* Onboarding Form */}
                <div className="container mt-5">
                    <div className="m-5">
                        <p className="lead mb-5">A little onboarding never hurt anyone...</p>
                        <div>
                            {/* User Information */}
                            <div className="form-container mb-5">
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
                            <div className="form-container">
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

                            <div className="row">
                                <div className="col-12">
                                    <p className="small mb-3">By continuing, you agree to Alula's <span><Link href="">Terms & Conditions</Link></span></p>
                                </div>
                                <div className="col-12">
                                    <Link type='submit' value='Submit' class="button">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Onboarding Form */}

                {/* Footer */}
                <div className="container">
                    <div>
                        <p class="mt-5 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </div>
                </div>
                {/* END Footer */}
            </React.Fragment>
        );
    }

}

export default Onboarding;