
// Linking the main scoreboards container to the JS
const scoreboards = document.querySelector('.scoreboard');

// Targetting the inner score-box containers and making them iterable
const teamBox = scoreboards.querySelectorAll('.score-box').forEach((teamScoreController) => {
    // Selecting the main score output element
    const teamScore = teamScoreController.querySelector('h1');
    // Parsing the string from the h1 into an integer
    let currentScore = parseInt(teamScore.textContent)
    // Selecting the team name element
    const teamName = teamScoreController.querySelector('h2');
    // Coverting the button elements into an array and iterating over them
    const buttons = Array.from(teamScoreController.querySelectorAll('button'))

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const scoreToAdd = index + 1;
            currentScore += scoreToAdd;
            teamScore.textContent = currentScore;
            console.log(`${teamName.textContent} ${button.textContent} was clicked!`)
        })
    })
})


