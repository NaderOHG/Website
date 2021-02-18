import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history'

import Widerruf from '../sections/Widerruf/Widerruf';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Widerruf" component={Widerruf} />
                </Switch>
            </Router>
        )
    }
}