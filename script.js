const wordText = document.querySelector(".word"),
    timeText = document.querySelector(".time b"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector("input"),
    refreshbtn = document.querySelector(".refresh-word"),
    checkbtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer)
        alert (`Time's Up!! ${correctWord.toUpperCase()} was the correct word`)
        initGame()
    }, 1000);
}

const initGame = () => {
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase()
    inputField.value = ""
    inputField.setAttribute("maxlength", correctWord.length)
    console.log(randomObj);
}
initGame();

refreshbtn.addEventListener("click", initGame)


const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase()
    if (!userWord) return alert("Please enter a word")
    if (userWord !== correctWord) return alert(`oops!! ${userWord} is incorrect`)
    else return alert(`${userWord} is correct`)
    initGame()
}

checkbtn.addEventListener("click", checkWord)