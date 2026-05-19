using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAppExp_5_11_26.Server.Data;
using ReactAppExp_5_11_26.Server.Models;

namespace ReactAppExp_5_11_26.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeManagerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeManagerController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployeeManager(EmployeeManager employeeManager)
        {
            _context.EmployeeManagers.Add(employeeManager);
            await _context.SaveChangesAsync();
            return Ok(employeeManager);
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployeeManager()
        {
            var data = await _context.EmployeeManagers.AsNoTracking().ToListAsync();
            return Ok(data);
        }

        [HttpGet("getManager")]
        public async Task<IActionResult> Manager()
        {
            var data =await _context.EmployeeManagers.Select(e => new { e.id, e.Name, e.Department }).AsNoTracking().ToListAsync();
            return Ok(data);
        }
    }
}
