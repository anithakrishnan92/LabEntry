getElementById("logoutForm").submit();

const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}

const myTimeout = setTimeout(logOff);

function myAnimi() {
  var target = document.getElementById("slide-left");
  target.style.width = "80px";
  var target = document.getElementById("slide-right");
  target.style.width = "80px";
}
