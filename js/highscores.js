var categoryField = document.getElementById('category');
var s = categoryField.selectedIndex;
console.log(s);
var category = categoryField.options[s].value;


const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
