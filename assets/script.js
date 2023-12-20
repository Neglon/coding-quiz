//variables targetting id's in the DOM
var startButton = document.getElementById('startQuiz');
var introEl = document.getElementById('intro');
var timerEL = document.getElementById('timer');
var questionsEl = document.getElementById('questions-and-answers');
//moved answersEl to the global scope for the eventListener
var answersEl = document.getElementById('answerButtons');

//variables
//object array for questions, answers abd correct answer
var questions = [
    {
        askQuestion: "Commonly used data types DO NOT include",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts",
    },
    {
        askQuestion: "The condition in an if/else statement is enclosed with __",
        answers: ["quotes", "braces", "parentheses", "brackets"],
        correct: "parentheses",
    },
    {
        askQuestion: "Arrays in Javascript can be used to store __",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above",
    },
    {
        askQuestion: "String values must be enclosed within __ when being assigned to variables",
        answers: ["quotes", "braces", "brackets", "parentheses"],
        correct: "quotes",
    },
    {
        askQuestion: "A very useful tool used in development and debugging for printing content to the debugger is",
        answers: ["Javascript", "terminal/bash", "console.log", "for loops"],
        correct: "console.log",
    }
];

var questionsIndex = 0;



var time = 100;
//setting timeInterval variable to global scobe so that it can be accessed in multiple functions
var timeInterval;

//function to start the quiz
function startQuiz() {
    //hides the opening text and button
    introEl.setAttribute("class",  "hide");
    // to test that the button works on click
    // console.log("start quiz")

    timeInterval = setInterval(timer, 1000);
    //removes the hide class so that the showquestions function can start printing the info
    questionsEl.removeAttribute('class');
    
    showQuestions();

}

//function to show questions
function showQuestions() {
    //creating a variable to target the questions andswers and correct of the current question
    var currentQuestion = questions[questionsIndex];
    var askEl = document.getElementById('ask');
    //prints the current question
    askEl.textContent = currentQuestion.askQuestion;
    console.log(currentQuestion.answers.length);

    //clears out any old answer buttons, without this, the previous buttons dont go away
    answersEl.innerHTML = '';

    for (i = 0; i < currentQuestion.answers.length; i++) {
    //console logging that this iterates through the answers of the current question
    // console.log(currentQuestion.answers[i]); update, it does
    
    var button = document.createElement('button');
    //variable to pick out an answer inside the array of answers within the object array
    var answer = currentQuestion.answers[i];
    //sets internal data had to change this to value to make it readable in check().
    button.setAttribute('value', answer);
    //sets id=button for css formatting of the buttons
    button.setAttribute('id', 'button');
    //appends the button element to the element defined by the var answersEl
    answersEl.appendChild(button);
    //gives the button the text of the answer
    button.textContent = answer;
    //logs for testing the for loop is working correctly (had i <=currentQuestion.answers.length and this was prodcuing an additonal unwanted button)
    // console.log("button" + i );
    // console.log(currentQuestion.answers.length)
    }
}

function check(event){
    var checkAnswer = event.target;
    //use an if statement to stop making clicks off of the buttons from activating the below code
    if (!checkAnswer.matches('#button')) {
        return;
    }
    console.log(checkAnswer.value);
    if (checkAnswer.value !== questions[questionsIndex].correct) {
        time = time - 15;
    }
    console.log(checkAnswer.value);
    //if correct increase index by one to cylce to next questions set
    questionsIndex++

    /*if/else statement if time is 0 or the index variable is equal to the length of the 
    questions array meaning no more questions to ask it ends the quiz, otherwise it runs the function
    to show the questions again, moving to the next question*/
    if (time <= 0 || questionsIndex === questions.length) {
        endQuiz();
    } else {
        showQuestions();
    }

}


//function for the timer countdown
function timer() {
    if (time <= 0){
        clearInterval(timeInterval);
        //seems below code isnt necessary as i messed around with commenting them in and out  will leave for now
        // time = 0;
        // timerEL.textContent = time;
        return;
    }
    
    time--;
    timerEL.textContent = time;
    
}

//funtion to end the quiz
function endQuiz() {
    clearInterval(timeInterval);

}



startButton.addEventListener("click", startQuiz);
answersEl.addEventListener("click", check);
