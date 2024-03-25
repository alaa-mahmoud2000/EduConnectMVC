using System.ComponentModel.DataAnnotations;

namespace EduConnect.Models
{
    public class University
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
