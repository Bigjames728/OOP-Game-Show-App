/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();


    }

    /**
    * Display phrase on game board
    */

    // In the below code, I created two variables, one to split up all of the letters into individual letters and another to grab the ul element on the page.
    // I then iterated through the letters length property, created another variable that will create an li element, and tested to see if the letters in the
    // phrase were either a space, using setAttribute to set a class name, or if the letter is an actual letter, setting the class name to hide letter.
    // Next I appended the li elements that were created to the ul and returned the letters.
    addPhraseToDisplay() {
        const letters = this.phrase.split('');
        const ul = document.getElementById('phrase');

        for (let i = 0; i < letters.length; i++) {
            let li = document.createElement('li');
            if (letters[i] === '') {
                li.setAttribute('class', `space ${letters[i]}`);
            } else {
                li.setAttribute('class', `hide letter ${letters[i]}`);
            }
            ul.appendChild(li)
        }
        return letters
    };

    checkLetter() {

    }

    showMatchedLetter() {

    }
 }
