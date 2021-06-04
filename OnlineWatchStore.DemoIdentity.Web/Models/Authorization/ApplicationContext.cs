using Microsoft.EntityFrameworkCore;

namespace OnlineWatchStore.DemoIdentity.Web.Models.Authorization
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) 
            :base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            string adminRoleName = "admin";
            string userRoleName = "user";

            string adminName = "admin";
            string adminEmail = "admin@admin";
            string adminPassword = "admin";
 
            // добавляем роли
            Role adminRole = new Role { Id = 1, Name = adminRoleName };
            Role userRole = new Role { Id = 2, Name = userRoleName };
            User adminUser = new User { Id = 1, UserName = adminName, Email = adminEmail, PasswordHash = adminPassword, RoleId = adminRole.Id };
 
            modelBuilder.Entity<Role>().HasData(new Role[] { adminRole, userRole });
            modelBuilder.Entity<User>().HasData( new User[] { adminUser });
            base.OnModelCreating(modelBuilder);
        }
    }
}