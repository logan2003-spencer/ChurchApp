import { useRouter } from 'next/router';

const classes = ['Primary', 'Sunday School', 'Elders Quorum', 'Relief Society'];

function AttendanceClasses() {
  const router = useRouter();

  function handleClassSelect(className: string) {
    // Navigate to a new page (e.g., `/attendance/[class]`)
    router.push(`/attendance/${className.toLowerCase().replace(' ', '-')}`);
  }

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-3 text-center">Select a Class</h2>
      <div className="space-y-3">
        {classes.map((className) => (
          <button
            key={className}
            onClick={() => handleClassSelect(className)}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {className}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AttendanceClasses;
