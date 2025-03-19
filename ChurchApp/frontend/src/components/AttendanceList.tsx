import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AttendanceList() {
  const router = useRouter();
  const { className } = router.query; // Get class name from URL
  const [students, setStudents] = useState<
    { id: number; name: string; attended: boolean }[]
  >([]);

  // Simulated API Fetch (Replace this with your real API call later)
  useEffect(() => {
    if (className) {
      // Simulated API response - Replace with actual fetch API call
      const dummyData = {
        primary: [
          { id: 1, name: 'Alice', attended: false },
          { id: 2, name: 'Bob', attended: false },
        ],
        'sunday-school': [
          { id: 3, name: 'Charlie', attended: false },
          { id: 4, name: 'David', attended: false },
        ],
        'elders-quorum': [
          { id: 5, name: 'Elder Smith', attended: false },
          { id: 6, name: 'Elder Johnson', attended: false },
        ],
        'relief-society': [
          { id: 7, name: 'Sister Brown', attended: false },
          { id: 8, name: 'Sister Davis', attended: false },
        ],
      };

      // Set students based on the selected class name
      setStudents(dummyData[className as keyof typeof dummyData] || []);
    }
  }, [className]);

  // Handle checkbox toggle
  function toggleAttendance(id: number) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, attended: !student.attended }
          : student
      )
    );
  }

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {className ? className.replace('-', ' ').toUpperCase() : 'Loading...'}
      </h2>

      {students.length > 0 ? (
        <ul className="space-y-3">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex items-center justify-between p-2 border rounded-md"
            >
              <span className="text-lg">{student.name}</span>
              <input
                type="checkbox"
                checked={student.attended}
                onChange={() => toggleAttendance(student.id)}
                className="w-5 h-5"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No students found.</p>
      )}
    </div>
  );
}

export default AttendanceList;
