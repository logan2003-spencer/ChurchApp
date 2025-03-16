"use client";

import React from 'react';
import StatusBar from '../components/StatusBar';
import NavigationBar from '../components/NavigationBar';
import EventCard from '../components/EventCard';
import { EventData } from '../../types';

const EventsPage: React.FC = () => {
  // Sample event data - in a real app, this would come from an API or props
  const events: EventData[] = [
    {
      name: "Event Name",
      dateTime: "Event Date and Time",
      location: "Event Location"
    },
    {
      name: "Event Name",
      dateTime: "Event Date and Time",
      location: "Event Location"
    },
    {
      name: "Event Name",
      dateTime: "Event Date and Time",
      location: "Event Location"
    },
    {
      name: "Event Name",
      dateTime: "Event Date and Time",
      location: "Event Location"
    }
  ];

  const handleBackClick = () => {
    console.log('Back button clicked');
    // Navigation logic would go here
  };

  const handleMenuClick = () => {
    console.log('Menu button clicked');
    // Menu opening logic would go here
  };

  const handleEditSignUp = (index: number) => {
    console.log(`Edit sign up for event ${index}`);
    // Edit sign up logic would go here
  };

  const handleSignUp = (index: number) => {
    console.log(`Sign up for event ${index}`);
    // Sign up logic would go here
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="mx-auto my-0 w-full min-h-screen bg-white max-w-[393px] max-md:max-w-[991px] max-sm:w-full max-sm:max-w-screen-sm">
        <header className="w-full top-[bar]">
          <StatusBar />
          <NavigationBar
            onBackClick={handleBackClick}
            onMenuClick={handleMenuClick}
          />
        </header>

        <section className="p-5">
          <h1 className="mx-0 my-10 text-3xl text-center text-black">
            Events for Unit Name
          </h1>

          <div className="flex flex-col gap-11 px-5 py-0 max-sm:px-2.5 max-sm:py-0">
            {events.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                onEditSignUp={() => handleEditSignUp(index)}
                onSignUp={() => handleSignUp(index)}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default EventsPage;
