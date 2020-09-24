import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

function App() {
    return (
        <div className='main'>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/create' exact>
                        <Create />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
