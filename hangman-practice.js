//need array for dog breeds plus pictures to match breed
//need random mathfunction to select random breed with matching picture
//need word guess array for letters guessed
//wins and losses counter
//startgame function that sets everythign to zero/blank and initiates random breed
//reset function 


var dogBreeds=[
    {word: "basenji",
    image: "./assets/images/basenji.jpg"},

    {word: "dalmation", 
    image:"./assets/images/dalmation.jpeg" },

    {word:"boxer", 
    image: "./assets/images/boxer.jpg"},

    {word: "greyhound",
    image: "./assets/images/greyhound.jpg"},

    {word: "vizsla",
    image: "./assets/images/vizsla.jpg"},

    {word: "beagle",
    image: "./assets/images/beagle.jpg"},

    {word: "akita",
    image: "./assets/images/akita.jpg"}, 

    {word: "saluki", 
    image: "./assets/images/saluki.jpeg"},

    {word: "borzoi",
    image: "./assets/images/borzoi.jpg"},

    {word: "newfoundland",
    image: "./assets/images/newfoundland.jpeg"},

    {word: "collie",
    image: "./assets/images/collie.jpg"}, 

    {word: "pug",
    image: "./assets/images/pug.jpg"},

    {word: "maltese",
    image: "./assets/images/maltese.jpeg"},

    {word: "samoyed",
    image: "./assets/images/samoyed.jpg"},
]


var losses = 0;
var wins = 0; 
var wordArray = [];
var wrongLettersGuessed =[];
guessesLeft = 10;

var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// var randomBreedChosen =dogBreeds[Math.random(Math.floor()*dogBreeds.length)];
// console.log(randomBreedChosen);
// //select random word from array
// var dogChosen = dogBreeds[randomBreedChosen].word;
// console.log(dogChosen);
// //select matching image to word
// var dogImage = dogBreeds[randomBreedChosen].image;
// console.log(dogImage);

// //shows how many letters are left to guess 
// var lettersRemaining=dogChosen.length;
// console.log(lettersRemaining);

function startGame() {
    losses = 0; 
    $("#losses").text("Losses: " + losses)
    wins = 0;
    $("#wins").text("Wins: " + wins)

    guessesLeft=10;
    displayGuessesLeft()

    //leaves guessed letters blank
   wrongLettersGuessed=[];

   var randomBreedChosen =Math.random(Math.floor()*dogBreeds.length);
    console.log(randomBreedChosen);
    //select random word from array
    var dogChosen = dogBreeds[randomBreedChosen].word;
    console.log(dogChosen);
    //select matching image to word
    var dogImage = dogBreeds[randomBreedChosen].image;
    console.log(dogImage);

    
   var lettersRemaining=dogChosen.length;
   console.log(lettersRemaining);

   displayCurrentWord();

    displayImage();
    
}

//setting up clicking on start button to start game 
$(document).on("click", "#id-start", function() {
    startGame();
    document.getElementById("id-start").textContent="Reset";//once game starts button changes to "reset"
    document.getElementById("id-start").id = "reset";
});

//function reset to reset the rounds
function reset () {
    guessesLeft=10;
    displayGuessesLeft();
    
    lettersGuessed=[];

    var randomBreedChosen =Math.random(Math.floor()*dogBreeds.length);
    console.log(randomBreedChosen);
    //select random word from array
    var dogChosen = dogBreeds[randomBreedChosen].word;
    console.log(dogChosen);
    //select matching image to word
    var dogImage = dogBreeds[randomBreedChosen].image;
    console.log(dogImage);

    //shows how many letters are left to guess 
    var lettersRemaining=dogChosen.length;
    console.log(lettersRemaining);

    displayCurrentWord();


    displayImage();
}

$(document).on("click", "#reset", function() {
    reset();
})


//defining functions 
function displayGuessesLeft () {
    $("#guesses-left").textContent="Guesses Left: " + guessesLeft;
}

function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#word-spaces");
    currentWordDisplay.textContent= wordArray.join(" ");}

function displayImage () {
    var pictureDisplay=document.querySelector("#dog-picture");
    pictureDisplay.src=dogImage;
}

function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guesses-made");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}
 function displayAnswer () {
     var revealAnswerDisplay = document.querySelector("#word-spaces");
     revealAnswerDisplay.textContent= randomBreedChosen.toUpperCase();
 }


document.onkeyup= function (event){
    var userGuess=event.key;

}
function letterCheck(event) {
    if (alphabetArray.indexOf(event.key) > -1) { 
        correctGuessCheck(event);
    }
}

function correctGuessCheck(event) {
    if (dogChosen.indexOf(event.key)>-1) {
        correctGuess(event)
    }
    else {
        incorrectGuess(event);
    }
}

function correctGuess () {
    if (wordArray.indexOf(event.key.toUpperCase()<0)) {
        addCorrectLetter(event);
}
}

function addCorrectLetter(event) {
    for (var i=0; i<dogChosen.length; i++) {
        if (event.key === dogChosen[i]) {
            wordArray[i] = event.key.toUpperCase();
            displayCurrentWord();
            lettersRemaining--;
        }
        if (lettersRemaining===0) {
            wins++
            $("#wins").textContent("Wins: "+ wins);
        }
    }
}

function incorrectGuess(event) {
    if (wrongLettersGuessed.indexOf(event.key.toUpperCase()<0)) {
        addIncorrectLetter(event);
    }
}

function addIncorrectLetter(event) {
    wrongLettersGuessed.push(event.key.toUpperCase());
    displayGuessesMade();
    guessesLeft--;
    $("#guesses-left").textContent("Guesses Left: " + guessesLeft)

    if (guessesLeft===0) {
        displayAnswer();

    }}