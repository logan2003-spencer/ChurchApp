import './App.css';
import SignUp from "./EventSignUp";  // Update the path if needed

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import HomeLanding from './components/HomeLanding';

export default function App() {
  return (
    <Router>
      <div className="pt-16">
        {' '}
        {/* ✅ Push content down so it isn't covered by navbar */}
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
  return (
    <div>
      <h2>Add Event</h2>
      <SignUp />
    </div>
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
