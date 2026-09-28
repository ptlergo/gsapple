
gsap.registerPlugin(ScrollTrigger);

// animate the square div class
gsap.to('.square', {
    x: 1000,
    duration: 8,
    scrollTrigger: {
        trigger: '.square',
        start: 'top 60%',
        end: 'top 40%',
        toggleActions: 'restart pause resume complete',
        // actions props: play pause resume reverse restart reset complete none
        //  actions:            onEnter onLeave onEnterBack onLeaveBack
        markers: true,

    }
})