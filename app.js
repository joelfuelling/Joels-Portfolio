// Super simple slide show that *should* rotate through 3 pictures every 3 seconds. I used the setInterval because I had a lot of fun making the 60 second countdown timer for the wordgame and I wanted to use the function again because it's an elegant way to keep a function moving/repeating.

let slideIndex = 0; // Putting the index # outside the function was key in troubleshooting... Simple, but not if you forget scope rules. I took this idea right out of the class notes on arrays because it's simple.
const mySlides = document.getElementById("slideshow-container").querySelectorAll("img");
// Ohh we've got a bit more comfortable with nested items trying to figure this out. I tried targetting the images alone 1st and it was a headache.


function slideShow() { // I wanted to do more of a traditional carousel, but was completely intimidated when I looked at a simple example on Bootstrap. I remember people back in the day saying "HOLY S**T! I made my first carousel and it only took me 2 weeks!", so I went a more simplified route with an index method using querySelectorAll (creating a list) in combo with the index method. This was putting together a few concetps we've learned so far, and I might add a button interaction to stop/start, or start it over, I'm not sure yet.

    // *** It doesn't do what I want, yet. All 3 images are displayed and just flex every 3 seconds. I also don't have the right pictures in yet those are just place holders.
    mySlides[slideIndex].style.display = "none"; // Changed this to none (per Angels direction!) I'ma lready using "none" in my CSS just didnt' think to apply it here.

    slideIndex = (slideIndex + 1) % mySlides.length; // With QSA returning a list, the index method (let slideIndex = 0, above in global space) was the method I chose for this. I got nowhere with getElementById and I'm not entirely sure why.
    // The modulo portion is cool :) I like that operator. I couldn't figure out how to get the slideIndex back to 0 within the function while on the last image at first. I explored a { once: true } condition on the setInterval function but it was getting messy. Now, when slideIndex = 2 (3rd image) slideIndex now equals 0 because there's no remainder! ie., it reset the function every 3 runs. I think Ryan showed us this a couple times in week 1 (modulo stuff) in a more basic manner. It was also used the in the GA prework a couple times.
    mySlides[slideIndex].style.display = "inline-block"; // Not sure if this is what I need permanently but it's working right now!
}
// THIS MUST STAY AT THE BOTTOM 
setInterval(slideShow, 3000);