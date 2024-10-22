$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    let module = gsap.utils.toArray(".module");

    gsap.to(module, {
    xPercent: -100 * (module.length - 1),
    ease: "ease-in-out",
    scrollTrigger: {
        trigger: ".pin-spacer",
        pin: true,
        scrub: 1,
        snap: 1 / (module.length - 1),
    }
    });
});
