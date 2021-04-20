// const highScoresList = document.getElementById("highScoresList");
var categoryField = document.getElementById('category');



// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let csHighScore = JSON.parse(localStorage.getItem("csHighscore")) || [];
let gHighscore = JSON.parse(localStorage.getItem("gHighscore")) || [];


const apply = document.getElementById("apply").addEventListener('click',()=>{
  var s = categoryField.selectedIndex;
  var category = categoryField.options[s].value;
  // alert(category);

  if(category  == 9){
    highScoresList.innerHTML = gHighscore.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
  }else if(category == 18){
    highScoresList.innerHTML = csHighScore.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
  }

});




