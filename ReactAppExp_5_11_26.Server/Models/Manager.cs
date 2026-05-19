using System.ComponentModel.DataAnnotations;

namespace ReactAppExp_5_11_26.Server.Models
{
    public class Manager
    {
        public int id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
    }
}
