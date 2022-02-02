let skills = document.querySelector(".skills");
let skillSpan = document.querySelectorAll(".skills span");
let aStats = document.querySelector(".a-stats");
let statsCounters = document.querySelectorAll(
  ".a-stats p:first-of-type"
);
let started = false; // function started ?

// time counter
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let countDownDate = new Date(
  "Nov 22, 2023 23:59:59"
).getTime();

let bdCounter = setInterval(() => {
  // get Date Nowq
  let dateNow = new Date().getTime();

  // Different between now and the countdown
  let dateDiff = countDownDate - dateNow;

  // get time units
  let daysCo = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hoursCo = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesCo = Math.floor(
    (dateDiff % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondsCo = Math.floor(
    (dateDiff % (1000 * 60)) / 1000
  );

  days.innerHTML = daysCo < 10 ? `0${daysCo}` : daysCo;
  hours.innerHTML = hoursCo < 10 ? `0${hoursCo}` : hoursCo;
  minutes.innerHTML =
    minutesCo < 10 ? `0${minutesCo}` : minutesCo;
  seconds.innerHTML =
    secondsCo < 10 ? `0${secondsCo}` : secondsCo;

  // clear when down to 0
  if (dateDiff < 0) {
    clearInterval(bdCounter);
  }
}, 1000);

// scroll funtions
window.onscroll = onScrollAnimates;

function onScrollAnimates() {
  // skill bar width changes
  if (window.scrollY >= skills.offsetTop - 400) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  //stats numbers count increases
  if (window.scrollY >= aStats.offsetTop - 500) {
    if (!started) {
      statsCounters.forEach((p) => {
        let goal = p.dataset.count;
        let counter = setInterval(() => {
          p.textContent++;
          if (p.textContent == goal) clearInterval(counter);
        }, 1000 / goal);
      });
    }
    started = true;
  }
}
