# Joels-Portfolio
Joels Portfolio website created during General Assembly Software Development Immersive bootcamp - week 3.
# Saturday/Sunday (4/1/23) 

So far, lots of class notes, rewatching some video portions (functions, arrays, iterators, JS stuff mostly), and google searches (links below)

Saturday/Sunday (4/1/23) - Added starting layout using mobile first methodology.
    - The main addition is the (incomplete) 'setInterval(Slideshow, 3000) function'. Getting it to "start over" was the challenge. The modulus operator came in very handy but it's not done...
    - It starts with all 3 loaded up (because they're on the HTML), but I don't want that. Not sure how to fix it but I'll look at it.
    - I want them to show up one at a time, for 3 seconds each, not all at once, and flexing to and from.

    - Need to implement dropdown menu for Resume, Linked in, possibly (a feature) that when projects is clicked it scrolls to that section of the page. Research will need done to implement that feature if desired.

    - I've had difficutly getting .myface to adjust to the correct size in mobile mode. Will continue to work on that but it seems minor for now.

    - Need more flex/grid design for changes between desktop/mobile but i think the it's off to a good start (I need to rewatch the "HOME,ABOUT,ASIDE,CONTENT" flexbox video)

    - Word Game has a cool time feature that I want to add more conditions to (as well as the word box game, maybe?) to see if by making it a more complicated/complete game it will count as one of the 3 requirements. I will ask the instructor team on Monday what will and won't fly.

    Some resources used today...
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    - https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js
    - https://unpkg.com/@primer/css@^18.0.0/dist/primer.css
    Class notes and videos around functions, lists, and DOM manipulation.

# Monday (4/2/23)

Monday (4/2/23) 
    - With some help by Angel in slack, I got the slideshow setup the way I want it now. I had to put the (mySlides[slide index].style.display = "block") outside the function so that the 1st image would show up before the slideShow function begins.
    - Navbar is locked to the top of screen.
    - burger menu icon still showing up in between mobile and large desktop views.
    - Still working on trying to get a transparent background for menu but thats not a big deal.
    - I want a small picture of my face to show up in the top left corner of the nav in phone display, but it was not showing up (CSS class issue likely...)
    - Added CSS to buttons.
    - *Trying* to clean up my CSS a bit. Some of it has been experimental and not all of it applies anymore.
    - Added Git button and link.
    - Began constructing Nav Bar but JS tripped me up a little so I need to review before moving forward with construction.

    Some resources used today... I used chat GPT to help my try and "clean up" my CSS but it actually didn't help me at all, it just gave me other ways to do similar things. I'm still learning how to prompt it in a way to get the optimal results.

    stackoverflow.com/questions/68932531/how-to-show-dropdown-menu-when-clicked
    - https://replit.com/@JoelFuelling/Dropdown-Menu-Lab-3#style.css
    - https://stackoverflow.com/questions/8762201/how-to-get-the-cursor-to-change-to-the-hand-when-hovering-a-button-tag

# Tuesday (4/3/23)

Tuesday (4/3/23)
    - Nav bar dropdown is working! Ryan gave me feedback on what 4 main things to know for selecting objects and changing classes via Slack, including classToggle, and that helped a lot.
    
    - Need to add functionality for closing menu based off "not wanting to click a link" option once menu is open.
    
    - Looked up "how to create darkmode button" as thats the 3rd feature I want to add. W3 link with super simple example is below. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode

    Some resources used so far today.
    - https://stackoverflow.com/questions/50465697/closing-dropdown-by-clicking-outside-in-javascript-tutorial-clarification
    - https://www.youtube.com/watch?v=DxWqBRqAGLo
    - https://stackoverflow.com/questions/61886880/hiding-a-popup-using-javascript
    - https://www.w3schools.com/howto/howto_js_dropdown.asp
    - https://www.google.com/search?sxsrf=APwXEdcWr8KG_e-MonPrYM1fyPMsSgz2zw:1680631005445&q=what+can+override+z-index+in+CSS&spell=1&sa=X&ved=2ahUKEwifws-w5pD-AhVnlIkEHbcvCawQBSgAegQIBxAB&biw=1129&bih=893&dpr=2#kpvalbx=_3mQsZMGlN7unptQP_eaoiAY_30
    - https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_1/07-js-continued/7.5-js-this-keyword.md (using this in the global space)

# Wednesday (4/3/23)

Wednesday (4/3/23) 
    - See WordGame README for changes made to game functionality.
    Some resources used so far today.
    - https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_1/04-dom/4.1.1-dom-menu-lab-part-1.md

# Thursday (4/4/23)

    - See Wordgame README.

# Friday (4/5/23)

    - Dropdown menu now closes when you click outside of it. Used an if(!no menu && !nobutton are the clicked object) conditional. I was attempting to use window.addEvent, or this.addEvent, but they were conflicting with any click made, which makes sense. I was not being specific enough to the condition of the menu being open, and it being "its own thing" outside of the entire document.
    - Using .contains() and putting the click event inside is a nice functional combo.
    - Finally got the display none/BLOCK CSS setup between mobile and non-mobile. I was mixing up (display: "block"), with (display: "show")
    - Pictures of Ruby and Zelda added :D.
    - Adjusted dropdown menu button CSS to better match page style.
    

    Resources used today.
    - DOM lab review.
    - https://stackoverflow.com/questions/50465697/closing-dropdown-by-clicking-outside-in-javascript-tutorial-clarification


Sunday 4/7/23
    - Was going to rework slideshow function for 4 pictures but no change was needed because Modulo is being used. Slides