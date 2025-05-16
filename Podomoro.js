let timer;
let secondsLeft;
let currentMode = 0;
let isRunning = false;

const durations = [25 * 60, 5 * 60];
const backgrounds = ["#894682", "#4988BB"];
const statusTexts = ["Focus pocus!", "Rest time!!"];

const timerDisplay = document.getElementById("timer");
const statusText = document.getElementById("status-text");
const controlBtn = document.getElementById("control-btn");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(secondsLeft);
  statusText.textContent = statusTexts[currentMode];
  document.body.style.backgroundColor = backgrounds[currentMode];
}

function startTimer() {
  isRunning = true;
  controlBtn.textContent = "RESET";

  timer = setInterval(() => {
    secondsLeft--;
    updateDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up!");
      controlBtn.textContent = "START";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  secondsLeft = durations[currentMode];
  controlBtn.textContent = "START";
  updateDisplay();
}

function switchMode(newMode) {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }

  currentMode = newMode;
  secondsLeft = durations[currentMode];
  controlBtn.textContent = "START";
  updateDisplay();
}

controlBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
  } else {
    resetTimer();
  }
});

// Initialize on load
switchMode(0);