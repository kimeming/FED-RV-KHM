$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

        let container = document.getElementById("container");

        gsap.to(container, {
          x: () => `${-(container.scrollWidth - document.documentElement.clientWidth)}px`,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${container.scrollWidth - document.documentElement.clientWidth}`
        }
    });
});


window.addEventListener("load", function() {
    const scrollColorElems = document.querySelectorAll(".horizontal-container");
    scrollColorElems.forEach((colorSection, i) => {
        var horizontalWidth = jQuery('.horizontal-container').outerWidth();
        var horizontalWidthMultiplied = horizontalWidth*5;
        
        const myTimeline = gsap.timeline({
  
            scrollTrigger: {
                trigger: ".horizontal-container",
                pin: false,
                scrub: true,
                start: "top",   
                end: () => `+=${horizontalWidthMultiplied}`
            }

        })

         myTimeline
         .to('.module', { duration: 1, backgroundColor: 'red', ease: "none" }, 0)
         .to('.module', { duration: 1, backgroundColor: 'orange', ease: "none" }, 1)
         .to('.module', { duration: 1, backgroundColor: 'yellow', ease: "none" }, 2)
         .to('.module', { duration: 1, backgroundColor: 'green', ease: "none" }, 3)
         .to('.module', { duration: 1, backgroundColor: 'darkblue', ease: "none" }, 4)
         .to('.module', { duration: 1, backgroundColor: 'purple', ease: "none" }, 5)
         .to('.bg-text', { duration: 1, color: '#FCDC3E', ease: "none" }, 0)
         .to('.bg-text', { duration: 1, color: '#de9f0d', ease: "none" }, 1)
    });
});
