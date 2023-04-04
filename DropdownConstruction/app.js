
// Gotta get the button, and the menu variables.
const dropBtn = document.getElementById("dropbutton-id")
const dropMenu = document.getElementById("dropmenu")

// This will show/toggle the the desired class for the menu but it needs to work on the drop down menu button AND the links.
const dropToggle = function(evt) {
    dropMenu.classList.toggle("classtoggle")
}

// GO THROUGH THIS/RECREATE line by line and reference materials as needed.
// GO THROUGH THIS/RECREATE line by line and reference materials as needed.


//event listener to reveal dropdown menu when clicked, 

dropBtn.addEventListener("click", function(evt){
    dropToggle();
})


// Double callbacks because of "links" generated within dropdown.
const dropLinks = document.querySelectorAll(".dropdown-links")
    dropLinks.forEach((link) => {
        link.addEventListener("click", function(evt){
            dropToggle();
        })
    })