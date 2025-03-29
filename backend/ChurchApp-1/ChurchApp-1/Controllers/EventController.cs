using ChurchApp_1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChurchApp_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly AttendanceContext _context;

        public EventController(AttendanceContext temp)
        {
            _context = temp;
        }

        // GET: api/Event
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
                Console.Error.WriteLine($"Error fetching events: {ex.Message}");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // POST: api/Event
        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] Event newEvent)
        {
            if (newEvent == null)
            {
                return BadRequest("Event data is null.");
            }

            try
            {
                // Add the new event to the database
                await _context.Events.AddAsync(newEvent);
                await _context.SaveChangesAsync();

                // Return a success response with the generated EventId
                return CreatedAtAction(nameof(GetEvents), new { id = newEvent.EventId }, newEvent);
            }
            catch (Exception ex)
            {
                // Log the exception and return a 500 Internal Server Error
                Console.Error.WriteLine($"Error creating event: {ex.Message}");
                return StatusCode(500, "An error occurred while creating the event.");
            }
        }

        // DELETE: api/Event/{id}
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
