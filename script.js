function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".purple",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

loco()

gsap.to("#page > video", {
    scrollTrigger:{
        trigger : `#page > video`,
        start : `2% top`,
        bottom : `bottom top`,
        scroller : `#main`
    },
    onStart:()=>{
        document.querySelector("#page > video").play()
    }
})
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById(".Secondary-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 


  