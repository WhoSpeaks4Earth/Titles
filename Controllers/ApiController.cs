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
            return _context.Title;
        }

        [HttpGet("{id}")]
        [Route("Title/{id}")]
        public IActionResult Get(int id)
        {
            System.Console.WriteLine("GOT HERE!!!!!!!!!!!!!!");
            var item = _context.Title.FirstOrDefault(t => t.TitleId == id);

            
            System.Console.WriteLine(item);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}
