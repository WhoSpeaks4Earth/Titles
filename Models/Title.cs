using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Titles.Models
{
    public class Title
    {
        [Key]
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public int ReleaseYear { get; set; }
        public DateTime ProcessedDateTimeUTC { get; set; }

        public virtual ICollection<StoryLine> StoryLine { get; set; }
        public virtual ICollection<TitleGenre> TitleGenres { get; set; }
    }
}