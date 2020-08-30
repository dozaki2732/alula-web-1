import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/dashboard.css'

class AddProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return(
            <React.Fragment>
                {/* Navigation Bar (back arrow)*/}

                {/* END Navigation Bar */}
                {/* Header */}
                <div className="container mt-5">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item">Add Property</li>
                    </ol>
                </div>
                {/* END Header */}
                {/* Properties */}
                <section id="property-table">
                    <div className="container">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex justify-content-between py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Properties</h6>
                                <a href="/add-property" className="text-gray-900"><i class="fas fa-plus mr-2"></i>Add Property</a>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className="text-gray-900">
                                                <th>Property</th>
                                                <th>Rental Rate</th>
                                                <th>Revenue</th>
                                                <th>Losses</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <div className="form-group">
                                                        <input 
                                                            name="property-address"
                                                            placeholder="Property Address..."
                                                            type="text"
                                                            className="form-control text-center"
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="form-group">
                                                        <input
                                                            name="rental-rate"
                                                            placeholder="Rental Rate..."
                                                            className="form-control text-center"
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="form-group">
                                                        <input
                                                            name="current-revenue"
                                                            placeholder="Current Revenue..."
                                                            className="form-control text-center"
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="form-group">
                                                        <input
                                                            name="current-loses"
                                                            placeholder="Current Losses..."
                                                            className="form-control text-center"
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="form-group">
                                                        <select className="form-control" required>
                                                            <option>
                                                                Leased
                                                            </option>
                                                            <option>
                                                                Vacant
                                                            </option>
                                                        </select>
                                                    </div>
                                                </th>
                                                <td className="pt-3-half">
                                                    <span class="table-remove">
                                                        <button className="del-prop my-2">Delete</button>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Properties */}

                {/* Save Changes Button */}
                <div className="container  mt-5">
                    <button className="button">Finished</button>
                </div>
                {/* END Save Changes Button */}
            </React.Fragment>
        );
    }
    
}

export default AddProperty;
    