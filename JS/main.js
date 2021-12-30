// import {example} from "./modules/example.js"
const slideContainer = document.querySelector(".slide-container");
const slides = Array.from(slideContainer.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const MasterTimeline = gsap.timeline({defaults: {duration:1,}})
MasterTimeline.
to(".main", {y:"-100%", x:0, opacity:1 , ease:"expo.out",stagger:0.25,})
.to(".slide-container", {backgroundColor:"orange", ease:"bounce" })
.to(".slide", {opacity:1, ease:"power2.in"})

// ,onComplete: () => slideTimeline.play()

let slideTimeline = gsap.timeline({defaults: {duration:1.5}}).pause();

slideTimeline
.to(".slide", {x:-(slideWidth), ease:"expo.inOut", stagger:0.25})
.to(".slide", {x:-(slideWidth * 2), ease:"expo.inOut",stagger:0.25})
.to(".slide", {x:0, ease:"expo.inOut", stagger:-0.25, delay:1, })
