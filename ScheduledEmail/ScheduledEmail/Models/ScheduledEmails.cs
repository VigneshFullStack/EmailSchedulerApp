using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ScheduledEmail.Models
{
	public class ScheduledEmails
	{
		[Key]
		public int ID { get; set; }

		[Required]
		[MaxLength(200)]
		public string SenderName { get; set; }

		[Required]
		[EmailAddress]
		[MaxLength(200)]
		public string SenderEmail { get; set; }

		[ForeignKey("Recipient")]
		public int RecipientID { get; set; }

		[MaxLength(400)]
		public string Subject { get; set; }

		[MaxLength(200)]
		public string Status { get; set; }

		public DateTime CreatedTime { get; set; }

		public DateTime ScheduledTime { get; set; }

		[MaxLength]
		public string BodyContent { get; set; }

		public bool IsMailSent { get; set; }

		public bool IsActive { get; set; }

		// Navigation property
		public virtual Recipient Recipient { get; set; }
	}
}
