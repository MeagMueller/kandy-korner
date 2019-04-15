import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import CandyList from './Candy/CandyList'
import IndividualCandies from './Candy/IndividualCandies'
import Locations from './Locations/Locations'
import Employees from './Employees/Employees'

export default class ApplicationViews extends Component {
    
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Locations locations={this.state.locations} />
                }} />
                <Route path="Employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route path="candyTypes" render={(props) => {
                    return <CandyList candyTypes={this.state.candyTypes} />
                }} />
                <Route path="IndividualCandies" render={(props) => {
                    return <IndividualCandies candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }





}