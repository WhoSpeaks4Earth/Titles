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
    [Route("api/v1")]
    public class ApiController : Controller
    {
        private readonly titlesContext _context;

        public ApiController(titlesContext context)
        {
            _context = context;
        }

        // GET: api/Titles
        [HttpGet]
        [Route("Titles")]
        public IEnumerable<Title> Get()
        {
            var titles = _context.Title.ToList();

            return titles;
        }

        // GET: api/Titles/{id}
        [HttpGet("{id}")]
        [Route("Titles/{id}")]
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

        // GET: api/Titles/{id}
        [HttpGet("{id}")]
        [Route("Titles/StoryLines/{id}")]
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
