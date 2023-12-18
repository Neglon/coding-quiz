//variables targetting id's in the DOM
var startButton = document.getElementById('startQuiz');
var introEl = document.getElementById('intro');


//function to start the quiz
function startQuiz() {
    //hides the opening text and button
    introEl.setAttribute("class",  "hide");
    // to test that the button works on click
    // console.log("start quiz")

    


}





startButton.addEventListener("click", startQuiz);