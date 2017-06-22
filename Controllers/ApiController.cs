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
    }
}
