const scoreboards = document.querySelector('.scoreboard');

const commentary = document.getElementById('commentary');

const teamBoards = scoreboards.querySelectorAll('.score-box');
teamBoards.forEach((team) => {
    // Main score output 
    const scoreDisplay = team.querySelector('h1');
    let currentScore = parseInt(scoreDisplay.textContent);
    // Team names
    const teamName = team.querySelector('h2').textContent;
    // Score buttons
    const buttons = Array.from(team.querySelectorAll('.score-box > button'));

    // Functionality for the score buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const scoreToAdd = index + 1;
            currentScore += scoreToAdd;
            scoreDisplay.textContent = currentScore;
        })
    })

    team.querySelectorAll('.ref-box').forEach((refCounter) => {
        const refCards = Array.from(refCounter.querySelectorAll('button'));

        refCards.forEach((card, index) => {
            card.addEventListener('click', function() {
                console.log(card.textContent + " was clicked!")
            })
        })
    })
})