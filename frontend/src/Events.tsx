import { useEffect, useState } from 'react';
import { Event } from './types/event';

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    fetch('http://localhost:5116/api/Event')
      .then((response) => response.json())
      .then((data) => setEvents(data)); // Use data directly since it's already an array.
  }, []);

  return (
    <div>
      <h2>Events for the 11st Ward:</h2>
      <ul>
        {events.map((e) => (
          <div id="projectCard" className="card">
            <h3 className="card-title">{e.eventName}</h3>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <strong>Event Description: </strong>
                  {e.eventDesc}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Events;
