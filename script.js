// gsap.to("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     scale: 2
// })


gsap.from("h1", {
    opacity: 0,
    duration: 3,
    y: 45,
    delay: 1,
    stagger: 1 // It runs each element one at a time if there are lots of same tag elements...
})