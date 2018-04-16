// pseudocode:
// 1. create list of trivia questions with multiple choice and/or true/false answers
// 2. set up game as object
// 3. make questions "slides" like in slideshow activity
// 4. make timer for each question
// 5. replace question with answer
    // if correct, say "correct with maybe an image"
    // if not correct, say "the correct answer is _ and show image"
// 6. make on clicks that when the answer is clicked either the correct or not correct result sohwss
// 7. set up game to move on to next question after maybe 6 seconds or something
// 8. make empty divs to push quesitons to with each click
// 9. get user guess

//trying to put everything in an object. the function can be called at the end to run the whole game.
function playTrivia() {


// put trivia questions in an array as objects    
var triviaQuestions = [
    {question: "True or False: Chicago has 77 neighborhoods.", answer: "True"},
    {question: "True or False: Purple is one of the El train line colors.", answer: "True"},
    {question: "True or False: Northwestern University is located in Wilmette.", answer: "False"},
    {question: "True or False: The Cloud Gate statue is nicknamed The Bean.", answer: "True"},
    {question: "True or False: The Hancock Tower is the tallest building in Chicago.", answer: "False"},
    {question: "True or False: Chicago is located along Lake Superior.", answer: "False"},
    {question: "True or False: Lincoln Park Zoo is one of the few free-admission zoos in the United States.", answer: "True"},
    {question: "True or False: Former President Barack Obama lived in Rogers Park.", answer: "False"}
];

// this variable will hold the setInterval when we start the game
var showQuestion;

// this variable will show what the answer is
var showAnswer;

// this variable will hold what the user selects
var userGuess; 

// Count will keep track of the index of the currently displaying question.
var count = 0;

// when the user clicks the start button the playTrivia function will be called
$("#start").on("click", playTrivia);


function displayQuestion () {
    $("#image-holder").html(question[count]);

    //one of these will show the answer when the user clicks the radio button
    $("#radio").on("click", showAnswer); 

    ///or

    $("#radio").html(showAnswer);

    setTimeout(displayQuestion, 30000);

  }
  
  function nextQuestion() {
    count++;
    $("#image-holder").html(answer[count]);

    setTimeout(displayQuestion, 10000);


};
