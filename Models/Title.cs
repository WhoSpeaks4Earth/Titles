using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace Titles.Models
{
    public class Title
    {
        [Key]
        public int TitleId { get; set; }

        public string TitleName { get; set; }

        public string TitleNameSortable { get; set; }

        public int TitleTypeId { get; set; }

        public int ReleaseYear { get; set; }

        public DateTime ProcessedDateTimeUTC { get; set; }
    }
}