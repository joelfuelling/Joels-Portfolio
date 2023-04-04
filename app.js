// Drop down menu - work in progress.
// Using this dropdown menu replit link as a resource from Tim (classmate!). He worked with YE in TA hours and shared this in discord as reference. https://replit.com/@JoelFuelling/Dropdown-Menu-Lab-3#style.css
// I want to understand how the JS works so I'm going to go through it piece at a time, and applying the formatting along the way.
// Using this stack link as well (more menus, similar idea). https://stackoverflow.com/questions/68932531/how-to-show-dropdown-menu-when-clicked
// Tuesday 3/3, using stack link https://www.w3schools.com/howto/howto_js_dropdown.asp as reference.

const dropdownBtn = document.querySelector(".dropbutton-class")

const dropdownMenu = document.querySelector(".dropdown-links")

// Setup the class toggle by the button click - WHOOT! We've got links showing up, crudely, but they are there.
dropdownBtn.addEventListener("click", function(evt) {
    dropdownMenu.classList.toggle('show')
});

// Setting up the menu to close if clicked outside of it?
window.addEventListener("click", function (evt) { // 'this' means window in global space :0 COOL!      
    if(evt.target !== dropdownMenu && dropdownMenu.classList === "show") {
        dropdownMenu.classList.toggle('show')
    }
})


// Super simple slide show that *should* rotate through 3 pictures every 3 seconds. I used the setInterval because I had a lot of fun making the 60 second countdown timer for the wordgame and I wanted to use the function again because it's an elegant way to keep a function moving/repeating.
let slideIndex = 0; // Putting the index # outside the function was key in troubleshooting... Simple, but not if you forget scope rules. I took this idea right out of the class notes on arrays because it's simple.
const mySlides = document.getElementById("slideshow-container").querySelectorAll("img");
// Ohh we've got a bit more comfortable with nested items trying to figure this out. I tried targetting the images alone 1st and it was a headache.
mySlides[slideIndex].style.display = "inline-block" 
// FINALLY! Now, it loads with the 1st picture. Obviously this had to be outside the function (thank you Angel for the nudges!)

function slideShow() { 
    mySlides[slideIndex].style.display = "none"; // Changed this to none (per Angels suggestion!) I'm lready using "none" in my CSS just didnt' think to apply it here.
    slideIndex = (slideIndex + 1) % mySlides.length; // With QSA returning a list, the index method (let slideIndex = 0, above in global space) was the method I chose for this. I got nowhere with getElementById and I'm not entirely sure why. The modulo portion is cool :) I like that operator. I couldn't figure out how to get the slideIndex back to 0 within the function while on the last image at first. I explored a { once: true } condition on the setInterval function but it was getting messy. Now, when slideIndex = 2 (3rd image) slideIndex now equals 0 because there's no remainder! ie., it reset the function every 3 runs. I think Ryan showed us this a couple times in week 1 (modulo stuff) in a more basic manner. It was also used the in the GA prework a couple times.
    mySlides[slideIndex].style.display = "inline-block"; // Not sure if this is what I need permanently but it's working right now!
}
// THIS MUST STAY AT THE BOTTOM 
setInterval(slideShow, 3000);