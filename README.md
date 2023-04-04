# Joels-Portfolio
Joels Portfolio website created during General Assembly Software Development Immersive bootcamp - week 3.
# Saturday/Sunday (3/1/23) 

So far, lots of class notes, rewatching some video portions (functions, arrays, iterators, JS stuff mostly), and google searches (links below)

Saturday/Sunday (3/1/23) - Added starting layout using mobile first methodology.
    - The main addition is the (incomplete) 'setInterval(Slideshow, 3000) function'. Getting it to "start over" was the challenge. The modulus operator came in very handy but it's not done...
        - It starts with all 3 loaded up (because they're on the HTML), but I don't want that. Not sure how to fix it but I'll look at it.
        - I want them to show up one at a time, for 3 seconds each, not all at once, and flexing to and from.

    - Need to implement dropdown menu for Resume, Linked in, possibly (a feature) that when projects is clicked it scrolls to that section of the page. Research will need done to implement that feature if desired.

    - I've had difficutly getting .myface to adjust to the correct size in mobile mode. Will continue to work on that but it seems minor for now.

    - Need more flex/grid design for changes between desktop/mobile but i think the it's off to a good start (I need to rewatch the "HOME,ABOUT,ASIDE,CONTENT" flexbox video)

    - Word Game has a cool time feature that I want to add more conditions to (as well as the word box game, maybe?) to see if by making it a more complicated/complete game it will count as one of the 3 requirements. I will ask the instructor team on Monday what will and won't fly.

    - Simple hover effect added to 'MyFace' element using https://www.geeksforgeeks.org/primer-css-hover-animation/?ref=rp CSS primer (just to mix it up? I've never done a hover effect before and wanted to just try it out.). It felt cute, might delete later.

    Some resources used today...
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
    "https://unpkg.com/@primer/css@^18.0.0/dist/primer.css"
    Class notes and videos around functions, lists, and DOM manipulation.

# Monday (3/2/23)

Monday (3/2/23) 
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
    https://replit.com/@JoelFuelling/Dropdown-Menu-Lab-3#style.css
    https://stackoverflow.com/questions/8762201/how-to-get-the-cursor-to-change-to-the-hand-when-hovering-a-button-tag

# Tuesday (3/3/23)

Monday (3/2/23)
    - Looked up "how to create darkmode button" as thats the 3rd feature I want to add. W3 link with super simple example is below.


    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode
