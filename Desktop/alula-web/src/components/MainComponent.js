import React, { Component } from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Contact from './ContactComponent';
import PODashboard from './PODashboardComponent';
import POProfile from './POProfileComponent';
import TenantDashboard from './TenantDashboardComponent';
import TenantProfile from './TenantProfileComponent';
import UserSelect from './UserSelectComponent'
import AddProperty from './AddProperty';
import AddServiceRequest from './AddServiceRequest';
import Onboarding from './OnboardingComponent';


import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {

    render() {
        return(
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Route path="/dashboard" component={PODashboard} />
                <Route path="/profile" component={POProfile} />
                <Route path="/tenant" component={TenantDashboard} />
                <Route path="/tenant-profile" component={TenantProfile} />
                <Route path="/user-select" component={UserSelect} />
                <Route path="/add-property" component={AddProperty} />
                <Route path="/service-request" component={AddServiceRequest} />
                <Route path="/onboarding" component={Onboarding} />
                <Redirect to="/home" />
            </Switch>
        );
    }
}

export default Main;