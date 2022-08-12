// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

//document.getElementById("about-me").innerHTML = readTextFile("https://www.paulinespetcare.com/information/About-Me.txt")


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-bar")
    //document.querySelector(".page-graphic").style.marginTop = navbar.offsetHeight.toString() + "px";
    
  } else {
    navbar.classList.remove("sticky-bar");
    //document.querySelector(".page-graphic").style.marginTop = "0px";
  }
} 

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}