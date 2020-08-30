import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/MainComponent'
import Home from './components/HomeComponent';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PODashboard from './components/PODashboardComponent';
import POProfile from './components/POProfileComponent';
import TenantDashboard from './components/TenantDashboardComponent';
import TenantProfile from './components/TenantProfileComponent';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
