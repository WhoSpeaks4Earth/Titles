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
            var titles = _context.Title
                //.Include(t => t.StoryLine)
                .ToList();

            return titles;
        }

        // GET: api/Title/{id}
        [HttpGet("{id}")]
        [Route("Title/{id}")]
        public IActionResult Get(int id)
        {
            var title = _context.Title
                .Where(t => t.TitleId == id)
                .Include(t => t.StoryLine);
            
            if (title == null)
            {
                return NotFound();
            }
            return new ObjectResult(title);
        }
    }
}
