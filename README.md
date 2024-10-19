Project README
Heading Animation
Set Up Basic Structure
Create a boilerplate HTML document.
Center the main item on the page.
Use an <h1> tag and write "Sheryians" or any text of your choice.
Text Manipulation
Instead of breaking the text into <span> tags directly in HTML, use JavaScript for this.
Declare a variable named h1Test and select the <h1> element.
Access the text of the <h1> element using h1.textContent to avoid dropdowns of multiple elements.
Create a variable named splittedText that splits the <h1> text into individual characters using split("").
Build HTML with <span> Elements
Initialize a variable called clutter as an empty string.
Use a forEach loop on splittedText, passing each character (referred to as e) to a function, where you append clutter += "<span>${e}</span>" for each character.
Update the HTML Content
Set h1.innerHTML to the clutter string you've built.
Ensure to add overflow: hidden to the <h1> and display: inline-block to the <span> elements.
Animate with GSAP
Use GSAP to animate the <span> elements:

javascript
Copy code
gsap.from("h1 span", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
});
Note: A positive stagger value will make the elements appear from the back during the animation.
Class Assignment
In the forEach loop, add elem and idx as parameters to the function. Assign a class based on the index.
Create a variable named halfValue to get half the length of splittedText using Math.floor.
In the loop, if idx < halfValue, assign class a; otherwise, assign class b.
Update the HTML Again
Set h1.innerHTML to clutter once more.
Separate Animations for Classes
Animate the elements with class a and class b separately using GSAP:

javascript
Copy code
gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
});

gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15
});
Registration Page
Create the Registration Page
Make an additional page (Page 4) with a width and height of 100%.
Design Page 3
In Page 3, create a div with the ID move and another div with the class marque.
Inside the marque div, add an <h1> with the text "Register Now" and an <img> tag.
Get the image source from the Brandium website.
Style the Elements
Set the background color of #move to lawn green.
Set the image height to 90px and the <h1> height to 70px.
Use Flexbox to center align the items in the .marque class with a padding of 0 and a gap of 3vw.
Duplicate and Style
Copy and paste the marquee content five times.
Make the #move div a flex container and add padding of 3vw and 0.
In the .marque, set flex-shrink to 0 and ensure the #move div has overflow hidden.
Page Padding
Add padding of 5vw for all pages.
JavaScript Functionality
Add Wheel Event
Use window.addEventListener to listen for the "wheel" event, passing dets as the argument.
Log dets.deltaY to the console to see how the mouse wheel scrolls. A positive value indicates scrolling down, while a negative value means scrolling up.
GSAP Animation
Inside the event listener, check if dets.deltaY > 0. If true, animate the .marque class to move left with GSAP:



gsap.to(".marque", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 1,
    ease: "none"
});
Ensure to set transform: translateX(-100%) in your CSS, with an initial transform of 0%.
Rotation on Scroll Up
In the else block, select the image and apply a 180-degree rotation. Reset the rotation to 0 degrees when scrolling back up.
