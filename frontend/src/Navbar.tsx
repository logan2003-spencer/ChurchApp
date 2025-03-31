import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // ✅ Import CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Church Event Manager</h1>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        {isOpen ? <X size={20} /> : <Menu size={25} />}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link to="/attendance" onClick={() => setIsOpen(false)}>
            Attendance
          </Link>
          <Link to="/addEvent" onClick={() => setIsOpen(false)}>
            Add Event
          </Link>
          {/* <Link to="/login" onClick={() => setIsOpen(false)}>
            Ward/Stake Login
          </Link>
          <Link to="/eventSignUp" onClick={() => setIsOpen(false)}>
            Sign Up TEMPORARY
          </Link> */}
        </div>
      )}
    </nav>
  );
}
