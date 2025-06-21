let countdownElement = document.querySelector("#countdownE h1"); // ✅ fixes the issue

let timeLeft = 999;

function updateCountdown() {
  countdownElement.textContent = timeLeft;
  timeLeft = timeLeft - 1;

  if (timeLeft < 0) {
    timeLeft = 1000;
  }
}

let timer = setInterval(updateCountdown, 1000);
