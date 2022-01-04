// import {example} from "./modules/example.js"
const slideContainer = document.querySelector('.slide-container')
const slideTrack = document.querySelector(".slide-track");
const slides = Array.from(slideTrack.children);
const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",

  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);
slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${images[index]})`;
});

slideContainer.style.backgroundImage = `url(${images[0]})`;

const MasterTimeline = gsap.timeline({defaults: {duration:1,}})
MasterTimeline
.to(".main", {y:"-100%", x:0, opacity:1 , ease:"power4.out", delay:1, onComplete: () => imageTl.restart()})
.to(".slide-track", {opacity:0,scale:0, ease:"power4.out",})
.to(".slide-track", {opacity:1,scale:1, ease:"power4.out",})
.to(".slide", {y:0,opacity:1, ease:"power4.out",onComplete: () => slideTimeline.restart()},"<-0.5")
.to(".button", {opacity:1, ease:"power4.in"},"<")
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
.to(".main", {y:"-200%", x:0, opacity:0 , ease:"power4.in",stagger:0.25,delay:4,onComplete: () => MasterTimeline.restart()},"<")

let slideTimeline = gsap.timeline({defaults: {duration:1.5}}).pause();

slideTimeline
.to(".slide", {x:-(slideWidth), ease:"expo.inOut", stagger:0.25 ,delay:1,})
.to(".slide", {x:-(slideWidth * 2), ease:"expo.inOut",stagger:0.25})
.to(".slide", {x:0, ease:"expo.inOut", stagger:-0.25, delay:1, })

 let imageTl = gsap.timeline().pause();

images.forEach((image) => {
  let tl = gsap.timeline({repeatRefresh: true,})
  tl
  .set('.slide-container', {delay:1,duration:1.2,backgroundImage:`url(${image})`})
  .set('.slide-container', {duration:1, backgroundImage:`url(${image})`})
  .set('.slide-container', {delay:0.5,duration:1, backgroundImage:`url(${image})`})
  .set('.slide-container', {delay:1,duration:1, backgroundImage:`url(${image})`})
  imageTl.add(tl)
})

