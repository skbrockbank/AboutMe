using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AboutMe.Models
{
    public class GradesModel
    {
        [Range(0, 100)]
        [Required]
        public double assignments { get; set; }

        [Range(0, 100)]
        [Required]
        public double groupProject { get; set; }

        [Range(0, 100)]
        [Required]
        public double quizzes { get; set; }

        [Range(0, 100)]
        [Required]
        public double exams { get; set; }

        [Range(0, 100)]
        [Required]
        public double intex { get; set; }


    }
}
