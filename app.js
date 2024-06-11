// @ts-nocheck
let add3 = 3;
let homeScore = 0

const awayScore = document.getElementById('awayScore');
const score = document.getElementById("score");
function resetBtn() {
    score.innerHTML = 0;
    awayScore.innerHTML = 0;

}

function addOne() {
    score.innerHTML++;
}

function addThree() {
    let scoreValue = parseInt(score.innerHTML, 10);
    scoreValue += add3;
    score.innerHTML = scoreValue;
}

function awayScoreOne() {
    awayScore.innerHTML++;
}

function awayScoreThree() {
    let awayScoreValue = parseInt(awayScore.innerHTML, 10);
    awayScoreValue += add3;
    awayScore.innerHTML = awayScoreValue;
}