let sec = 60
let timerInterval
const countdown = document.querySelector("#timer")

function myTimer() {
  timer.innerHTML = `${sec} seconds remaining`
  if (sec > 0) {
    sec-- 
  } else { 
    resetCountdown()
  }
}

function resetCountdown() {
  wordsUsed = []
  clearInterval(timerInterval)
  timerInterval = null
  sec = 60
  timer.innerHTML = "Start Countdown"
  newWordInputElement.defaultValue = "Click timer ^";
}



// MODEL => HOLDS THE STATE OF THE APPLICATION
let wordsUsed = []

// CACHED DOM ELEMENTS
const wordsListElement = document.querySelector("#words-list")
const addWordButtonElement = document.querySelector("#add-word-button")
const newWordInputElement = document.querySelector("#new-word-input")

// VIEW
// WHEN THE APP STATE CHANGES, RE-RENDER THE VIEW
function renderList(){
    wordsListElement.innerHTML = ""
    // Loop through all the words in wordsUsed
    wordsUsed.forEach(function(word){
        // Create a new list item
        newListItem = document.createElement('li')
        
        // Set the list item's text equal to that word
        newListItem.innerText = word
        // Append the list item to my #words-list
        wordsListElement.append(newListItem)
    })
}

// CONTROLLER
function handleWordAdd(newWord){
    if(wordsUsed.length === 0){
        wordsUsed.push(newWord)
        return renderList()
    }
    const firstLetterOfNewWord = newWord[0]
    const lastWordInList = wordsUsed[wordsUsed.length - 1]
    const lastLetterOfLastWordInList = lastWordInList[lastWordInList.length - 1]
    if(lastLetterOfLastWordInList === firstLetterOfNewWord){
        wordsUsed.push(newWord)
        renderList()
    } 
    // if () {}
    else{
        alert(`Try again! Your new word needs to start with ${lastLetterOfLastWordInList}`)
    }
}

function respondToWordSubmit(){
    const newWordToAdd = newWordInputElement.value // Grab the text from the input
    handleWordAdd(newWordToAdd) // Call the handleWordAdd function using that text
    newWordInputElement.value = "" // Clear the input field
}


// SET UP EVENT LISTENERS
addWordButtonElement.addEventListener("click", respondToWordSubmit) 

newWordInputElement.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        addWordButtonElement.click() // Pressing Enter "clicks" the 'Add Word' Button
    }if (evt.key === "Escape") {
      countdown.click() // Pressing Escape "clicks" the 'countdown' button which has built in state changes to "reset" the board. *** I had this as a separate listener just below this and thought DRY, and I remembered that you can use multiple ifs inside one bloc.
    }if (newWordInputElement.contains()) {
      alert("Entry must be 1 word only with no spaces or special characters")
    }
})


countdown.addEventListener('click', () => {
  if (!timerInterval) { // if false is true
    newWordInputElement.value = ""
    wordsListElement.innerHTML = ""
    timerInterval = setInterval(myTimer, 1000) // setInterval (run the specificed function (myTimer), every second (1000 miliseconds), starting at 60
  } else { // Clicking the button (while the above if is "running") clears the input field, the list, and resets the countdown.
    newWordInputElement.value = ""
    wordsListElement.innerHTML = ""
    resetCountdown()
    alert("Better luck next time!")   
  }
})

// I want to try to get a random game message (from the array below) to appear when the resetCountdown

let resetCountdownAlertMessages = ["Better luck next time!", "That's OK, you can try again", "How did you do??", "GAME OVER", "PLAYER: 0 lives left", "Try playing without a mouse ;)", "Did you know, the average landspeed velocity of a unladed swallow is 24 miles per hour, or 11 meters per second?", "Deep breathe in, pause and hold - aaaaaaaaand a deep breathe out"]

function resetMessage () {
  math.floor(math.random())
}

 









