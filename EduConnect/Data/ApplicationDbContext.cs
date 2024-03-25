using Microsoft.EntityFrameworkCore;

namespace EduConnect.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options)
        {
            
        }
    }
}
