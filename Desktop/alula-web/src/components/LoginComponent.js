import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-color.svg";
import signInImage from "../images/signin.svg";
import { v4 as getUuid } from "uuid";
import hash from "object-hash";

// CAN SEE FULLNAME, EMAIL, PASSWORD AND CONFIRM PASSWORD IN ADDRESS BAR ** MUST FIX //

class TenantLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: "",
      passwordError: "",
      hasEmailError: false,
      hasPasswordError: false,
    };
  }

  async setEmailState(emailInput) {
    const loweredCasedEmailInput = emailInput.toLowerCase();
    //eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput === "") {
      this.setState({
        emailError: "Please enter your email address",
        hasEmailError: true,
      });
    } //changing the state from empty string to string of error message
    else if (emailRegex.test(loweredCasedEmailInput) === false) {
      this.setState({
        emailError: "Please enter a valid email address",
        hasEmailError: true,
      });
    } else {
      this.setState({ emailError: "", hasEmailError: false }); //if it passes both tests, set state back to empty string and indiciate no email error (false)
    }
  }

  async setPasswordState(passwordInput, emailInput) {
    if (passwordInput === "") {
      this.setState({
        passwordError: "Please create a password.",
        hasPasswordError: true,
      });
    } else {
      this.setState({ passwordError: "", hasPasswordError: false });
    }
  }

  async validateAndLogUser() {
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("password-input").value;
    await this.setEmailState(emailInput);
    await this.setPasswordState(passwordInput, emailInput);
    if (
      this.state.hasEmailError === false &&
      this.state.hasPasswordError === false
    ) {
      console.log("created user object for POST", user);
      //mimic api response
      axios
        .get("mock-data")
        .then((res) => {
          const currentUser = res.data;
          console.log(currentUser);
          this.props.dispatch({
            type: actions.UPDATE_CURRENT_USER,
            payload: res.data,
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      this.props.history.push("/home-page");
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Navigation Bar (back arrow)*/}
        <nav>
          <Link to="/home" className="link">
            <button className="nav-link mt-3 ml-5 back-btn">
              <i class="fas fa-arrow-left mr-2"></i>Back
            </button>
          </Link>
          <div className="container d-flex justify-content-center mb-5">
            <Link to="/home">
              <img src={logo} width="100px" />
            </Link>
          </div>
        </nav>
        {/* END Navigation Bar */}
        {/* Login Form */}
        <section className="pt-3">
          <div className="container">
            <h2 className="hero-heading text-center pb-5">Login</h2>
            <div className="row">
              <div className="d-none d-lg-block col-lg-4">
                <img src={signInImage} width="400px" />
              </div>
              <div className="d-none d-lg-block col-lg-1"></div>
              <div className="col-12 col-lg-7">
                <div className="container">
                  <form className="form-signin">
                    <div class="form-group">
                      <label for="email-address">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email-address"
                        placeholder="name@example.com"
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group mb-4">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter Password..."
                      />
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="remember-me"
                      />
                      <label class="form-check-label" for="remember-me">
                        Remember Me
                      </label>
                    </div>
                    <div className="text-center my-4">
                      <Link to="/user-select" className="link">
                        Need an Account? Sign Up
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="button">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END Login Form */}
        {/* Footer */}
        <div classNameName="container">
          <navbar>
            <p className="ml-5 mt-5 mb-3 text-muted">
              © 2020 Alula. All rights reserved.
            </p>
          </navbar>
        </div>
        {/* END Footer */}
      </React.Fragment>
    );
  }
}

export default TenantLogin;
