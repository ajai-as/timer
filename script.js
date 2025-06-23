let countdownElement = document.querySelector("#countdownE h1");

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

setInterval(updateClock, 1000);
updateClock();

function updateCountdown() {
  countdownElement.textContent = timeLeft;
  timeLeft = timeLeft - 1;

  if (timeLeft < 0) {
    timeLeft = 1000;
  }
}
function checktime(){
	let now = new Date();
	let s = now.getSeconds()
	if (s === 10){
	updateCountdown();
	}
}
function flag(){
	if (t ===1){
		checktime();
		}
	}


setInterval(checktime, 1000);
let t=0
setInterval(flag,1000)


