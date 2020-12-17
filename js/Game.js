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
        const phraseArray = [new Phrase('Do you like gaming'), new Phrase('The sky is blue'), new Phrase('Puppies are cute'), new Phrase('I love to rap'), new Phrase('My girlfriend is named Mattie')];
        return phraseArray
    };


    startGame() {

    }

    getRandomPhrase() {

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