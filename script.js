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


// gsap.from("h1", {
//     opacity: 0,
//     duration: 3,
//     y: 45,
//     delay: 1,
//     stagger: 0.3 // It runs each element one at a time if there are lots of same tag elements...
// })


// gsap.to("#dabbi", {
//     x: 1000,
//     duration: 1, 
//     delay: 1,
//     rotate: 360,
//     repeat: -1,  //repeat -1 for infinity loop
//     yoyo: true
// })


// gsap.to("#dabbi1", {
//     x: 1000,
//     duration: 1, 
//     delay: 1,
//     repeat: -1,    
//     yoyo: true

// })

// gsap.to("#dabbi2", {
//     x: 1000,
//     duration: 1, 
//     delay: 2,
//     repeat: -1,    
//     yoyo: true,
// })

// gsap.to("#dabbi3", {
//     x: 1000,
//     duration: 1, 
//     delay: 3,
//     repeat: -1,
//     yoyo: true
// })

// var tl1 = gsap.timeline()
// tl1.to("#dabbi1", {
//     x:1000,
//     duration: 2,
//     delay: 1, 
//     rotate: 360,

// })
// tl1.to("#dabbi2", {
//     x:1000,
//     duration: 2,
//     rotate: 360,

// })
// tl1.to("#dabbi3", {
//     x:1000,
//     duration: 2,
//     rotate: 360
// })


// var tl = gsap.timeline()
// tl.from("h2", {
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     delay: 0
// })
// tl.from("h4", {
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3
// })
// tl.from("h1", {
//     y: 20,
//     opacity: 0,
//     duration: 0.5,
//     scale: 0.2
// })


// GSAP  PART-2


gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360
})

gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body"
    }
})