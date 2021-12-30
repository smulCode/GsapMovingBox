// import {example} from "./modules/example.js"
const slideContainer = document.querySelector(".slide-track");
const slides = Array.from(slideContainer.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const MasterTimeline = gsap.timeline({defaults: {duration:1,}})
MasterTimeline
.to(".main", {y:"-100%", x:0, opacity:1 , ease:"expo.out",stagger:0.25, delay:1})
.to(".slide-container", {backgroundColor:"#aaa", ease:"none" })
.to(".slide-track", {opacity:0,scale:0, ease:"power4.out",})
.to(".slide-track", {opacity:1,scale:1, ease:"power4.out",})
.to(".slide", {y:0,opacity:1, ease:"power4.out",onComplete: () => slideTimeline.restart()},"<-0.5")
.to(".nav-indicator", {delay: 0.5, stagger:0.25,
  keyframes: {
    x: [0, 0, 32, 32, 32],
    y: [0, 10, 10, 10, 0],
    ease: "power4.inOut",
    opacity:[1, 0, 0, 0, 1],
  }})
.to(".nav-indicator", {delay: 0.8,
  keyframes: {
    x: [32, 32, 64, 64, 64],
    y: [0, 10, 10, 10, 0],
    ease: "power4.inOut",
    opacity:[1, 0, 0, 0, 1],
  }})
.to(".nav-indicator", {delay: 1.6,
  keyframes: {
    x: [64, 64, 0, 0, 0],
    y: [0, 10, 10, 10, 0],
    ease: "power4.inOut",
    opacity:[1, 0, 0, 0, 1],
    
  }})
.to(".main", {y:"-200%", x:0, opacity:0 , ease:"power4.in",stagger:0.25,delay:4,onComplete: () => MasterTimeline.restart()},"<1")

let slideTimeline = gsap.timeline({defaults: {duration:1.5}}).pause();

slideTimeline
.to(".slide", {x:-(slideWidth), ease:"expo.inOut", stagger:0.25 ,delay:1,})
.to(".slide", {x:-(slideWidth * 2), ease:"expo.inOut",stagger:0.25})
.to(".slide", {x:0, ease:"expo.inOut", stagger:-0.25, delay:1, })



