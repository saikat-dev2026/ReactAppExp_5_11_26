using System.ComponentModel.DataAnnotations;
namespace ReactAppExp_5_11_26.Server.Models
{
    public class Employee
    {
        public int id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public decimal Salary { get; set; }

    }
    
}
