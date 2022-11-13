const currentTime = () => {
  const time = document.querySelector("h1");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let clock = `${hours}:${minutes}:${seconds}`;
  time.innerText = clock;
};

setInterval(() => {
  currentTime();
}, 1000);
