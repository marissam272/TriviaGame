$(document).ready(function() {
    $("#theForm").hide();
    $("#result-page").hide();
    
    var number = 30;
    var intervalId;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;
    var count = 0;


// questions/answers
var q1 = {
    q: "Chicago has 77 neighborhoods.",
    answerChoices: ["True", "False"],
    correct: "True",
    name: "question1",
    image: "assets/images/aerialview.jpg"
};

var q2 = {
    q: "Which of the following colors is not one of the El train lines?",
    answerChoices: ["Purple", "Green", "Red", "White"],
    correct: "White",
    name: "question2",
    image: "assets/images/brownline.jpg"
}

var q3 = {
    q: "Northwestern University is located in which Chicago suburb?",
    answerChoices: ["Evanston", "Wilmette", "Skokie", "Mt Prospect"],
    correct: "Evanston",
    name: "question3",
    image: "assets/images/northwestern.jpg"
}

var q4 = {
    q: "The Cloud Gate statue in downtown Chicago is nicknamed The Bean.",
    answerChoices: ["True", "False"],
    correct: "True",
    name: "question4",
    image: "assets/images/the-bean.jpg"
}

var q5 = {
    q: "What is the tallest building in Chicago?",
    answerChoices: ["Hancock Tower", "Willis Tower, aka Sears Tower", "Aqua Tower", "Trump Tower"],
    correct: "Willis Tower, aka Sears Tower",
    name: "question5",
    image: "assets/images/skyline.jpg"
}

var q6 = {
    q: "Chicago is located along Lake Superior.",
    answerChoices: ["True", "False"],
    correct: "False",
    name: "question6",
    image: "assets/images/alongthelake.jpg"
}

var q7 = {
    q: "Lincoln Park Zoo is one of the few free-admission zoos in the United States.",
    answerChoices: ["True", "False"],
    correct: "True",
    name: "question7",
    image: "assets/images/lincolnparkzoo.jpg"
}

var q8 = {
    q: "Former President Barack Obama lived in which Chicago neighborhood?",
    answerChoices: ["Rogers Park", "Hyde Park", "Jefferson Park", "Logan Square"],
    correct: "Hyde Park",
    name: "question8",
    image: "assets/images/obamashouse.jpg"
}

var images = ["assets/images/aerialview.jpg", "assets/images/brownline.jpg", "assets/images/northwestern.jpg", "assets/images/the-bean.jpg", "assets/images/skyline.jpg", "assets/images/alongthelake.jpg", "assets/images/lincolnparkzoo.jpg", "assets/images/obamashouse.jpg"]


var questions = [q1, q2, q3, q4, q5, q6, q7, q8];
    //click events
    $("#start").on("click", run);
    $("#start").on("click", decrement);
    $("#next").on("click", );
    $("#submit").on("click", grade);
    $("#submit").on("click", done);
    $("#submit").on("click", displayResults);

    function displayImage() {
        $("#image-holder").html("<img src=" + images[count] + " width='200px'>");
      }

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        $("#next").show();
        // $("#theForm").show();
        for (var j = 0; j < questions.length; j++) {
            displayImage();
            function nextImage(displayImage) {
                //  TODO: Increment the count by 1.
                count++;
        }
    }


    //   function nextImage(displayImage) {
    //     //  TODO: Increment the count by 1.
    //     count++;

    function nextQuestion() {
        $("#question1").show;
        //  TODO: Increment the count by 1.
        count++;
      
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
            // var selected = $('input[type="radio"][name=' + questionName + ']:checked').val();
            if ($("input[name=q1]:checked").val() == "correct"){
            right++; 
            } else if (selected === correctAnswer) {
                noAnswer++;;
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
