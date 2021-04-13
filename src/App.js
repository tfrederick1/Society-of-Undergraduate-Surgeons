import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GOOGLE_API_KEY, CALENDAR_ID } from "./config.js";

import About_Us from './pages/About_Us/About_Us';
import Board_Members from './pages/About_Us/Board_Members';
import Sponsors from './pages/About_Us/Sponsors';
import Contact_Us from './pages/About_Us/Contact_Us';
import Home from './pages/Home/Home';
import Outreach from './pages/Outreach/Outreach';
import Calendar from './pages/Calendar/Calendar';

var gapi = window.gapi;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: moment().format("dd, Do MMMM, h:mm A"),
          events: [],
          isBusy: false,
          isEmpty: false,
          isLoading: true
        };
      }
    
      componentDidMount = () => {
        this.getEvents();
        setInterval(() => {
          this.tick();
        }, 1000);
        setInterval(() => {
          this.getEvents();
        }, 60000);
      };
    
      getEvents() {
        let that = this;
        function start() {
          gapi.client
            .init({
              apiKey: GOOGLE_API_KEY
            })
            .then(function() {
              return gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
                  .endOf("month")
                  .toISOString()}`
              });
            })
            .then(
              response => {
                let events = response.result.items;
                let sortedEvents = events.sort(function(a, b) {
                  return (
                    moment(b.start.dateTime).format("YYYYMMDD") -
                    moment(a.start.dateTime).format("YYYYMMDD")
                  );
                });
                if (events.length > 0) {
                  that.setState(
                    {
                      events: sortedEvents,
                      isLoading: false,
                      isEmpty: false
                    },
                    () => {
                      that.setStatus();
                    }
                  );
                } else {
                  that.setState({
                    isBusy: false,
                    isEmpty: true,
                    isLoading: false
                  });
                }
              },
              function(reason) {
                console.log(reason);
              }
            );
        }
        gapi.load("client", start);
      }
    
      tick = () => {
        let time = moment().format("dddd, Do MMMM, h:mm A");
        this.setState({
          time: time
        });
      };
    
      setStatus = () => {
        let now = moment();
        let events = this.state.events;
        for (var e = 0; e < events.length; e++) {
          var eventItem = events[e];
          if (
            moment(now).isBetween(
              moment(eventItem.start.dateTime),
              moment(eventItem.end.dateTime)
            )
          ) {
            this.setState({
              isBusy: true
            });
            return false;
          } else {
            this.setState({
              isBusy: false
            });
          }
        }
    };
    

    render() {
        const { time, events } = this.state;

        let eventsList = events.map(function(event) {
            return (
                <p
                    className="list-group-item"
                    target="_blank"
                    key={event.id}
                >
                    {event.summary}{" "}
                    <span className="badge">
                        {moment(event.start.dateTime).format("h:mm a")},{" "}
                        {moment(event.start.dateTime).format("MMMM Do")}{" "}
                    </span>
                </p>
            );
        });

        let emptyState = (
            <div className="empty">
                <h3>
                    No upcoming events for the month.
                </h3>
            </div>
        );

        let loadingState = (
            <div className="loading">
                <p>Loading...</p>
            </div>
        );

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
                        <Route path="/About-Us/Board-Members">
                            <Board_Members />
                        </Route>
                        <Route path='/About-Us/Sponsors'>
                            <Sponsors />
                        </Route>
                        <Route path='/About-Us/Contact-Us'>
                            <Contact_Us />
                        </Route>
                        <Route path="/About-Us">
                            <About_Us />
                        </Route>
                        <Route path="/Outreach">
                            <Outreach />
                        </Route>
                        <Route path="/Calendar">
                            <Calendar />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
    
                <div class='flex-container-event'>
                    <div>
                        <h1>Upcoming Events</h1>
                        <div className="list-group">
                            {this.state.isLoading && loadingState}
                            {events.length > 0 && eventsList}
                            {this.state.isEmpty && emptyState}
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default App;
