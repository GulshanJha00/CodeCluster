boiler plate
place the item in center
in h1 make sheryians or any text

break code cluster in span tag but that not a good method so do in js


now make var h1test and select h1. textcontent 
if you just consle log just the h1 it will give a dropbox of many other elemtns but we dont want that so to select one element we will use h1.textcontent

make a variable splittedText h1.split("") it will spilt entire h1 word by word.
make a var clutter and give it a string ""

now in splitted text use forEach loop and function bana and pass e and add clutter+= "<span>{e}</span>
*e in function is the word that is passed from spilttext

h1.innerHTML = clutter 
ISEY HAR EK WORD TOOT GAYA

in h1 give overflow hidden
give span a display as inline-block

now time for gsap
 
gsap.from("h1 span", {
    y = 50 opacity 0 duration 0.8 delay 0.5 stagger: 0.15
})
if we give stagger -0.15 it will come from back the animation.

in forEach wala part add elem,idx in fucntion and give spam a class 
create a var halfvalue and get the length of splittedtext and make it half using math.floor 

inside the forEach function make a ifelse block that if idx< halfvalue then do clutter += '<span>${e}</span>' same in else
in if give class a and in else give class b
now do h1.innerHTML = clutter

in gsap do 
gsap.from("h1 .a", {
    y = 50 opacity 0 duration 0.8 delay 0.5 stagger: 0.15
})

gsap.from("h1 .b", {
    y = 50 opacity 0 duration 0.8 delay 0.5 stagger: -0.15
})