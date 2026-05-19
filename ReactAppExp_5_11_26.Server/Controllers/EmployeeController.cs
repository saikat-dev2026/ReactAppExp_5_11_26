using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAppExp_5_11_26.Server.Data;
using ReactAppExp_5_11_26.Server.Models;

namespace ReactAppExp_5_11_26.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class EmployeeController :ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployee()
        {
            var data = await _context.Employees.AsNoTracking().ToListAsync();
            return Ok(data);
        }
        
        [HttpGet("getEmployeeBydeptId/{dept?}")]
        public async Task<IActionResult> getEmployeeBydeptId(string? dept)
        {
            List<Employee> data = new List<Employee>();
            if(dept==null)
            {
                data =await _context.Employees.AsNoTracking().ToListAsync();
            }
            else
            {
                data =await _context.Employees.Where(x => x.Department == dept).AsNoTracking().ToListAsync();
            }
            return Ok(data);
        }

    }
}
