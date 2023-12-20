var clearButton = document.getElementById('clear');
var backButton = document.getElementById('backButton');

/*needed to create a seperate js file for the printing of the high scores
the main js file was having errors when trying to append to the ordered list
best i could find was the best way was to have multiple js files because js doesnt traverse
the dom well over different html files at the same time*/


function showScores() {
    /*variable that checks local storage for highScores and parses that info into an array
    if there isnt anything than an empty array is created*/
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    /*the sort method can sort arrays, setting the parameters as (a ,b)
    is short hand for highscores[index], then using the .method after a and b
    targeting score, this method will compare scores. subtracting b fomr a 
    will set up scores in decending order*/
    highScores.sort(function (a, b){
        return b.score - a.score;
    })

    /*this loop takes the highscore object array and iterates through listing the initials and 
    scores now that they've been sorted*/
    for (var i = 0; i < highScores.length; i++) {
        var listEl = document.createElement('li');
        listEl.textContent = highScores[i].initials + ' - ' + highScores[i].score;
        var orderedListEl = document.getElementById('all-scores');
        orderedListEl.appendChild(listEl);  
    }
} 

// this clears the local storage of all high scores then reloads the page
function clear() {
    localStorage.removeItem('highScores');
    location.reload();
}

function back() {
    location.href = 'index.html';
    // console.log("back press");
}

clearButton.addEventListener("click", clear);

//calls the showScores function to list the high scores
showScores();

backButton.addEventListener("click", back)