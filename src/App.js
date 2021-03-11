import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About_Us from './components/About_Us/About_Us';
import Home from './components/Home/Home';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About-Us">About Us</a></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/About-Us">
                        <About_Us />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

/*
<div className="wrapper">
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <About_Us />
            </Route>
        </Switch>
    </BrowserRouter>
</div>
*/