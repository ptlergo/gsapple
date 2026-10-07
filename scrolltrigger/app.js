
gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.box',
        markers: true,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: 1
    },
});

tl.to('.box', {x: 500, duration: 5})
.to('.box', {y: 200, duration: 2})
.to('.box', {x: 0, duration: 2})
