import { useEffect, useState } from 'react';
import { Event } from './types/event';
import { ActionButton } from './components/ActionButton';
import styles from './components/HomeLanding.module.css';

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
          throw new Error('Failed to delete event');
        }
        console.log('Event deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
        // (Optional) Re-add the event if the request failed
      });
  };

  return (
    <div>
      <br />
      <br />
      <h2>Events for the 11th Ward:</h2>
      {events.map((e) => (
        <div
          key={e.eventId}
          style={{
            alignSelf: 'stretch',
            height: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
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
              <strong>Event Name: </strong> <br />
              {e.eventName}
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

                const endDateStr = start.toLocaleDateString(
                  'en-US',
                  dateOptions
                );

                return (
                  <>
                    {startDateStr} {startTimeStr} to {endDateStr} {endTimeStr}
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
            {/* <ActionButton
              label="Edit Event"
              className={styles.btnText}
              to="/"
            /> */}
            {/* <button
              style={{
                background: '#317DA6',
                color: 'white',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                gap: '10px',
              }}
            >
              Sign Up
            </button> */}
          </div>
          <button
            onClick={() => handleDelete(e.eventId)} // DELETE EVENT on Click
            style={{
              backgroundColor: '#317da6',
              borderRadius: '8px',
              alignSelf: 'stretch',
              gap: '10px',
              minHeight: '45px',
              width: '100%',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              marginTop: '10pt',
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
