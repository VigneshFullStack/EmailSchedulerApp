using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScheduledEmail.Data;
using ScheduledEmail.Models;

namespace ScheduledEmail.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ScheduledEmailController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		public ScheduledEmailController(ApplicationDbContext context)
		{
			_context = context;
		}

		// GET: api/Emails
		[HttpGet]
		public async Task<ActionResult<IEnumerable<ScheduledEmails>>> GetEmails()
		{
			return await _context.ScheduledEmails.Include(x=>x.Recipient).ToListAsync();
		}

		// POST: api/Emails
		[HttpPost]
		public async Task<ActionResult<ScheduledEmails>> PostEmail(ScheduledEmails email)
		{
			_context.ScheduledEmails.Add(email);
			await _context.SaveChangesAsync();
			return email;
		}

		// PUT: api/Emails/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutEmail(int id, ScheduledEmails email)
		{
			if (id != email.ID)
			{
				return BadRequest();
			}

			_context.Entry(email).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!EmailExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// DELETE: api/Emails/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteEmail(int id)
		{
			var email = await _context.ScheduledEmails.FindAsync(id);
			if (email == null)
			{
				return NotFound();
			}

			_context.ScheduledEmails.Remove(email);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool EmailExists(int id)
		{
			return _context.ScheduledEmails.Any(e => e.ID == id);
		}
	}
}
