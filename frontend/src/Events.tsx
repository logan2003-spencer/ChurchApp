import { useEffect, useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <div>
      <h2>Events for the 1st Ward:</h2>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Events;
