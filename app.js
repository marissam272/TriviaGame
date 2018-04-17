$(document).ready(function() {
    $("#theForm").hide();
    $("#result-page").hide();
    
    var number = 50;
    var intervalId;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;


// questions/answers
var question1 = {
    question: "Chicago has 77 neighborhoods.",
    answerOptions: ["True", "False"],
    correctAnswer: "True",
    name: "q1"
};

var question2 = {
    question: "Which of the following colors is not one of the El train lines?",
    answerOptions: ["Purple", "Green", "Red", "White"],
    correctAnswer: "White",
    name: "q2"
}

var question3 = {
    question: "Northwestern University is located in which Chicago suburb?",
    answerOptions: ["Evanston", "Wilmette", "Skokie", "Mt Prospect"],
    correctAnswer: "Evanston",
    name: "q3"
}

var question4 = {
    question: "The Cloud Gate statue in downtown Chicago is nicknamed The Bean.",
    answerOptions: ["True", "False"],
    correctAnswer: "True",
    name: "q4"
}

var question5 = {
    question: "What is the tallest building in Chicago?",
    answerOptions: ["Hancock Tower", "Willis Tower, aka Sears Tower", "Aqua Tower", "Trump Tower"],
    correctAnswer: "Willis Tower, aka Sears Tower",
    name: "q5"
}

var question6 = {
    question: "Chicago is located along Lake Superior.",
    answerOptions: ["True", "False"],
    correctAnswer: "False",
    name: "q6"
}

var question7 = {
    question: "Lincoln Park Zoo is one of the few free-admission zoos in the United States.",
    answerOptions: ["True", "False"],
    correctAnswer: "True",
    name: "q7"
}

var question8 = {
    question: "Former President Barack Obama lived in which Chicago neighborhood?",
    answerOptions: ["Rogers Park", "Hyde Park", "Jefferson Park", "Logan Square"],
    correctAnswer: "Hyde Park",
    name: "q8"
}

console.log(question1);
console.log(question2.question);

// player hits start
// a question pops up 
// below the question are answer options
// each question is timed for 30 seconds
// each option needs to have the abiity to click on it
// record user guess/click
// if user guess equals correct answer, then show "correct" and answer, image
// if not correct answer, show not correct, correct answer, image
// correct answer is displayed for 10 seconds
// when time is up, move on to next question
// need to use setInterval, timer, slideshow
// start game using slideshow activity
// pop up quesiton using slide show activity
// timer on each question using simple timer activity
// look at crystal collector for recording answer
// when answer clicked, have correct answer put into div
// user clicks submit when they are done selecting
// use if/else for correct/not correct
// use simple timer activity for tmer on answer display




// when the user clicks the start button the game starts
// $("#start").on("click", playTrivia);

var questions = [q1, q2, q3, q4, q5, q6, q7, q8];
    //click events
    $("#start").on("click", playTrivia);
    $("#start").on("click", decrement);
    $("#submit").on("click", grade);
    $("#submit").on("click", done);
    $("#submit").on("click", displayResults);

    function playTrivia() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        $("#theForm").show();
    }

    function decrement() {
        number--;
      //  Show the number in the #time tag.
        $("#time").html("<h2>" + "Time Remaining: " + number + "</h2>");
        if (number === 0) {
            $("#theForm").hide();
            grade();

            displayResults(event);
            event.preventDefault();
            $("#result-page").show();
            $("#result-page").prepend("<button id='game_over'>" + "Game Over" + "</button>");
            stop(); //  ...run the stop function.
            $("#game_over").on("click", function(){
            location.reload();
            });
        }
    }

    function grade(event){
        event.preventDefault();
        for (var i = 0; i < questions.length; i++) {
            var correctAnswer = questions[i].correct;
            var questionName = questions[i].name;
            var selected = $('input[type="radio"][name=' + questionName + ']:checked').val();
            if (selected === undefined) {
                noAnswer++;
            } else if (selected === correctAnswer) {
                right++;
            } else {
                wrong++;
            }
        }
    }


    function done(event){
        event.preventDefault();
        $("#theForm").hide();
        $("#result-page").show();
        $("#result-page").html("<button id='game_over'>" + "Game Over" + "</button>");
        //if desired throw in a pause
        // $('#yes-audio').trigger("pause");
        stop();
    }

    function displayResults(event){
        event.preventDefault();
        stop();
        $("#result-page").append("<h4 class='make-lower'>" + "<span>" + "correct answers: " + right + "</span>" + "</h4>");
        $("#result-page").append("<h4>" + "incorrect answers: " + wrong + "</h4>");
        $("#result-page").append("<h4>" + "missed questions: " + noAnswer+ "</h4>");
        if(right > 3){
            $("#result-page").append("<h2>" + "You are a champ" + "</h2>");
            $("#result-page").append("<img src='assets/images/mario.jpeg'>");

        } else {
            $("#result-page").append("<h2>" + "Take a left and get me to my destination" + "</h2>");
            $("#result-page").append("<img src='assets/images/pig.jpeg'>");

        }

        $("#game_over").on("click", function(event){
            event.preventDefault();
            location.reload();
        });
    };

    function reload(){
        var number = 30;
        $("#theForm").hide();
        $("#result-page").hide();
        var intervalId;
        var right = 0;
        var wrong = 0;
        var noAnswer = 0;
    }

    $("#game_over").on("click", function(event){
        event.preventDefault();
        console.log("hello");
        location.reload();
    });

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        // $("#result-page").empty();
    }
});
