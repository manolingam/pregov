import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";

import "./App.css";

function App() {
    return (
        <div className='main'>
            <h2>PreGov</h2>
            <p id='title-helper'>
                Know the impact of your governance decisions before you make
                them
            </p>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/create' exact>
                        <Create />
                    </Route>
                    <Route path='/create/:id' exact>
                        <Details />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
