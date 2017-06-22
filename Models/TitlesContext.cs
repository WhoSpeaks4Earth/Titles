using Microsoft.EntityFrameworkCore;

namespace Titles.Models
{
    public class titlesContext : DbContext
    {
        public titlesContext(DbContextOptions<titlesContext> options)
            : base(options) { }

        public titlesContext() { }

        public DbSet<Title> Title { get; set; }

        //public DbSet<StoryLine> StoryLine { get; set; }

        //public DbSet<Genre> Genre { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.Entity<Title>()
                .HasOne(t => t.StoryLine)
                .WithOne(s => s.Title)
                .HasForeignKey<StoryLine>(s => s.TitleId);


        //     modelBuilder.Entity<TitleGenre>()
        //         .HasKey(tg => new { tg.TitleId, tg.GenreId });

        //     modelBuilder.Entity<TitleGenre>()
        //         .HasOne(tg => tg.Title)
        //         .WithMany(t => t.TitleGenres)
        //         .HasForeignKey(tg => tg.TitleId);

        //     modelBuilder.Entity<TitleGenre>()
        //         .HasOne(tg => tg.Genre)
        //         .WithMany(g => g.TitleGenres)
        //         .HasForeignKey(tg => tg.GenreId);
        }
    }
}