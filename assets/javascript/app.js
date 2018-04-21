$(document).ready(function() {
    $("#theForm").hide();
    $("#result-page").hide();
    
    // variables for later
    var number = 60;
    var intervalId;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;


// questions/answers
var q1 = {
    q: "Chicago has 77 neighborhoods.",
    answerChoices: ["True", "False"],
    // correct: "True",
    name: "question1",
    image: "assets/images/aerialview.jpg"
};

var q2 = {
    q: "Which of the following colors is not one of the El train lines?",
    answerChoices: ["Purple", "Green", "Red", "White"],
    // correct: "White",
    name: "question2",
    image: "assets/images/brownline.jpg"
}

var q3 = {
    q: "Northwestern University is located in which Chicago suburb?",
    answerChoices: ["Evanston", "Wilmette", "Skokie", "Mt Prospect"],
    // correct: "Evanston",
    name: "question3",
    image: "assets/images/northwestern.jpg"
}

var q4 = {
    q: "The Cloud Gate statue in downtown Chicago is nicknamed The Bean.",
    answerChoices: ["True", "False"],
    // correct: "True",
    name: "question4",
    image: "assets/images/the-bean.jpg"
}

var q5 = {
    q: "What is the tallest building in Chicago?",
    answerChoices: ["Hancock Tower", "Willis Tower, aka Sears Tower", "Aqua Tower", "Trump Tower"],
    // correct: "Willis Tower, aka Sears Tower",
    name: "question5",
    image: "assets/images/skyline.jpg"
}

var q6 = {
    q: "Chicago is located along Lake Superior.",
    answerChoices: ["True", "False"],
    // correct: "False",
    name: "question6",
    image: "assets/images/alongthelake.jpg"
}

var q7 = {
    q: "Lincoln Park Zoo is one of the few free-admission zoos in the United States.",
    answerChoices: ["True", "False"],
    // correct: "True",
    name: "question7",
    image: "assets/images/lincolnparkzoo.jpg"
}

var q8 = {
    q: "Former President Barack Obama lived in which Chicago neighborhood?",
    answerChoices: ["Rogers Park", "Hyde Park", "Jefferson Park", "Logan Square"],
    // correct: "Hyde Park",
    name: "question8",
    image: "assets/images/obamashouse.jpg"
}



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
    $("#start").on("click", run);
    $("#start").on("click", decrement);
    $("#submit").on("click", grade);
    $("#submit").on("click", done);
    $("#submit").on("click", displayResults);

    // to run the game
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        $("#theForm").show();
    }

    // function to decrease seconds in timer
    function decrement() {
        number--;
      //  Show the number in the #time tag.
        $("#time").html("<h2>" + "Time Remaining: " + number + "</h2>");
        if (number === 0) {
            $("#theForm").hide();
            grade();

            // results at end of game
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

    // function to add scores - tried a couple methods but neither worked :/
    function grade(event){
        event.preventDefault();
        for (var i = 0; i < questions.length; i++) {
            // var correctAnswer = questions[i].correct;
            // var questionName = questions[i].name;
            if ($("input[name=q1]:checked").val() === "correct"){
                right++; 
                } else {
                    wrong++;
                }
            // var selected = $('input[type="radio"][name=' + questionName + ']:checked').val();
            // if (selected === undefined) {
            //     noAnswer++;
            // } else if (selected === correctAnswer) {
            //     right++;
            // } else {
            //     wrong++;
            // }
        }
    }


    function done(event){
        event.preventDefault();
        $("#theForm").hide();
        $("#result-page").show();
        $("#result-page").html("<button id='game_over'>" + "Game Over" + "</button>");
        stop();
    }

    function displayResults(event){
        event.preventDefault();
        stop();
        $("#result-page").append("<h4 class='make-lower'>" + "<span>" + "correct answers: " + right + "</span>" + "</h4>");
        $("#result-page").append("<h4>" + "incorrect answers: " + wrong + "</h4>");
        $("#result-page").append("<h4>" + "missed questions: " + noAnswer+ "</h4>");
        if(right > 5){
            $("#result-page").append("<h2>" + "Awesome!" + "</h2>");

        } else {
            $("#result-page").append("<h2>" + "Better luck  next time!" + "</h2>");

        }

        $("#game_over").on("click", function(event){
            event.preventDefault();
            location.reload();
        });
    };

    // restart after game
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
