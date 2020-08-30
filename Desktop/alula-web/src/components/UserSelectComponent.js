import React, { Component} from 'react';
import '../css/auth.css';
import { Link } from 'react-router-dom';

import logo from '../images/logo-color.svg';


// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //

class UserSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar (back arrow)*/}
                <nav>
                    <Link to="/home" className="link"><button className="nav-link mt-3 ml-5 back-btn"><i class="fas fa-arrow-left mr-2"></i>Back</button></Link>
                    <div className="container d-flex justify-content-center mb-5">
                        <Link to="/user-select">
                            <img src={logo} width="100px" />
                        </Link>
                    </div>
                </nav>
                {/* END Navigation Bar */}

                {/* User Select Section */}
                <section className="pt-3">
                    <div className="container">
                        <h2 className="hero-heading text-center pb-5">
                            Let's pick a starting point...
                        </h2>
                        <div className="container">
                            <div className="container p-4 text-center">
                                <Link to="/onboarding" className="button">Property Manager</Link>
                            </div>
                            <div className="container p-4 text-center">
                                <Link to="/register" className="button">Tenant</Link>
                            </div>
                            {/* <div className="row">
                                <div className="d-none d-lg-block col-lg-3"></div>
                                <div className="col-12 col-lg-3">
                                    <div className="container p-3 text-center">
                                        <Link to="/onboarding" className="button">Property Manager</Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3"> 
                                    <div className="container p-3 text-center">
                                        <Link to="/register" className="button">Tenant</Link>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block col-lg-3"></div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* END User Select Section */}

                {/* Footer */}
                <div classNameName="container">
                    <navbar className="fixed-bottom">
                        <p className="ml-5 mt-2 mb-3 text-muted">© 2020 Alula. All rights reserved.</p>
                    </navbar>
                </div>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}

export default UserSelect;