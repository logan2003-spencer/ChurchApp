import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component
import HomeLanding from "./components/HomeLanding";
import {useState} from "react";

export default function App() {
  return (
    <Router>
      <div className="pt-16"> {/* ✅ Push content down so it isn't covered by navbar */}
        <Navbar />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attendance/*" element={<Attendance />} />
          <Route path="/" element={<HomeLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Events() {
  return <h2>Events for the 1st Ward:</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function AddEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    orgName: "",
    detail: "",
    date: "",
    location: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted:", formData);
  };


  return (
  <>
  <h2>Add Event</h2>
  <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
      </label>
      <br /><br />

      <label>
        Organizer Name:
        <input type="email" name="orgName" value={formData.orgName} onChange={handleChange} />
      </label>
      <br /><br />

      <label>
        Event Details:
        <textarea  name="detail" value={formData.detail} onChange={handleChange} />
      </label>
      <br /><br />

      <label>
        Date & Time:
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <br /><br />

      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  
  </>
  );
}

function Attendance() {
  return (
    <div>
      <h2>Attendance for:</h2>
      <ul>
        <li>
          <Link to="Relief Society">Relief Society</Link>
        </li>
        <li>
          <Link to="Elders Quorum">Elders Quorum</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":organizationId" element={<AttendanceOrg />} />
        <Route path="" element={<h3>Please select an Organization.</h3>} />
      </Routes>
    </div>
  );
}

function AttendanceOrg() {
  let { organizationId } = useParams();
  return <h3>Attendance for {organizationId}:</h3>;
}
