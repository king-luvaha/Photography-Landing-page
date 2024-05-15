// lenis smooth scrollng init
const lenis = new Lenis({
    duration: 0.8,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Scroll Trigger Init
gsap.registerPlugin(ScrollTrigger);

// Get the title element
const title = document.querySelector(".title");
// Split the title text into individual characters using the split type library
const titleText = new SplitType(title, {
    types: "chars"
});

// Title Animation
gsap.to(titleText.chars, {
    y: -300, // Move each letter up
    stagger: 0.1, // Set a delay for every letter
    scrollTrigger: {
        trigger: ".hero", // Set trigger element for animation
        start: "top top", // Set starting point of animation
        scrub: true, //Make animation follow scroll position
        pin: true, //Fic the trigger element until animation is don
    },
});

// Get the subtitle element
const subTitle = document.querySelector(".sub-title");
// Split the text of the subtitle into individual characters
const subTitleText = new SplitType(subTitle, {
    types: "chars"
});

// Sub Title Aniimation
gsap.from(subTitleText.chars, {
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top 20%",
        scrub: true,
    }
});

// Select all service elements with GSAP
const services = gsap.utils.toArray('.service-anim');
// Loop through each service element
services.forEach(service => {
    // Servoce Animation
    gsap.to(service, {
        scale: 0.8,
        yPercent: -20,
        scrollTrigger: {
            trigger: service,
            start: "top top",
            scrub: true,
            pin: true,
            // Remove pin spacing so that the serices stack
            pinSpacing: false,
            end: "bottom top",
        },
    });
});

// Footer animation
gsap.from("footer > div", {
    y: 100,
    opacity: 0,
    // Delay each div animation by 0.5 seconds
    stagger: 0.5,
    scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        // Restart animation when scrolling back
        toggleActions: "restart none none none",
    },
});