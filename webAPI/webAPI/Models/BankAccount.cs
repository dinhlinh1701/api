using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class BankAccount
    {   
        [Key]
        public int AccountID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string AccountNumber { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string AccountHolder { get; set; }
        [Required]
        public string BankID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string IFSC { get; set; }

    }
}
