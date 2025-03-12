import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Navbar from "./navbar"; // Import Navbar component

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
          <Route path="/" element={<Home />} />
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
  return <h2>Add an Event</h2>;
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
