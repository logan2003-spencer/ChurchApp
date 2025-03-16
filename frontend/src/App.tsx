"use client";
import React from "react";
import Login from "./assets/views/login";
import EventsPage from "./assets/views/EventPage";

const App: React.FC = () => {
  // Default view is the Login page for appearance purposes
  return (
    <div className="App">
      {/* Show the Login UI */}
      <Login />
    </div>
  );
};

export default App;
