using AboutMe.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AboutMe.Controllers
{
    public class HomeController : Controller
    {
        // Home index page method
        public IActionResult Index()
        {
            return View();
        }

        // Get method for the grades page 
        [HttpGet("Grades")]
        public IActionResult Grades()
        {
            return View();
        }

        // Post method for the grades page
        [HttpPost("Grades")]
        public IActionResult Grades(GradesModel model)
        {
            return View();
        }
    }
}
