let answers = ["PYTHON", "JAVASCRIPT", "TAILWIND", "REACT", "LARAVEL"];
let clues = [
"A versatile programming language named after a snake, loved for its simplicity.",
"The language that brings interactivity to websites, often abbreviated as JS.",
"A utility-first CSS framework for rapidly building custom designs.",
"A JavaScript library for building dynamic user interfaces, created by Facebook.",
"A PHP framework known for elegant syntax and robust web development tools."
];

var answer = "";
var answer_ = "";
var lives = 10;

function generate() {
let index = Math.floor(Math.random() * answers.length);
answer = answers[index];
answer_ = "_".repeat(answer.length);
lives = 10;
document.getElementById("clue").textContent = clues[index];
document.getElementById("word").textContent = answer_.split("").join(" ");
document.getElementById("lives").textContent = "Lives : " + lives;
document.getElementById("message").textContent = "";
document.getElementById("message").classList.remove("success", "error");
document.getElementById("letterInput").disabled = false;
document.getElementById("hangman-img").src = `images/${lives}.jpg`;
}

function checkAnswer() {
let input = document.getElementById("letterInput").value.toUpperCase();
document.getElementById("letterInput").value = "";
if (input.length !== 1 || !input.match(/[A-Z]/)) {
    alert("Please enter a valid letter.");
    return;
}
let correct = false;
let newAnswer = answer_.split("");
for (let i = 0; i < answer.length; i++) {
if (answer[i] === input && answer_[i] === "_") {
    newAnswer[i] = input;
    correct = true;
}
}
if (!correct) {
    lives--;
}
answer_ = newAnswer.join("");
document.getElementById("word").textContent = answer_.split("").join(" ");
document.getElementById("lives").textContent = "Lives : " + lives;
document.getElementById("hangman-img").src = `images/${lives}.jpg`;
checkWin();
}

function checkWin() {
const message = document.getElementById("message");
message.classList.remove("success", "error");
if (answer_ === answer) {
message.textContent = "Kamu Menang!";
message.classList.add("success");
document.getElementById("letterInput").disabled = true;
} else if (lives <= 0) {
message.textContent = "Kamu Kalah!";
message.classList.add("error");
document.getElementById("letterInput").disabled = true;
}
}

window.onload = generate;