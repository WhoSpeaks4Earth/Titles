using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Titles.Models;
using Microsoft.EntityFrameworkCore;

namespace Titles.Controllers
{
    [Produces("application/json")]
    [Route("api")]
    public class ApiController : Controller
    {
        private readonly titlesContext _context;

        public ApiController(titlesContext context)
        {
            _context = context;
        }

        // GET: api/Title
        [HttpGet]
        [Route("Title")]
        public IEnumerable<Title> Get()
        {
            var titles = _context.Title.ToList();

            return titles;
        }

        // GET: api/Title/{id}
        [HttpGet("{id}")]
        [Route("Title/{id}")]
        public IActionResult Get(int id)
        {
            var details = _context.Title
                .SingleOrDefault(t => t.TitleId == id);
            
            if (details == null)
            {
                return NotFound();
            }
            return new ObjectResult(details);
        }

        // GET: api/Title/{id}
        [HttpGet("{id}")]
        [Route("Title/StoryLines/{id}")]
        public IActionResult GetStoryLines(int id)
        {

            var storylines = _context.StoryLine
                .Where(s => s.TitleId == id)
                .ToList();
            
            if (storylines == null)
            {
                return NotFound();
            }
            return new ObjectResult(storylines);
        }
    }
}
