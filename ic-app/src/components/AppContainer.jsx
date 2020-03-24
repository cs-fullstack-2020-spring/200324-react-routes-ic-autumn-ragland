import React, { Component } from 'react';
import DeveloperQuotes from './DeveloperQuotes'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/quotes">Quotes</Link>
                    <Route path="/quotes">
                        <DeveloperQuotes/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer