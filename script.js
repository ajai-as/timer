let countdownElement = document.querySelector("#countdownE h1"); // ✅ fixes the issue

let timeLeft = 9;

function updateCountdown() {
  countdownElement.textContent = timeLeft;
  timeLeft = timeLeft - 1;

  if (timeLeft < 0) {
    timeLeft = 10;
  }
}

let timer = setInterval(updateCountdown, 1000);
