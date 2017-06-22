using Microsoft.EntityFrameworkCore;

namespace Titles.Models
{
    public class titlesContext : DbContext
    {
        public titlesContext(DbContextOptions<titlesContext> options)
            : base(options) { }

        public titlesContext() { }

        public DbSet<Title> Title { get; set; }
    }
}