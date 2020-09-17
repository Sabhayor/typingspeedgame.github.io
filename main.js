// Variables declaration
var word;
var randNum;
var randWord;
var inputWord;
var score;
var countDownTimer;
var playing = false;
word = [
  "social",
  "landscape",
  "has",
  "evolved",
  "quite",
  "live",
  "video",
  "develop",
  "into",
  "exciting",
  "way",
  "interact",
  "with",
  "users",
  "real",
  "time",
  "through",
  "Facebook",
  "Instagram",
  "Twitter",
  "feature",
  "saw",
  "polling",
  "emerge",
  "from",
  "almost",
  "every",
  "network",
  "allowing",
  "gain",
  "valuable",
  "feedback",
  "from",
  "audiences",
  "also",
  "tech",
  "virtual",
  "augmented",
  "reality",
  "media",
  "marketing",
];

/*
functions declaration
1. generateWord
2. startTimer
3. clearTimer
4. show
5. hide
6. timeoff
*/

//generate word function
function generateWord() {
  randNum = Math.floor(Math.random() * word.length);
  randWord = word[randNum];
  document.getElementById("screen").innerText = randWord;
}

//timer function
function startTimer() {
  timer = setInterval(function () {
    --countDownTimer;
    show("timer");
    document.getElementById("timerValue").innerText = countDownTimer;
    if (countDownTimer == 50) {
      clearTimer();
      show("gameOverBanner");
      document.getElementById("gameOverBanner").innerHTML =
        "<p style='font-size: 40px'>Game over!</p> <p style='font-size: 40px'>Your score is: " + score + "</p>";
      clearInput();
      document.getElementById("myInput").disabled = true;
    }
  }, 1000);
}

//clear timer function
function clearTimer() {
  clearInterval(timer);
}

//show function
function show(id) {
  document.getElementById(id).style.display = "block";
}

//hide function
function hide(id) {
  document.getElementById(id).style.display = "none";
}

//timeout function
function timeoff(id) {
  setTimeout(function () {
    hide(id);
  }, 1000);
}

function clearInput() {
  document.getElementById("myInput").value = "";
}

//before clicking on start buttons
document.getElementById("myInput").disabled = true;

//when clicked on start button
document.getElementById("startButton").onclick = function () {
  //check if playing
  if (playing == false) {
    // start playing
    playing = true;
    document.getElementById("myInput").disabled = false;
    countDownTimer = 60;
    startTimer();
    score = 0;
    generateWord();
    document.getElementById("myInput").onkeyup = function () {
      inputWord = document.getElementById("myInput").value;
      if (inputWord == randWord) {
        generateWord();
        show("correct");
        timeoff("correct");
        ++score;
        document.getElementById("myScore").innerText = score;
        clearInput();
      } else if (
        inputWord.length == randWord.length ||
        !inputWord == randWord
      ) {
        show("wrong");
        timeoff("wrong");
        clearInput();
      }
    };

    this.innerText = "Reset";
  } else {
    location.reload();
  }
};
