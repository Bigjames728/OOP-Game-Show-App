/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phraseArray = [new Phrase('Do you like cake'), new Phrase('The sky is blue'), new Phrase('Puppies are cute'), new Phrase('I love to rap'), new Phrase('My girlfriend is Mattie')];
        return phraseArray
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
 }