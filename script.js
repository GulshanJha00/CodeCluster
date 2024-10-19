var tl = gsap.timeline();
var main = document.querySelector("#nav i")
var cursor = document.querySelector("#full i")

tl.to("#full", {
    right:0,
    duration : 0.4,
})
tl.from("#full h4", {
    x:150,
    opacity:0,
    duration: 0.3,
    stagger: 0.2,
})
tl.from("#full i", {
    opacity: 0,
    x:150,
    duration:0.2,
})
tl.pause()
main.addEventListener("click", ()=>{
    tl.play()
})
cursor.addEventListener("click",()=>{
    tl.reverse()
})

gsap.to("#card h1", {
    transform: "translateX(-190%)",
    scrollTrigger: {
        trigger: "#contest",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin:true,
    }
})








//Headline Animation

var h1 = document.querySelector(".heading");
var h1Text = h1.textContent;
console.log(h1Text)

var splitText = h1Text.split("");
var length = splitText.length/2;
console.log(length);


var cluster = ""
splitText.forEach(function(e,idx){
    if(idx < length){

        cluster += `<span class= "a">${e}</span>`
    }
    else{
        cluster += `<span class="b">${e}</span>`
    }
})
h1.innerHTML = cluster;
console.log(cluster);



gsap.from("#nav h2 .a",{
    y : 50,
    opacity : 0,
    duration : 0.8,
    delay : 0.5,
    stagger : 0.15,
})

gsap.from("#nav h2 .b",{
    y : 50,
    opacity : 0,
    duration : 0.8,
    delay : 0.5,
    stagger : -0.15,
})


//Registration Page Animation 