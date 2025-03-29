using ChurchApp_1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChurchApp_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private AttendanceContext _context;

        public OrganizationController(AttendanceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetOrganizations()
        {
            try
            {
                var organizations = await _context.Organizations
                    .Select(o => new {
                        organization_id = o.OrganizationId,
                        organization_name = o.OrganizationName
                    })
                    .ToListAsync();

                return Ok(organizations);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error retrieving organizations.");
            }
        }
    }
}