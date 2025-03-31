using ChurchApp_1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ChurchApp_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private AttendanceContext _context;
        public UserController(AttendanceContext temp)
        {
            _context = temp;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            try
            {
                var users = await _context.Users.ToListAsync();
                if (!users.Any())
                {
                    return NotFound("No users found in the database.");
                }
                return Ok(users);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while retrieving users");
            }
        }

        [HttpGet("by-organization/{orgName}")]
        public async Task<ActionResult<IEnumerable<object>>> GetUsersByOrganization(string orgName)
        {
            try
            {
                var users = await _context.Users
                    .Include(u => u.Organization)
                    .Where(u => u.Organization.OrganizationName.ToLower() == orgName.Replace("-", " ").ToLower())
                    .Select(u => new {
                        id = u.UserId,
                        name = u.FirstName + " " + u.LastName
                    })
                    .ToListAsync();

                if (!users.Any())
                {
                    return NotFound("No users found for this organization.");
                }

                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while retrieving users by organization.");
            }
        }

     {
        private readonly AttendanceContext _context;
        public AttendanceController(AttendanceContext context)
        {
            _context = context;
        }
        // POST: api/Attendance
        [HttpPost]
        public async Task<ActionResult<AttendanceStatus>> CreateAttendance([FromBody] AttendanceStatus attendance)
        {
            if (attendance == null)
            {
                return BadRequest("Attendance data is invalid.");
            }
            // Add the new attendance record to the database
            _context.AttendanceStatuses.Add(attendance);
            await _context.SaveChangesAsync();
            // Return the created attendance record
            return CreatedAtAction(nameof(GetAttendanceById), new { id = attendance.Id }, attendance);
        }
        // You should also have a GET method to retrieve attendance by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<AttendanceStatus>> GetAttendanceById(int id)
        {
            var attendance = await _context.AttendanceStatuses.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }
            return Ok(attendance);
        }
    }
    }
}