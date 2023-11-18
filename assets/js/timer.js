let deadline = new Date();
deadline.setHours(0, 0, 0, 0);
deadline.setDate(deadline.getDate() + 1);

let date = deadline;

const counts = () => {
  let now = new Date();
  let gap = date - now;

  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

counts();

let timerId = setInterval(counts, 1000);