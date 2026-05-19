
using Microsoft.EntityFrameworkCore;
using ReactAppExp_5_11_26.Server.Models;

namespace ReactAppExp_5_11_26.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeManager> EmployeeManagers { get; set; }
    }
}
