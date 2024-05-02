using Microsoft.EntityFrameworkCore;
using ScheduledEmail.Models;

namespace ScheduledEmail.Data
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

		public DbSet<ScheduledEmails> ScheduledEmails { get; set; }
		public DbSet<Recipient> Recipients { get; set; }
	}
}
