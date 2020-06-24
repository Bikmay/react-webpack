import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../containers/HomePage';
import About from '../components/About';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
              <Router>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/" component={HomePage} />
                </Switch>
                </Router>
            
        );
    }
}

export default App;