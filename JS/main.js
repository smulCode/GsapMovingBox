// import {example} from "./modules/example.js"
const slideContainer = document.querySelector(".slide-container");
const slides = Array.from(slideContainer.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const MasterTimeline = gsap.timeline({defaults: {durations:1,}})
MasterTimeline.
to(".main", {y:"-100%", x:0, opacity:1 , ease:"expo.out",stagger:0.25,})
.to(".slide-container", {backgroundColor:"orange", ease:"bounce"})
.to(".slide", {x:"-100px", opacity:0.5, backgroundColor:"white", ease:"expo",})

