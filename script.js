let homescore = 0;
let guestscore = 0;

const homescoreel = document.getElementById("homescore");
const guestscoreel = document.getElementById("guestscore");

function updateScore(team, points) {
  if (team === "home") {
    homescore += points;
    homescoreel.textContent = homescore;
  } else if (team === "guest") {
    guestscore += points;
    guestscoreel.textContent = guestscore;
  }
}

function startNew() {
  homescore = 0;
  guestscore = 0;
  homescoreel.textContent = homescore;
  guestscoreel.textContent = guestscore;
  alert("🏁 New Game Started!");
}