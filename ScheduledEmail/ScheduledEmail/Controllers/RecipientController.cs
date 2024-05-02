using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScheduledEmail.Data;
using ScheduledEmail.Models;

namespace ScheduledEmail.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RecipientController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		public RecipientController(ApplicationDbContext context)
		{
			_context = context;
		}

		// GET: api/Emails
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Recipient>>> GetRecipients()
		{
			return await _context.Recipients.ToListAsync();
		}

		// POST: api/Emails
		[HttpPost]
		public async Task<ActionResult<Recipient>> PostRecipient(Recipient recipient)
		{
			_context.Recipients.Add(recipient);
			await _context.SaveChangesAsync();
			return recipient;
		}

		// PUT: api/Emails/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutRecipient(int id, Recipient recipient)
		{
			if (id != recipient.RecipientID)
			{
				return BadRequest();
			}

			_context.Entry(recipient).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!RecipientExists(id))
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
		public async Task<IActionResult> DeleteRecipient(int id)
		{
			var recipient = await _context.Recipients.FindAsync(id);
			if (recipient == null)
			{
				return NotFound();
			}

			_context.Recipients.Remove(recipient);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool RecipientExists(int id)
		{
			return _context.Recipients.Any(e => e.RecipientID == id);
		}
	}
}
