let sec = 60;
let timerInterval;
const buttonClick = document.querySelector("#timer");

function myTimer() {
  timer.innerHTML = `${sec} seconds remaining`;
  if (sec > 0) {
    sec--; 
  } else { 
    resetCountdown();
    buttonClick.disabled = false;
  }
}


buttonClick.addEventListener('click', () => {
  if (!timerInterval) { // if false is true
    wordsListElement.innerHTML = ""
    timerInterval = setInterval(myTimer, 1000); // setInterval (run the specificed function (myTimer), every second (1000 miliseconds), starting at 60... I could probably do a loop here but I'm not sure if it would be more efficient since we're counting down and doing things at 0, or else it's clicked.)
  } else {
    wordsListElement.innerHTML = "";
    wordsUsed = []
    resetCountdown();   
  }
});
  


// MODEL => HOLDS THE STATE OF THE APPLICATION
let wordsUsed = [];
// CACHED DOM ELEMENTS
const wordsListElement = document.querySelector("#words-list")
const addWordButtonElement = document.querySelector("#add-word-button")
const newWordInputElement = document.querySelector("#new-word-input")
// VIEW
// WHEN THE APP STATE CHANGES, RE-RENDER THE VIEW
function renderList(){
    wordsListElement.innerHTML = "";
    // Loop through all the words in wordsUsed
    wordsUsed.forEach(function(word){
        // Create a new list item
        newListItem = document.createElement('li');
        
        // Set the list item's text equal to that word
        newListItem.innerText = word;
        // Append the list item to my #words-list
        wordsListElement.append(newListItem)
    })
}
// CONTROLLER
function handleWordAdd(newWord){
    if(wordsUsed.length === 0){
        wordsUsed.push(newWord);
        return renderList();
    }
    const firstLetterOfNewWord = newWord[0];
    const lastWordInList = wordsUsed[wordsUsed.length - 1];
    const lastLetterOfLastWordInList = lastWordInList[lastWordInList.length - 1];
    if(lastLetterOfLastWordInList === firstLetterOfNewWord){
        console.log("THIS IS A VALID SUBMISSION")
        wordsUsed.push(newWord)
        renderList();
    }else{
        console.log("THIS IS NOT A VALID SUBMISSION")
        console.log(`Your new word needs to start with ${lastLetterOfLastWordInList}`)
    }
}

function respondToWordSubmit(){
    
    // Grab the text from the input
    const newWordToAdd = newWordInputElement.value;
    // Call the handleWordAdd function using that text
    handleWordAdd(newWordToAdd)
    // Clear the input field
    newWordInputElement.value = "";
}
// SET UP EVENT LISTENERS
addWordButtonElement.addEventListener("click", respondToWordSubmit)
// Nice! Now, when we press enter, we trigger the button event listener :) DRY
newWordInputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addWordButtonElement.click(); // you can call a click to a button event listenter by pressing Enter, there we gooo!
    }
})
// This is not working yet and I'm not sure why. I created a unique class since the id is already used for the enter key... Does the ID overwrite this since IDs are a more unique classification, even if I place one class and one ID on the same HTML element?
const escapeKeyInput = document.getElementById("add")
escapeKeyInput.addEventListener("keypress", (event) => {
     if (event.key === "Escape") {
        resetCountdown();
    }
})
 

function resetCountdown() {
    clearInterval(timerInterval);
    timerInterval = null;
    sec = 60;
    timer.innerHTML = "Start Countdown!";
}








