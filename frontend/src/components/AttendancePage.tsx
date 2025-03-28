import { useEffect, useState } from 'react';

import { User } from '../types/User';
import { Organization } from '../types/Organization';

// Extended User type to include organization
interface AttendanceUser extends User {
  attended: boolean;
  orgName: string;
}

function AttendancePage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [selectedOrg, setSelectedOrg] = useState<string>('');
  const [students, setStudents] = useState<AttendanceUser[]>([]);
  const [loadingOrgs, setLoadingOrgs] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(false);

  // Fetch organizations on page load
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await fetch('http://localhost:5116/api/organization');
        const data = await res.json();
        setOrganizations(data);
      } catch (err) {
        console.error('Error fetching organizations:', err);
      } finally {
        setLoadingOrgs(false);
      }
    };
    fetchOrganizations();
  }, []);

  // Fetch users whenever an organization is selected
  useEffect(() => {
    if (selectedOrg) {
      const fetchUsers = async () => {
        try {
          setLoadingUsers(true);
          const res = await fetch(
            `http://localhost:5116/api/user/by-organization/${selectedOrg}`
          );
          const data = await res.json();
          
          // Retrieve saved attendance for this organization
          const savedAttendance = JSON.parse(
            localStorage.getItem(`attendance-${selectedOrg}`) || '[]'
          );

          // Map users with saved attendance status
          const withAttendance = data.map((user: any) => {
            const savedUserAttendance = savedAttendance.find(
              (savedUser: AttendanceUser) => savedUser.id === user.id
            );
            
            return {
              id: user.id,
              name: user.name,
              attended: savedUserAttendance ? savedUserAttendance.attended : false,
              orgName: selectedOrg
            };
          });

          setStudents(withAttendance);
        } catch (err) {
          console.error('Error fetching users:', err);
          setStudents([]);
        } finally {
          setLoadingUsers(false);
        }
      };
      fetchUsers();
    }
  }, [selectedOrg]);

  // Toggle the attendance checkbox and save to local storage
  const toggleAttendance = (id: number) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, attended: !student.attended }
        : student
    );
    
    setStudents(updatedStudents);

    // Save attendance to local storage for this organization
    localStorage.setItem(
      `attendance-${selectedOrg}`, 
      JSON.stringify(updatedStudents)
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Attendance Tracker
      </h1>

      {loadingOrgs ? (
        <p className="text-center text-gray-500">Loading organizations...</p>
      ) : (
        <div className="mb-6 w-full max-w-md">
          <label htmlFor="organization" className="block font-semibold mb-2">
            Select a class/organization:
          </label>
          <select
            id="organization"
            style={{ width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}
            value={selectedOrg}
            onChange={(e) => setSelectedOrg(e.target.value)}
          >
            <option value="">-- Select an organization --</option>
            {organizations.map((org) => (
              <option
                key={org.organization_id}
                value={org.organization_name.toLowerCase().replace(/\s+/g, '-')}
              >
                {org.organization_name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedOrg && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {selectedOrg.replace('-', ' ').toUpperCase()}
          </h2>

          {loadingUsers ? (
            <p className="text-center text-gray-500">Loading users...</p>
          ) : students.length > 0 ? (
            <div className="w-full max-w-md">
              <ul
                className="space-y-3"
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                {students.map((student) => (
                  <li
                    key={student.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      background: 'rgba(49, 125, 166, 0.18)'
                    }}
                  >
                    <div style={{ width: '24px', flexShrink: 0 }}>
                      <input
                        type="checkbox"
                        checked={student.attended}
                        onChange={() => toggleAttendance(student.id)}
                        style={{ width: '20px', height: '20px' }}
                      />
                    </div>
                    <div
                      style={{
                        textAlign: 'left',
                        flex: 1,
                        color: 'black',
                        fontSize: '20px',
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        lineHeight: 2,
                        wordWrap: 'break-word'
                      }}
                    >
                      {student.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center text-gray-500">No students found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default AttendancePage;