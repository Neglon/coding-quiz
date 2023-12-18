//variables targetting id's in the DOM
var startButton = document.getElementById('startQuiz');
var introEl = document.getElementById('intro');
var timerEL = document.getElementById('timer');

//variables
var time = 10;
//setting timeInterval variable to gobal scobe so that it can be accessed in multiple functions
var timeInterval;

//function to start the quiz
function startQuiz() {
    //hides the opening text and button
    introEl.setAttribute("class",  "hide");
    // to test that the button works on click
    // console.log("start quiz")

    timeInterval = setInterval(timer, 1000);




}

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



startButton.addEventListener("click", startQuiz);