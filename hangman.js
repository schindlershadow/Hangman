var guessInt = 6;

var guessStr = "You have " + guessInt + " tries left";

function getWord() {
    var words = ["FLAG", "MALICIOUS", "REDUCE", "LINE", "HATE", "PULL", "WOMAN", "PROTECT", "FRIENDLY", "ANNOY", "COMPETITION", "INTERESTING", "EXERCISE", "ORDER", "STREET"];

    var index = Math.floor(Math.random() * words.length);

    return words[index];
}

function getDisplay(word) {
    var display = "";

    for (i = 0; i < word.length; i++) {
        display = display + "-";
    }

    return display;

}

function isLetterInWord(word, letter) {
    if (word == null || guessInt == 0) {
        return;
    }
    else {
        if (word.search(letter) != -1) {
            setLetter(word, letter, document.getElementById("theDashes").innerHTML);
        }
        else {
            guessInt = guessInt - 1;
            guessStr = "You have " + guessInt + " tries left";
            var guessesVar = document.getElementById("guesses");
            guessesVar.innerHTML = guessStr;
        }

        isFinished(word, document.getElementById("theDashes").innerHTML, guessInt);

    }
}

function setLetter(word, letter, display) {
    if (word == null || guessInt == 0) {
        return;
    }
    else {
        while (word.search(letter) != -1) {
            var index = word.search(letter);
            display = display.substr(0, index) + letter + display.substr(index + 1);
            word = word.substr(0, index) + "-" + word.substr(index + 1);
        }

        var theDashesVar = document.getElementById("theDashes");
        theDashesVar.innerHTML = display;
    }
}

function isFinished(word, display, left) {
    if (left > 0) {
        if (word == display) {

            var theStatusVar = document.getElementById("theStatus");
            theStatusVar.innerHTML = "Congratulations! You won!";


        }
    }
    else {
        var theStatusVar = document.getElementById("theStatus");
        theStatusVar.innerHTML = "HANGMAN! Your man has been hanged! The word was " + word;
    }

}

function start() {
    guessInt = 6;

    guessStr = "You have " + guessInt + " tries left";

    var word = getWord();

    var display = getDisplay(word);

    document.getElementById("guesses").innerHTML = guessStr;

    document.getElementById("theWord").innerHTML = word;

    document.getElementById("theDashes").innerHTML = display;

    document.getElementById("theStatus").innerHTML = "";
}