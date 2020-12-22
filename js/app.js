/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

// Below, I set letterButtons = to all of the buttons with the .key class. I then iterate through each button and add an event listener to each.

let letterButtons = document.querySelectorAll('.key');
for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });
}