Wednesday - 4/3/2023
    - Pressing the Escape key will now "reset" the current game (clears wordsList, clears input field, and resets timer). I struggled with this at first. I was trying to basically put an 'else' after the existing if within the EnterKey listener to account for the Escape Key event, that didn't work. After Googling a bit, the easiest way (it seems?) is just basically copy my EnterKey listener but alter it to reset the game with Escape keypress rather than add a word to the list.
    - Text field now clears on focus (ie, you click out, and click back in it). Using onfocus="this.value=''" in the HTML.
    - Some light refactoring done. I want to do more since the JS portion in whole makes more sense the more time I spend with it.
    - Adjusted alert messages to only pop up when an invalid entry is made.
    - *** I was wondering if I needed math.floor in combo with the math.random function since I was using strings in my messages array. In the 1st 'Try it' section on this MDN page (link below), the last example shows console.log(Math.random()); with an output of 0.26957529721702644 and that summed it up for me. Math.floor will round to either 1 or 0, and we're working with arrays so both are needed.
        - I was passing the entire array into the function before, thus the return was more than just one random index. Now it simply returns the random list index for the alert message.

    Resources used today.
    - Class notes, arrays lab work, reviewed callback functions, chat GPT

    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    - https://www.google.com/search?q=do+you+have+to+use+math.floor+with+math.random+in+javascript&oq=do+you+have+to+use+math.floor+with+math.random&aqs=chrome.1.69i57j33i160j33i299.8130j0j4&sourceid=chrome&ie=UTF-8
    - https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    - https://www.google.com/search?q=what+is+the+average+land+speed+velocity+of+an+unladen+swallow&oq=what+is+the+averager+landspeed+vel&aqs=chrome.3.69i57j33i10i160l2j33i10i22i29i30l2.5563j0j7&sourceid=chrome&ie=UTF-8
    - https://www.google.com/search?q=how+to+interpolate+within+a+string&oq=how+to+interpolate+within+a+string&aqs=chrome..- 69i57j0i22i30j0i10i22i30l2j0i22i30l6.6063j0j7&sourceid=chrome&ie=UTF-8
    - https://www.w3schools.com/jsref/prop_text_defaultvalue.asp
    - https://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown
    - https://www.google.com/search?q=how+to+clear+input+field+when+clicked+on&oq=how+to+clear+input+field+when+clicked+on&aqs=chrome..69i57j33i160j33i299j33i22i29i30.4608j0j7&sourceid=chrome&ie=UTF-8

Thursday - 4/4/2023
    - It's not pretty but the button works! I was "stuck" for a couple hours trying to figure out how to target other classes within the class change response but then realized I wasn't targeting them with the DOM :/ I recreated 2 other DOM variables for the instructions and wordgame box, which now both change with the darkmode toggle.
    - in combo with the Information from the youtube video (below), I plugged the following question in chatGPT with my CSS as a reference: "I'm trying to make a simple toggle button (HTML below). Could you please explain the "label:before" CSS property to me in detail? I've never seen it before." It's response is indented below... 
    - NOTE: (**SOME TEXT**) are my notes/comments.

        - The label:before CSS property is used to style a pseudo-element (::before) that is inserted before the content of a label element. 
            - (**I've never seen label used before that I can remember. The youtube video started off with it and I wanted to know why, rather than using a div or h1/header/etc. This is a cool "trick" for buttobns, sliders and interacive elements and suite my purpose well for a beginner.**)

        - In your case, the label:before CSS styles are used to create the circular button of the toggle. The content property sets the content of the pseudo-element to an empty string, which means that no content will be displayed (**I changed mine to a smiley face**). The position property sets the position of the pseudo-element to absolute, which means that the element will be positioned relative to the nearest positioned ancestor (in this case, the label element). (**Simple enough, we've gone ove that in CSS labs and designed on other projects already**)

        - The width and height properties set the size of the button, while the left and top properties set its position within the label element. The border-radius property is set to 50%, which makes the button circular, and the cursor property is set to pointer, which changes the cursor to a hand icon when the button is hovered over.
            - (**I knew this part, basic CSS. I altered the design.**)

        - Finally, the background-color property sets the color of the button, and the transition property sets the duration and type of animation that will be used when the button changes state (in this case, when it is clicked to toggle between on and off). The transition property allows the button to smoothly animate between its initial and final states, creating a more polished user experience.


    Resources used today.
    - https://www.youtube.com/watch?v=2nA7k1TRXdk
    - https://www.w3schools.com/jsref/dom_obj_body.asp
    - https://www.youtube.com/watch?v=1BC_BN5Kzbo
    