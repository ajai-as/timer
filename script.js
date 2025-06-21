let countdownElement = document.querySelector("#countdownE h1"); // ✅ fixes the issue

let timeLeft = 999;
function updateClock() {
let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
let ampm = h >= 12 ? "PM" : "AM";

h = h % 12 || 12;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

document.querySelector("#time h2").textContent = `${h}:${m}:${s} ${ampm}`;
  }

setInterval(updateClock, 1000); // call every second
updateClock(); // initial call

function updateCountdown() {
  countdownElement.textContent = timeLeft;
  timeLeft = timeLeft - 1;

  if (timeLeft < 0) {
    timeLeft = 1000;
  }
}

let timer = setInterval(updateCountdown, 1000);
