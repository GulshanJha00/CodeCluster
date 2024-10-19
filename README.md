Heading Animation:- 
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
























Registration Page:- 
make a additional page of page 4
make page 4 h,w:- 100% 

Now in page 3 make move div id move and make another div class marque and give h1 Register now and one img tag
get the image from brandium website and give it in src

#move {
    bg-color lawngreen
}
#move marque img{
    height 90px and h1 is 70px
}

.marque me flex and align item center with padding 0 and 0.1 vw and gap 3vw

5 baar marque ko copy paste karo aur move to v flex krdo and padding add karo 3vw and 0 aur marque me ja ke flex-shrink: 0 krdo  make move overflow hidden

add padding in pages 5vw 0
 

Now css is done and time for the javascript

Windows me addevent karo aur event will be wheel, and pass the arguemtn as dets now in console.log get dets.deltaY what will happen?
deltaY will give +ve value when going down and -ve value when mouse wheel spin to go above in y direction

now inside the windows.addevent add if(dets.deltaY>0) 
make gsap.to(".marque",{
    transform: "tranlateX(-200%)
    RPEAT -1,   duration 1s, ease : "none"
})
make suer to put transofrm translate -100% in css and in ese give it 0%

inside else select img and bive rotate 180and copy paste in else as rotate 0