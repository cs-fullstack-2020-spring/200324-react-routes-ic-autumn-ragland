import React, { Component } from 'react';
import DeveloperQuotes from './DeveloperQuotes'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"; // imports to use router
class AppContainer extends Component {
    // display title and links to home and quotes
    render() {
        return (
            <div>
                <h1>React Routes IC</h1>
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