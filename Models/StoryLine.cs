using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Titles.Models
{
    public class StoryLine
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }
        
        public int TitleId { get; set; }
        public Title Title { get; set; }
    }
}