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
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}

