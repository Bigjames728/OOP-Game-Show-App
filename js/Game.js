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

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button);
        };      
    

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        if (this.missed < 4) {
            const scoreboard = document.getElementById('scoreboard');
            const image = scoreboard.getElementsByTagName("img");
            let currentImage = image[this.missed];

            if (currentImage.src.includes('liveHeart.png')) {
                let lostHeart = currentImage.src.replace('liveHeart.png', 'lostHeart.png');
                currentImage.src = lostHeart;
            }
        } else {
            this.gameOver();
        }
            this.missed++
    };



    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const checkHide = document.getElementsByClassName('hide');
        if (checkHide.length === 0) {
            return this.gameOver(true);
        } else {
            return false;
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        document.getElementById('overlay').style.display = 'block';
        let gameMessage = document.getElementById('game-over-message');

        if (gameWon) {
            gameMessage.textContent = 'You won, way to go!';
            document.getElementById('overlay').className = 'win';
        } else {
            gameMessage.textContent = 'Bummer, maybe next time!';
            document.getElementById('overlay').className = 'lose';
        }

    };

}