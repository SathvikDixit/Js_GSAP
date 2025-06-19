// gsap.to("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     scale: 0.5,
//      repeat: -1  // -1 for infinity loop
// })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     scale: 2,
//  repeat: 2  // repeat for 2 times.
// })


gsap.from("h1", {
    opacity: 0,
    duration: 3,
    y: 45,
    delay: 1,
    stagger: 0.3 // It runs each element one at a time if there are lots of same tag elements...
})


gsap.to("#dabbi", {
    x: 1000,
    duration: 1, 
    delay: 1,
    rotate: 360,
    repeat: -1,  //repeat -1 for infinity loop
    yoyo: true
})