Wednesday - 4/3/2023
    - Pressing the Escape key will now "reset" the current game (clears wordsList, clears input field, and resets timer). I struggled with this at first. I was trying to basically put an 'else' after the existing if within the listener to account for the Escape Key event, that didn't work. After Googling a bit, the easiest way (it seems?) is just basically copy my EnterKey listener but alter it to rest teh game rather than add a word to the list.
    - Text field now clears on focus (ie, you click out, and click back in it). Using onfocus="this.value=''"
    - Some light refactoring done. I want to do more since the JS portion in whole makes more sense the more time I spend with it.
    - Adjusted alert messages to only pop up when an invalid entry is made.
        - Currently working on an array of messages so that when the game is reset the alert message will choose a random one from the array.

    Resources used today.
    - https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    - https://www.google.com/search?q=what+is+the+average+land+speed+velocity+of+an+unladen+swallow&oq=what+is+the+averager+landspeed+vel&aqs=chrome.3.69i57j33i10i160l2j33i10i22i29i30l2.5563j0j7&sourceid=chrome&ie=UTF-8
    - https://www.google.com/search?q=how+to+interpolate+within+a+string&oq=how+to+interpolate+within+a+string&aqs=chrome..- 69i57j0i22i30j0i10i22i30l2j0i22i30l6.6063j0j7&sourceid=chrome&ie=UTF-8
    - https://www.w3schools.com/jsref/prop_text_defaultvalue.asp
    - https://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown
    - https://www.google.com/search?q=how+to+clear+input+field+when+clicked+on&oq=how+to+clear+input+field+when+clicked+on&aqs=chrome..69i57j33i160j33i299j33i22i29i30.4608j0j7&sourceid=chrome&ie=UTF-8