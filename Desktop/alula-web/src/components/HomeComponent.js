import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.svg';
import building from '../images/building.jpg'
import '../css/landing.css';
import { Link } from 'react-router-dom';

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                {/* Header */}
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container pb-sm-1 pb-lg-5 mb-lg-5">
                            <Navbar variant="dark" expand="lg" className="mx-3">
                                <Navbar.Brand href="#home">
                                    <img 
                                        src={logo}
                                        height="90" 
                                        width="90"
                                    />
                            </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="#about" className="mx-3 navlink" active>About</Nav.Link>
                                        <Nav.Link href="#pricing" className="mx-3 navlink" active>Pricing</Nav.Link>
                                        <Nav.Link href="#contact" className="mx-3 navlink" active>Contact</Nav.Link>
                                        <Nav.Link href="" className="mx-3 navlink btn-warning text-center" active><Link to="/login" className="text-white">Sign In</Link></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                        {/* Content */}
                        <div className="container px-5 pt-4 pb-5 mt-5">
                            <h1 className="display-3 title mb-3 font-weight-bold">Property Management Done Right</h1>
                            <p className="lead mb-5">A One Stop Shop for Landlords and Property Managers</p>
                            <Link to="/user-select"><button class="d-sm-inline-block btn btn-lg btn-dark">Let's Get Started<i class="fas fa-angle-right ml-2"></i></button></Link>
                        </div>
                        {/* END Content */}
                    </div>
                {/* END Header */}

                {/* Section 1 - About */}
                <section className="py-6" id="about">
                    <div className="container-fluid px-5">
                        <div className="row">
                            {/* First Column */}
                            <div className="px-5 col-lg-3">
                                <p className="advantage-number">1</p>
                                <div className="pl-5">
                                    <h6 className="text-uppercase">Manage your Properties</h6>
                                    <p class="text-muted text-sm mb-5 mb-lg-0">Whether you manage one property or one thousand properties, you will have the ability to keep track of payments, service requests, vacancies and more.</p>
                                </div>
                            </div>
                            {/* END First Column */}
                            {/* Second Column */}
                            <div className="px-5 col-lg-3">
                                <p className="advantage-number">2</p>
                                <div className="pl-5">
                                    <h6 className="text-uppercase">Accept Payments</h6>
                                    <p class="text-muted text-sm mb-5 mb-lg-0">Accept payments from your tenants. When your tenant pays their rent, we will keep track of the transaction and at years end, keep you tax compliant.</p>
                                </div>
                            </div>
                            {/* END Second Column */}
                            {/* Third Column */}
                            <div className="px-5 col-lg-3">
                                <p className="advantage-number">3</p>
                                <div className="pl-5">
                                    <h6 className="text-uppercase">Handle Requests</h6>
                                    <p class="text-muted text-sm mb-5 mb-lg-0">We understand that things happen. Your tenants can schedule maintenance & repair claims quickly and easily.</p>
                                </div>
                            </div>
                            {/* END Third Column */}
                            {/* Third Column */}
                            <div className="px-5 col-lg-3">
                                <p className="advantage-number">4</p>
                                <div className="pl-5">
                                    <h6 className="text-uppercase">Pay your Taxes</h6>
                                    <p class="text-muted text-sm mb-5 mb-lg-0">Since we keep track of profits and losses, we will have everything ready to go once you file your taxes at the end of every year.</p>
                                </div>
                            </div>
                            {/* END Third Column */}
                        </div>
                    </div>
                </section>
                {/* END Section 1 */}

                {/* Section 2 - Pricing */}
                <section className="py-6 bg-gray-100" id="pricing"> 
                    <div className="container">
                        <h2 className="hero-heading text-center pb-5">
                           Plans & Pricing
                        </h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-5 mb-lg-0 border-0 shadow card">
                                    <div className="card-body">
                                        <h2 class="text-base subtitle text-center text-primary py-3">Monthly Subscription</h2>
                                        <p class="text-muted text-center">
                                        <span class="h1 text-dark">$30</span>
                                            <span class="ml-2">/ per property</span>
                                        </p>
                                        <hr />
                                        <ul class="fa-ul my-4">
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-building mr-3"></i>
                                                </span>
                                                 Unlimited Properties
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Receive Payments
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Handle Requests
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Tax Filing
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Billed Monthly
                                            </li>
                                        </ul>
                                        <div class="text-center pt-3">
                                            <a href="#" class="button">Select</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-5 mb-lg-0 border-0 shadow card card-highlight">
                                    <div class="card-status bg-primary"></div>
                                    <div className="card-body">
                                        <p className="text-center"><strong>33% discount</strong></p>
                                        <h2 class="text-base subtitle text-center text-primary py-3">Yearly Subscription</h2>
                                        <p class="text-muted text-center">
                                            <span class="h1 text-dark">$300</span>
                                            <span class="ml-2">/ per property</span>
                                        </p>
                                        <hr />
                                        <ul class="fa-ul my-4">
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-building mr-3"></i>
                                                </span>
                                                Unlimited Properties
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Receive Payments
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Handle Requests
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Tax Filing
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Billed Annually
                                            </li>
                                        </ul>
                                        <div class="text-center pt-3 pb-0">
                                            <a href="#" class="button">Select</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-5 mb-lg-0 border-0 shadow card">
                                    <div className="card-body">
                                        <h2 class="text-base subtitle text-center text-primary py-3">Enterprise</h2>
                                        <p class="text-muted text-center">
                                            <span class="h1 text-dark">Contact</span>
                                        </p>
                                        <hr />
                                        <ul class="fa-ul my-4">
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-building mr-3"></i>
                                                </span>
                                                 Unlimited Properties
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Receive Payments
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Handle Requests
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Tax Filing
                                            </li>
                                            <li class="mb-3 ">
                                                <span class="fa-li text-primary">
                                                    <i class="fas fa-check mr-3"></i>
                                                </span>
                                                Choice of Billing
                                            </li>
                                        </ul>
                                        <div class="text-center pt-3">
                                            <a href="#" class="button">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END Section 2 */}

                {/* Section 3 - Contact */}
                    <section className="py-6" id="contact">
                        <div className="container">
                            <h2 className="hero-heading text-center pb-5">
                                Contact Us
                            </h2>
                            <div className="row">
                                <div className="col-lg-6">
                                    <form>
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <div class="row" id="name">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="First name" />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Last name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email-address">Email address</label>
                                            <input type="email" class="form-control" id="email-address" placeholder="name@example.com" />
                                        </div>
                                        <div class="form-group">
                                            <label for="message">Message</label>
                                            <textarea class="form-control" id="message" rows="5" placeholder="Enter message..."></textarea>
                                        </div>
                                        <div>
                                            <button className="button">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-none d-lg-block col-lg-1"></div>
                                <div className="d-none d-lg-block col-lg-5">
                                    <img src={building} alt="placeholder image" className="main-image" />
                                </div>
                            </div>
                        </div>
                    </section>
                {/* END Section 3 */}

                {/* Footer */}
                <footer className="footer-bg">
                    <div className="container space">
                        <div className="row justify-content-md-between">
                           <div className="col-5 col-md-3 col-lg-2 order-lg-4 mb-7 mb-lg-0">
                                <h3 className="h6 text-white mb-3">Company</h3>
                                
                                <div className="list-group list-group-flush list-group-transparent">
                                    <a className="list-group-item list-group-item-action" href="#">Careers</a>
                                    <a className="list-group-item list-group-item-action" href="#">FAQ</a>
                                    <a className="list-group-item list-group-item-action" href="#">Legal</a>
                                    <a className="list-group-item list-group-item-action" href="#">Terms & Conditions</a>
                                </div>
                                
                            </div>
                            <div className="col-5 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
                                <h3 className="h6 text-white mb-3">Social</h3>
                                
                                <div className="list-group list-group-flush list-group-transparent">
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i className="fab fa-facebook-f min-width-3 text-center mr-2"></i> Facebook
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i className="fab fa-twitter min-width-3 text-center mr-1"></i> Twitter
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i class="fab fa-linkedin-in min-width-3 text-center mr-1"></i> Linked In
                                    </a>
                                    <a className="list-group-item list-group-item-action" href="#">
                                        <i class="fab fa-angellist min-width-3 text-center mr-1"></i> AngelList
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 order-lg-1 d-flex align-items-start flex-column">
                                <a href="#" className="my-5"><img src={logo} alt="logo" width="100px" /></a>
                                <p className="small text-muted">© 2020 Alula. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END Footer */}
            </React.Fragment>
        );
    }
}