
gsap.registerPlugin(ScrollTrigger);

// animate the square div class
gsap.to('.square', {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: '.square',
        end: () => `+=${document.querySelector('.square').offsetHeight}`,
        start: 'top 30%', // top of trigger meets center of viewport
        toggleClass: 'red',
        // markers: true,
    
    }
})