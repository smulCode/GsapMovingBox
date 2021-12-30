// import {example} from "./modules/example.js"


const MasterTimeline = gsap.timeline({defaults: {durations:2,}})
MasterTimeline.
to(".main", {y:"-100%", x:0, opacity:1 , ease:"expo.out",stagger:0.25,})
.to(".box-container", {backgroundColor:"orange", ease:"bounce"})

