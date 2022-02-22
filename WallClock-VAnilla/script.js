// console.log("working");
const hourOne = document.getElementById('hour-hand');
const minuteOne = document.getElementById('minute-hand');
const secondOne = document.getElementById('second-hand');

function setDate() {
  const now = new Date();
  //seconds-countdown
  const sec = now.getSeconds();
  const secDegree = ((sec / 60) * 360 + 90);
  secondOne.style.transform = `rotate(${secDegree}deg)`;
  //minutes-countdown
  const min = now.getMinutes();
  const minDegree = ((min / 60) * 360 + 90);
  minuteOne.style.transform = `rotate(${minDegree}deg)`;
  //hours-countdown
  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360 + 90);
  hourOne.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(() => {
  setDate();
}, 1000);