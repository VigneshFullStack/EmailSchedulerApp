using System.ComponentModel.DataAnnotations;

namespace ScheduledEmail.Models
{
	public class Recipient
	{
		[Key]
		public int RecipientID { get; set; }

		[Required]
		[MaxLength(200)] 
		public string RecipientMail { get; set; }

		[Required]
		[EmailAddress]
		[MaxLength(200)] 
		public string RecipientName { get; set; }
	}
}
