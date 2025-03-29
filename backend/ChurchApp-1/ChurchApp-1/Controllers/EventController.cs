using ChurchApp_1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ChurchApp_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EventController : ControllerBase
    {
        private AttendanceContext _context;
        public EventController(AttendanceContext temp)
        {
            _context = temp;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            try
            {
                var events = await _context.Events
                    .Where(e => e.IsAttendance == false).ToListAsync();
                if (!events.Any())
                {
                    return NotFound("No events found in the database.");
                }
                return Ok(events);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var eventToDelete = await _context.Events.FindAsync(id);
            if (eventToDelete == null)
            {
                return NotFound($"Event with ID {id} not found.");
            }

            _context.Events.Remove(eventToDelete);
            await _context.SaveChangesAsync();

            return NoContent(); // 204 No Content means successful deletion
        }
    }
}
