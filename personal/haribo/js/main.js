$(document).ready(function () {
  // main jelly scroll ani
  gsap.registerPlugin(ScrollTrigger);

  let container = document.getElementById("scroll-container");
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
  
  const scrollColorElems = document.querySelectorAll(".horizontal-container");

  scrollColorElems.forEach((colorSection, i) => {
      let horizontalWidth = $('.horizontal-container').outerWidth();
      let horizontalWidthMultiplied = horizontalWidth*5;
      
      const myTimeline = gsap.timeline({
  
          scrollTrigger: {
              trigger: ".horizontal-container",
              pin: false,
              scrub: true,
              start: "top",   
              end: () => `+=${horizontalWidthMultiplied}`
          }

      });

      myTimeline
       .to('.section-bg', { duration: 1, backgroundColor: '#db0a19', ease: "none" }, 0)
       .to('.section-bg', { duration: 1, backgroundColor: '#e78508', ease: "none" }, 1)
       .to('.section-bg', { duration: 1, backgroundColor: '#58a425', ease: "none" }, 2)
       .to('.section-bg', { duration: 1, backgroundColor: '#0079bd', ease: "none" }, 3)
       .to('.section-bg', { duration: 1, backgroundColor: '#00216e', ease: "none" }, 4)
       .to('.bg-text', { duration: 1, color: '#FA9570', ease: "none" }, 0)
       .to('.bg-text', { duration: 1, color: '#de9f0d', ease: "none" }, 1)
    });

    let rotate = gsap.timeline({
      scrollTrigger:{
        trigger: ".module",
        scrub:0.5,
        start: 'top top +=200',
        end:'+=10000',
      }
    })
    .to('.module .content-box img', {
      rotation:-360*5,
      duration:1, ease:'none',
    })


    gsap.set('.module.type2 .content-box img', {rotate: -300});
    gsap.set('.module.type3 .content-box img', {rotate: 300});

});
