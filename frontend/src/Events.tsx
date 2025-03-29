import { useEffect, useState } from 'react';
import { Event } from './types/event';

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    fetch('http://localhost:5116/api/Event')
      .then((response) => response.json())
      .then((data) => setEvents(data)); // Use data directly since it's already an array.
  }, []);


  const handleDelete = (eventId: number) => {
    setEvents((prevEvents) => prevEvents.filter((e) => e.eventId !== eventId)); // Remove from state immediately
  
    fetch(`http://localhost:5116/api/Event/${eventId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete event");
        }
        console.log("Event deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        // (Optional) Re-add the event if the request failed
      });
  };
  

  return (
    <div>
      <br />
      <br />
      <h2>Events for the 11st Ward:</h2>
      {events.map((e) => (
        <div
          key={e.eventId}
          style={{
            alignSelf: 'stretch',
            height: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              padding: '10px',
              background: 'rgba(49, 125, 166, 0.18)',
              borderRadius: 8,
            }}
          >
            <div
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: 2,
                wordWrap: 'break-word',
              }}
            >
              <strong>Event Name: </strong> <br />{e.eventName}
            </div>
            <div
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: 2,
                wordWrap: 'break-word',
              }}
            >
              <strong>Event Description:</strong> {e.eventDesc}
            </div>
            <div
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: 2,
                wordWrap: 'break-word',
              }}
            >
              {(() => {
                const start = new Date(e.eventStart);
                const end = new Date(e.eventEnd);
                const dateOptions: Intl.DateTimeFormatOptions = {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                };
                const timeOptions: Intl.DateTimeFormatOptions = {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                };

                const startDateStr = start.toLocaleDateString(
                  'en-US',
                  dateOptions
                );
                const startTimeStr = start.toLocaleTimeString(
                  'en-US',
                  timeOptions
                );
                const endTimeStr = end.toLocaleTimeString('en-US', timeOptions);

                return (
                  <>
                    {startDateStr} {startTimeStr} to{' '}
                    {endTimeStr}
                  </>
                );
              })()}{' '}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                background: '#317DA6',
                color: 'white',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
              }}
            >
              Edit Sign Up
            </button>
            <button
              style={{
                background: '#317DA6',
                color: 'white',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
              }}
            >
              Sign Up
            </button>
          </div>
          <button
    onClick={() => handleDelete(e.eventId)} // DELETE EVENT on Click
    style={{
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      padding: '10px',
      borderRadius: '8px',
    }}
  >
    Delete
  </button>
        </div>

      ))}
    </div>
  );
}
export default Events;
