import "./PersonList.css"
import React, { Component } from "react"
import axios from "axios";

export default class PersonList extends Component {

    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
        .catch(err => console.error('There was an error fetching the users!', err));
    }

    render() {
        return(
            <div style={{ padding: "15px" }}>
                <h1 className="page-title">User List</h1>

                {this.state.persons.map((p, index) => (
                    
                    <div key={index} className="user-card">
                        <div className="user-card-header">
                            {p.name.title} {p.name.first} {p.name.last} – {p.login.uuid || "N/A"}
                        </div>

                        <div className="user-card-body">
                            <div>
                                <img
                                    src={p.picture.large}
                                    alt="user's profile image"
                                    className="user-image"
                                />
                            </div>
                            <div className="user-info">
                                <span className="user-info-label">User Name:</span>
                                <span className="user-info-value">{p.login.username}</span>

                                <span className="user-info-label">Gender:</span>
                                <span className="user-info-value">{p.gender.toUpperCase()}</span>

                                <span className="user-info-label">Time Zone Description:</span>
                                <span className="user-info-value">{p.location.timezone.description}</span>

                                <span className="user-info-label">Address:</span>
                                <span className="user-info-value">
                                    {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.state}, {p.location.country} - {p.location.postcode}
                                </span>

                                <span className="user-info-label">Email:</span>
                                <span className="user-info-value">{p.email}</span>

                                <span className="user-info-label">Birth Date and Age:</span>
                                <span className="user-info-value">{p.dob.date} ({p.dob.age})</span>

                                <span className="user-info-label">Register Date:</span>
                                <span className="user-info-value">{p.registered.date}</span>

                                <span className="user-info-label">Phone #:</span>
                                <span className="user-info-value">{p.phone}</span>

                                <span className="user-info-label">Cell #:</span>
                                <span className="user-info-value">{p.cell}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

