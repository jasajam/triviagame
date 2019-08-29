$(document).ready(function() {
  // COUNT OF NUMBER OF WRONG, RIGHT AND UNANSWERED QUESTIONS
  var correct = 0;
  var wrong = 0;
  var unanswered = 0;

  // ALL QUIZ QUESTIONS
  var questions = [
    {
      question: "What is the capital of Angola?",
      answers: ["Tirana", "Luanda", "Andorra la Vella", "Canberra"],
      rightAnswer: "Luanda"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Bosnia and Herzegovina?",
      answers: ["Sarajevo", "Porto-Novo", "Belmopan", "Sofia"],
      rightAnswer: "Sarajevo"
      // rightAnswer:  0
    },
    {
      question: "What is the capital of Cyprus?",
      answers: ["Moroni", "Zagreb", "Nicosia", "Praia"],
      rightAnswer: "Nicosia"
      // rightAnswer: 2
    },
    {
      question: "What is the capital of Dominica?",
      answers: ["Santo Domingo", "La Paz", "Bogota", "Roseau"],
      rightAnswer: "Roseau"
      // rightAnswer: 3
    },
    {
      question: "What is the capital of East Timor (aka Timor-Leste)?",
      answers: ["Asmara", "Malabo", "Tallinn", "Dili"],
      rightAnswer: "Dili"
      // rightAnswer: 3
    },
    {
      question: "What is the capital of Fiji?",
      answers: ["San Salvador", "Suva", "Addis Ababa", "Helsinki"],
      rightAnswer: "Suva"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Georgia?",
      answers: ["Tbilisi", "Conakry", "Georgetown", "Banjul"],
      rightAnswer: "Tbilisi"
      // rightAnswer: 0
    },
    {
      question: "What is the capital of Honduras?",
      answers: ["Guatemala City", "Tegucigalpa", "Accra", "Paris"],
      rightAnswer: "Tegucigalpa"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Iceland?",
      answers: ["Copenhagen", "Reykjavik", "Prague", "Saint George's"],
      rightAnswer: "Reykjavik"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Jordan?",
      answers: ["Jakarta", "Tehran", "Baghdad", "Amman"],
      rightAnswer: "Amman"
      // rightAnswer: 3
    },
    {
      question: "What is the capital of Kyrgyzstan?",
      answers: ["Pristina", "Astana", "Bishkek", "Rome"],
      rightAnswer: "Bishkek"
      // rightAnswer: 2
    },
    {
      question: "What is the capital of Lesotho?",
      answers: ["Tripoli", "Riga", "Luxembourg", "Maseru"],
      rightAnswer: "Maseru"
      // rightAnswer: '
    },
    {
      question: "What is the capital of Mongolia?",
      answers: ["Naypyidaw", "Rabat", "Ulaanbaatar", "Palikir"],
      rightAnswer: "Ulaanbaatar"
      // rightAnswer: 2
    },
    {
      question: "What is the capital of Niger?",
      answers: ["Niamey", "Abuja", "Oslo", "Managua"],
      rightAnswer: "Niamey"
      // rightAnswer: 0
    },
    {
      question: "What is the capital of Oman?",
      answers: ["Majuro", "Male", "Kathmandu", "Muscat"],
      rightAnswer: "Muscat"
      // rightAnswer: 3
    },
    {
      question: "What is the capital of Paraguay?",
      answers: ["Lima", "Manila", "Port Moresby", "Asuncion"],
      rightAnswer: "Asuncion"
      // rightAnswer: 3
    },
    {
      question: "What is the capital of Qatar?",
      answers: ["Monaco", "Chisinau", "Doha", "Antananarivo"],
      rightAnswer: "Doha"
      // rightAnswer: 2
    },
    {
      question: "What is the capital of Romania?",
      answers: ["Valletta", "Bucharest", "Vilnius", "Vaduz"],
      rightAnswer: "Bucharest"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Suriname?",
      answers: ["Paramaribo", "Juba", "Freetown", "Sao Tome"],
      rightAnswer: "Paramaribo"
      // rightAnswer: 0
    },
    {
      question: "What is the capital of Turkey?",
      answers: ["Ashgabat", "Ankara", "Colombo", "Honiara"],
      rightAnswer: "Ankara"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Uruguay?",
      answers: ["Bern", "Victoria", "Montevideo", "Lome"],
      rightAnswer: "Montevideo"
      // rightAnswer: 2
    },
    {
      question: "What is the capital of Vietnam?",
      answers: ["Hanoi", "Port-Vila", "Tunis", "Bangkok"],
      rightAnswer: "Hanoi"
      // rightAnswer: 0
    },
    {
      question: "What is the capital of Yemen?",
      answers: ["Tashkent", "Sanaa", "Abu Dhabi", "Khartoum"],
      rightAnswer: "Sanaa"
      // rightAnswer: 1
    },
    {
      question: "What is the capital of Zambia?",
      answers: ["Caracas", "Lusaka", "Kampala", "Nuku'alofa"],
      rightAnswer: "Lusaka"
      // rightAnswer: 1
    }
  ];

  // FUNCTION FOR STARTING QUIZ WHEN LANDING PAGE START BUTTON IS CLICKED
  $("#start").click(startQuiz);

  function startQuiz() {
    showQuestions();
  }

  // FUNCTION TO SHOW ALL QUESTIONS TO VISITOR
  function showQuestions() {
    // clear the container on the page
    $(".wrapper").html("");

    // show them how much time remains
    var timeDisplay = $("<div>");

    $(".wrapper").append(timeDisplay);
    timeDisplay.html(
      "<p>Time Remaining (in seconds): <span id=timeLeft></span></p>"
    );

    // start counting down one second after ideal time (since a second elapses before this appears)
    decrementTime(89);

    // where questions actually get shown
    var quizDisplay = $("<div>");

    var quiz = showPromptsAndChoices(questions);

    $(quizDisplay).append(quiz);

    $(".wrapper").append(quizDisplay);
  }

  // FUNCTION TO DECREMENT TIME
  // called above
  // if the time reaches 0, show the user the results
  function decrementTime(time) {
    var int = setInterval(function() {
      $("#timeLeft").text(time);

      if (time === 0) {
        clearInterval(int);
        showResults();
      } else {
        time--;
      }
    }, 1000);
  }

  // function to show the user every single prompt and all the possible answers for that prompt
  function showPromptsAndChoices(array) {
    var quiz = $("<form>");

    for (var i = 0; i < array.length; i++) {
      var promptContent = array[i].question;
      var choicesContent = array[i].answers;

      var prompt = $("<p>").text(promptContent);
      $(prompt).addClass("question");
      prompt.attr("data-question", i);
      $(quiz).append(prompt);
      choicesContent.forEach((element, index) => {
        var choice = $("<input>");
        $(choice).attr("name", "Q-" + i);
        $(choice).attr("id", "A-" + index);
        $(choice).attr("type", "radio");
        var choiceLabel = $("<label>").text(element);
        $(choiceLabel).attr("for", "A-" + index);
        $(choice).attr("value", element);
        quiz.append(choice);
        quiz.append(choiceLabel);
        quiz.append("<br>");
      });

      $(quiz).append("<br>");
    }

    return quiz;
  }

  // FUNCTION TO DETERMINE HOW MANY CORRECT, INCORRECT AND UNANSWERED QUESTIONS THERE ARE
  // FROM THE VISITOR'S TAKE
  function assessResults() {
    for (var i = 0; i < questions.length; i++) {
      var current = $("input[name='Q-" + i + "']:checked").val();
      console.log(current, "vs", questions[i].rightAnswer);

      if (current === questions[i].rightAnswer) {
        correct++;
      } else if (current === undefined) {
        unanswered++;
      } else {
        wrong++;
      }
    }

    console.log(
      "Correct answers: " + correct,
      ", Unanswered questions: " + unanswered,
      "Wrong answers: ",
      wrong
    );
  }

  // FUNCTION TO SHOW THE FINAL TALLY OF RIGHT, WRONG AND UNANSWERED QUESTIONS TO THE USER
  function showResults() {
    assessResults();

    var resultsDisplay = $(".wrapper").html("<div>");

    $(resultsDisplay).append("<h2> Here's how you did");

    $(resultsDisplay).append("<p>Number of correct answers:" + correct);

    $(resultsDisplay).append("<p>Number of incorrect answers:" + wrong);

    $(resultsDisplay).append("<p>Number of unanswered questions:" + unanswered);
  }

  // A FUNCTION USED JUST ONCE TO DETERMINE QUIZ ANSWERS
  function answerDecider() {
    var answerIndexes = [];

    for (var i = 0; i < questions.length; i++) {
      var randomIndex = Math.floor(Math.random() * (4 - 0));
      answerIndexes.push(randomIndex);
    }

    console.log(answerIndexes);
    return answerIndexes;
  }
  // ONE TIME CALL OF ANSWER DECIDER TO GET THE FOLLOWING OUTPUT
  answerDecider();
  // [1, 0, 2, 3, 3, 1, 0, 1, 1, 3, 2, 3, 2, 0, 3, 3, 2, 1, 0, 1, 2, 0, 1, 1]
  // answers sourced from: https://www.thoughtco.com/capitals-of-every-independent-country-1434452
});
