/* This code will take the user's inputs and calculate their final grade */

$("#submitButton").click(function () {
    /* gather information from the document*/
    var assignments = $("#assignments");
    var groupProject = $("#groupProject");
    var quizzes = $("#quizzes");
    var exams = $("#exams");
    var intex = $("#intex");

    /* calculate the percentage for each category*/
    var assignmentsPct = assignments.val() * .5;
    var groupProjectPct = groupProject.val() * .1;
    var quizzesPct = quizzes.val() * .1;
    var examsPct = exams.val() * .2;
    var intexPct = intex.val() * .1;

    /* calculate total grade */
    var grade = assignmentsPct + groupProjectPct + quizzesPct + examsPct + intexPct;

    /* find the letter grade */
    var letter;

    if (grade >= 94) {
        letter = "A";
    }
    else if (grade >= 90) {
        letter = "A-";
    }
    else if (grade >= 87) {
        letter = "B+";
    }
    else if (grade >= 84) {
        letter = "B";
    }
    else if (grade >= 80) {
        letter = "B-";
    }
    else if (grade >= 77) {
        letter = "C+";
    }
    else if (grade >= 74) {
        letter = "C";
    }
    else if (grade >= 70) {
        letter = "C-";
    }
    else if (grade >= 67) {
        letter = "D+";
    }
    else if (grade >= 64) {
        letter = "D";
    }
    else if (grade >= 60) {
        letter = "D-";
    }
    else {
        letter = "E";
    }

    /* print out grade */
    alert("Final grade is " + grade + " which earns the grade of " + letter);
});