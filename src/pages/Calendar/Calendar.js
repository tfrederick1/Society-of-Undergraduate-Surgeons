import React from 'react';
import { GOOGLE_API_KEY } from "../../config.js";
import Calendar from "@ericz1803/react-google-calendar";

let calendars = [
  {
    calendarId: "n3vtus5t2akehqaupb8n4aa2ts@group.calendar.google.com"
  }
];

export default class gCalendar extends React.Component {
  render() {
    return (
        <div>
            <div class="transbox">
                <h1>Event Calendar</h1>
            </div>
            <div class="flex-container-body">
              <div>
              <Calendar apiKey={GOOGLE_API_KEY} calendars={calendars} />
              </div>
            </div>
        </div>
    );
  }
}