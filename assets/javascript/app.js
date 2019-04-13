$(document).ready(function() {

var correct = 0;
var wrong = 0;
var unanswered = 0;
var questionIndex = 0;

var questions = [
  {
    question: "Question0",
    answers: ['A0', 'A1', 'A2', 'A3'],
    rightAnswer: 'A3'
  },
  {
    question: 'Question1',
    answers: ['A0', 'A1', 'A2', 'A3'],
    rightAnswer: 'A1'
  },
  {
    question: 'Question2',
    answers: ['A0', 'A1', 'A2', 'A3'],
    rightAnswer: 'A0'
  },
  {
    question: 'Question3',
    answers: ['A0', 'A1', 'A2', 'A3'],
    rightAnswer: 'A0'
  }
];

var qTimer = 30;


var questionInterval;

$("#start").click(startQuiz);

function showQuestions() {
    
    var questionDisplay = $(".wrapper").html("<div>");
    var timeDisplay = $(questionDisplay).append("<div>");

    // TIMER
    // my timer needs to count down - it is not currently - and display this on the screen
        //after getting it to count down, I'd probably want to format it 
            // this way it could show minutes and seconds
    questionInterval = setInterval(function(qTimer) {
        qTimer--;
        $(timeDisplay).html("<p>Time Remaining: " + qTimer);
    }, 1000);

    

    for(var i = questionIndex; questionIndex < questions.length; questionIndex++) {
        var questionContent = questions[questionIndex];
        
        $(questionDisplay).append("<h2>" + questionContent.question);

        var multipleChoices = showMultipleChoices(questions.answers);

        $(questionDisplay).append(multipleChoices);
        
    }
}

function questionTimer() {
    qTimer--;
    console.log(qTimer);
     return qTimer;
    // var formatted = timeFormater(qTimer);

    // console.log(formatted);

    // return formatted;
}
    
    

function showResults() {

    var resultsDisplay = $(".wrapper").html("<div>");

    $(resultsDisplay).append("<h2> Here's how you did");

    $(resultsDisplay).append("<p>Number of correct answers:" + correct);

    $(resultsDisplay).append("<p>Number of incorrect answers:" + wrong);

    $(resultsDisplay).append("<p>Number of unanswered:" + unanswered);

}



function showMultipleChoices() {

    var questionContent = questions[questionIndex];
    var answerChoices = $("<ul>");
    
    questionContent.answers.forEach(function(element) {
        var choice = $('<li>').text(element);
        answerChoices.append(choice);
    });

    return answerChoices;
};

function startQuiz() {

    showQuestions();

}

});

// radio button click listener function needed to see what answer the user picks

// I need logic to assess the users answers 
    // if they were right, the correct answer count goes up
        // the unanswered count goes down
    // if they were wrong, the wrong answer count would go up 
        //  the unanswered count would also go down

//I would make sure my showResults() function was called when either:
    // the all questions were answered OR the time ran out

// at the end i would of course add actual content to my game and style it

