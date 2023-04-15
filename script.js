gsap.registerPlugin(ScrollTrigger);

// const size = ;
// console.log(size);

// gsap.to(".blue",{
//     x:-500,
//     duration: 8,
//     scrollTrigger: {
//         trigger: ".patate",
//         start: "top center",
//         end:"bottom center",
//         scrub: 2,
//         toggleActions: "restart none none none",
//         pin: ".patate",
//         pinSpacing: false,
//         markers: {
//             fontSize: "2rem",
//         },
//     }
// })

const weigt = document.getElementById("blue").offsetWidth
const weigtpatate = document.getElementsByClassName("patate")[0].offsetWidth
// const weigtpatate = document.getElementById("panel").offsetWidth
// const weigtpatate = 300

gsap.to(".patate",{
    x: -weigtpatate,
    // duration: 1,
    scrollTrigger: {
        trigger: ".patate",
        start: "30% center",
        end:"80% center",
        scrub: 2,
        toggleActions: "restart none none none",
        pin: ".patate2",
        pinSpacing: false,
        markers: {
            fontSize: "2rem",
        },
    }
})

// gsap.to(".patate",{
//     x:-500,
//     duration: 8,
//     scrollTrigger: {
//         trigger: ".patate",
//         start: "top center",
//         end:"bottom center",
//         scrub: 2,
//         toggleActions: "restart none none none",
//         pin: ".patate",
//         pinSpacing: false,
//         markers: {
//             fontSize: "2rem",
//         },
//     }
// })