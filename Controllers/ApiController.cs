using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Titles.Models;

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
            var titles = _context.Title;
            System.Console.WriteLine("CHECKING");
            System.Console.WriteLine(titles);

            return _context.Title;
        }

        // GET: api/Title/{id}
        [HttpGet("{id}")]
        [Route("Title/{id}")]
        public IActionResult Get(int id)
        {
            var item = _context.Title.FirstOrDefault(t => t.TitleId == id);
            
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}
