
gsap.registerPlugin(ScrollTrigger);

// animate the square div class
gsap.to('.square', {
    // x: 1000,
    duration: 8,
    scrollTrigger: {
        trigger: '.square2',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 4,
        toggleActions: 'restart none none none',
        pin: ".square",
        pinspacing: true,
        markers: true,

    }
})