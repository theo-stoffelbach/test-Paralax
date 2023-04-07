// const size = 973;
// let count = 0
// let timeOut = true

gsap.registerPlugin(ScrollTrigger);
gsap.default({ease:"none",duration:2})

gsap.to("#red")

tl.from("#yellow",{xPercent:1080})

ScrollTrigger.create({
    trigger: "#red",
    start: "top top",
    end : "+=300px",
    // x:200,
    pin:true
    // markers:true,
})