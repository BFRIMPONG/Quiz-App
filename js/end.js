const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const gHigh =JSON.parse(localStorage.getItem('gHigh')) || [];
const cs =JSON.parse(localStorage.getItem('cs')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
  let currentCategory = localStorage.getItem('category');
  console.log(currentCategory);
  
  if(currentCategory == 9){
    gHigh.push(score);
    gHigh.sort((a, b) => b.score - a.score);
    gHigh.splice(5);
    localStorage.setItem('gHighscore', JSON.stringify(gHigh));
  }else if(currentCategory == 18){
    cs.push(score);
    cs.sort((a, b) => b.score - a.score);
    cs.splice(5);
    localStorage.setItem('csHighscore', JSON.stringify(cs));
  }

  
    window.location.assign('/');
};
