import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import About_Us from './components/About_Us/About_Us';
import Board_Members from './components/About_Us/Board_Members';
import Sponsors from './components/About_Us/Sponsors';
import Contact_Us from './components/About_Us/Contact_Us';
import Home from './components/Home/Home';
import Outreach from './components/Outreach/Outreach';
import Calendar from './components/Calendar/Calendar';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div class="flex-container-header">
                    <div class="wrap">
                        <h1> Gators Society of Undergraduate Surgeons </h1>
                        <h2> -Add text about mission statement. The rest of this is just filler to test what happens when it needs to wrap.-</h2>
                    </div>
                </div>

                <div class="flex-container-bar">
                    <div class="flex-container-helper">
                        <div class="dropdown">
                            <button class="drop-button">
                                <a href="/">Home</a>
                            </button>
                        </div>
                        <div class="dropdown">
                            <button class="drop-button">
                                <a href="/About-Us">About Us</a>
                            </button>
                            <div class="dropdown-content">
                                <a href="/About-Us/Board-Members">Board Members</a>
                                <a href="/About-Us/Sponsors">Sponsors</a>
                                <a href="/About-Us/Contact-Us">Contact Us</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="drop-button">
                                <a href="/Outreach">Outreach</a>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Placeholder 1</a>
                                <a href="#">Placeholder 2</a>
                                <a href="#">Placeholder 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="drop-button">
                                <a href="/Calendar">Calendar</a>
                            </button>
                        </div>
                    </div>
                </div>

                <BrowserRouter>
                    <Switch>
                        <Route path='/About-Us/Board-Members'>
                            <Board_Members />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                        <Route path='/About-Us/Sponsors'>
                            <Sponsors />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                        <Route path='/About-Us/Contact-Us'>
                            <Contact_Us />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                        <Route path="/About-Us">
                            <About_Us />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                        <Route path="/Outreach">
                            <Outreach />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                        <Route path='/Calendar'>
                            <Calendar />
                        </Route>
                        <Route path="/">
                            <Home />
                            <div class='flex-container-event'>
                                <div>
                                    <h1>Upcoming Events</h1>
                                    <p>This is just a test to figure out what this looks like. Figure out how to pull information from google calendar.</p>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;