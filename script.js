// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function navbarAnimation(){
    gsap.to("#nav-right #links",{
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger : "page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:0.1
    }
})
}
navbarAnimation();

function logoAnimation(){
    gsap.to("#nav-left svg",{
    transform : "translateY(-280%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start: "top 0",
        end:"top -5%",
        scrub:true,
        toggleActions: "reverse"
    }
})
gsap.to("#nav-left svg",{
    transform : "translateY(1%)",
    scrollTrigger:{
        trigger:"#footer",
        scroller:"#main",
        // markers:true,
        start: "top 10%",
        end:"top 10%",
        scrub:true,
        toggleActions: "restart reverse restart reverse"
    }
})
}
logoAnimation();


function videoconAnimation(){
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
    })
})
}
videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
    y:"100%",
    opacity:0,
    delay:0.5,
    duration:0.4,
    stagger:0.2
})

gsap.from("#page1 #video-container",{
    scale:0.8,
    opacity:0,
    delay:1,
    duration:0.7,
})
}
loadingAnimation();

function roundCursor(){
var cursor = document.querySelector("#round-cursor");
var scope = document.querySelectorAll(".child");

scope.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
       gsap.to(cursor,{
           opacity:1,
           scale:1
       })
   })

   elem.addEventListener("mouseleave",function(){
       gsap.to(cursor,{
        //    transform : "translate(-50%,-50%) scale(0)"
        opacity:0,
        scale:0
       })
   })
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y
    })
})

})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#faf0d7da",
    //     // duration: 0.2
    // })

    cursor.style.backgroundColor = "#faf0d7da"
})

document.querySelector("#child2").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#4f6f522a",
    //     // duration: 0.2
    // })
    cursor.style.backgroundColor = "#4f6f522a"
})

document.querySelector("#child3").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#ff6c221f",
    //     // duration: 0.2
    // })

    cursor.style.backgroundColor = "#ff6c221f"

})

document.querySelector("#child4").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#cfa2f759",
    //     // duration: 0.2
    // })

    cursor.style.backgroundColor = "#22092c21"
})

document.querySelector("#child5").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#14dc6b15",
    //     // duration: 0.2
    // })

    cursor.style.backgroundColor = "#e1781628"
})

document.querySelector("#child6").addEventListener("mouseenter",function(){
    // gsap.to(cursor,{
    //     backgroundColor : "#14dc6b15",
    //     // duration: 0.2
    // })

    cursor.style.backgroundColor = "#e6a50f24"
})
}
roundCursor();

var links = document.querySelectorAll("#links a");
var after = document.querySelector("a:hover::after")
links.forEach(function(e){
    e.addEventListener("mouseover",function(){
        e.style.opacity = 0.7;
    })
    e.addEventListener("mouseleave",function(){
        e.style.opacity = 1;
    })
})

// function svgAnimation(){
// var svgTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#footer", 
//         start: "top top",
//         end: "bottom bottom",
//         markers: true,     
//         scrub: true   
//       }
// })
// svgTimeline.from("#svg1", {
//     duration: 0.5,
//     scale: 0.5,
//     stagger: 7,
//     y: -10
// })
//     .from("#svg2", {
//         duration: 0.5,
//         scale: 0.5,
//         stagger: 7,
//         y: -10
//     })
//     .from("#svg3", {
//         duration: 0.5,
//         scale: 0.5,
//         stagger: 7,
//         y: -10
//     })
//     .from("#svg4", {
//         duration: 0.5,
//         scale: 0.5,
//         stagger: 7,
//         y: -10
//     }).delay(3);
    
// }
// svgAnimation();

