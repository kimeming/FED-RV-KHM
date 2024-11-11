//FOOTER 
jQuery(document).ready(function(){
    footerHeight();
    jQuery(window).resize(function(){
        footerHeight();
    });
});

function footerHeight() {
    setTimeout(function(){ 
        var footerHeight = jQuery('footer').outerHeight();
        jQuery('body.gradient').css('padding-bottom', footerHeight);
    }, 500);    
}

jQuery(document).ready(function(){ 

    const popuptimeline = gsap.timeline({});
    
    jQuery('.success.popup .close-success').click(function(){
        popuptimeline.to(".success.popup", {
           rotate: 360,
            scale: 0
        });
    });
    
});

//BLOG

jQuery(document).ready(function(){
    
    if(jQuery('body').hasClass('article')) {
        var distance = jQuery('.article-template__content').offset().top,
        $window = jQuery(window);

        $window.scroll(function() {
            if ( $window.scrollTop() >= distance ) {
                jQuery('.article-template__hero-container').hide();
            } else {
                jQuery('.article-template__hero-container').show();
            }
        });
    }
    
    jQuery('.horizontal-container').parent().parent().addClass('home-featured-product-container');
    
});


gsap.registerPlugin(ScrollTrigger)

//CART MODAL
const tl = gsap.timeline({});

gsap.set(".cart-modal", {
  duration: 0,
  xPercent: 100,
  autoAlpha: 0,
});

jQuery(document).on("cart.requestComplete", function (event, cart) {
  tl.to(".cart-modal", {
    duration: 0,
    autoAlpha: 1,
  }).to(".cart-modal", {
    duration: 0.4,
    xPercent: 0,
    ease: "circ.out",
  });
});

function handleModalOpen() {
  tl.to(".cart-modal", {
    duration: 0,
    autoAlpha: 1,
  }).to(".cart-modal", {
    duration: 0.4,
    xPercent: 0,
    ease: "circ.out",
  });
}

function handleModalClose() {
  tl.to(".cart-modal", {
    duration: 0.4,
    xPercent: 100,
    ease: "circ.out",
  });
}

//scroll animation
const imgArea = gsap.utils.toArray('.scroll-content .img-area>span'),
txtArea = gsap.utils.toArray('.scroll-content .txt-area'),
bgTxt = gsap.utils.toArray('.scroll-content .bg-txt');

let mm = gsap.matchMedia();
ScrollTrigger.saveStyles(".scroll-content .img-area>span, .scroll-content .txt-area, .scroll-content .img-area>span");

function completeFunction() {
let targets = this.targets();
targets.forEach((target) => {
    target.style.removeProperty("opacity");
    target.style.removeProperty("transform");
});
}
mm.add("(max-width: 1200px)", () => {
// img animation
imgArea.forEach(img => {
    gsap.to(img, {
        scale: 1.2,
        scrollTrigger: {
            trigger: img,
            scrub: 2,
            start: 'top center',
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
// text animation
txtArea.forEach(txt => {
    gsap.to(txt, {
        yPercent: -50,
        scrollTrigger: {
            trigger: txt,
            scrub: 1,
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
// bg animation
bgTxt.forEach(bg => {
    gsap.to(bg, {
        scale: 1.1,
        y: -20,
        scrollTrigger: {
            trigger: bg,
            scrub: 3,
            start: 'top center',
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
});

mm.add("(min-width: 1200px)", () => {
// img animation
imgArea.forEach(img => {
    gsap.to(img, {
        scale: 1.2,
        scrollTrigger: {
            trigger: img,
            scrub: 3,
            start: 'top center',
            ease: 'Power1',
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
// text animation
txtArea.forEach(txt => {
    gsap.to(txt, {
        yPercent: -60,
        scrollTrigger: {
            trigger: txt,
            scrub: 1,
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
// bg animation
bgTxt.forEach(bg => {
    gsap.to(bg, {
        scale: 1.1,
        y: -20,
        scrollTrigger: {
            trigger: bg,
            scrub: 3,
            start: 'top center',
            onComplete: function () {
                completeFunction();
            }
        }
    });
});
});


//HOME ANIMATIONS 

if(jQuery('body').hasClass('home')) {
    
    jQuery(document).mousemove(function(event){

    var xPos = (event.clientX/jQuery(window).width())-0.5,
    yPos = (event.clientY/jQuery(window).height())-0.5;
  
      jQuery("#home-cheesy-nooch").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            y: xPos * 100, 
            x: yPos * 100,
            rotate: yPos * 10,
            ease: Power1.easeOut,
        });
      })  

      jQuery("#home-bacon-nooch").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            x: xPos * 100, 
            y: yPos * 100,
            rotate: xPos * 10,
            ease: Power1.easeOut,
        });
      }) 
        
      jQuery("#home-super-nooch").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            x: xPos * 100, 
            y: yPos * 100,
            rotate: xPos * 10,
            ease: Power1.easeOut,
        });
      }) 

      jQuery("#star-one").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            x: xPos * 120, 
            y: yPos * 120,
            ease: Power1.easeOut,
        });
      }) 

      jQuery("#star-two").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            y: xPos * 150, 
            x: yPos * 150,
            ease: Power1.easeOut,
        });
      }) 
      jQuery("#star-three").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            y: xPos * 80, 
            x: yPos * 80,
            ease: Power1.easeOut,
        });
      }) 
      jQuery(".home-section h1").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            y: xPos * 20, 
            x: yPos * 20,
            ease: Power1.easeOut,
        });
      }) 
      jQuery("#nooch-home-man").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            x: xPos * 20, 
            y: yPos * 20,
            ease: Power1.easeOut,
        });
      })   

    });
    
    
    let container = document.getElementById("container");

    gsap.to(container, {
      x: () => `${-(container.scrollWidth - document.documentElement.clientWidth)}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 0.2,
        start: "top top",
        end: () => `+=${container.scrollWidth - document.documentElement.clientWidth}`
      }
    });

    window.addEventListener("load", function() {
      const scrollColorElems = document.querySelectorAll(".horizontal-container .module");
      scrollColorElems.forEach((colorSection, i) => {
//        ScrollTrigger.create({
//          trigger: colorSection,
//          start: "bottom +50%",
//          onEnter: () => gsap.to(".home-featured-product", {backgroundColor: '#006450', overwrite: 'auto'}),
//          onLeaveBack: () => gsap.to(".home-featured-product", {backgroundColor: '#CE0F69', overwrite: 'auto'}),
//          markers:true
//        });
    
//          ScrollTrigger.create({
//          trigger: colorSection,
//          start: "bottom +50%",
//          onEnter: () => gsap.to(".home-featured-product", {backgroundColor: '#006450', overwrite: 'auto'}),
//          onLeaveBack: () => gsap.to(".home-featured-product", {backgroundColor: '#CE0F69', overwrite: 'auto'}),
//          markers:true
//        });
          
//        ScrollTrigger.create({
//          trigger: colorSection,
//          start: "right 50%",
//          onEnter: () => gsap.to(".home-featured-product", {backgroundColor: '#CE0F69', overwrite: 'auto'}),
//          onLeaveBack: () => gsap.to(".home-featured-product", {backgroundColor: '#0b3a94', overwrite: 'auto'})
//        });
//          
//        ScrollTrigger.create({
//          trigger: colorSection,
//          start: "bottom +50%",
//          onEnter: () => gsap.to(".lettering-container p", {color: '#FCDC3E', overwrite: 'auto'}),
//          onLeaveBack: () => gsap.to(".lettering-container p", {color: '#F7CED7', overwrite: 'auto'})
//        });
      });
        
        
        var horizontalWidth = jQuery('.horizontal-container').outerWidth();
        var horizontalWidthMultiplied = horizontalWidth*2;
        
        console.log(horizontalWidthMultiplied);
        
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
         .to('.home-featured-product', { duration: 1, backgroundColor: '#006450', ease: "none" }, 0)
         .to('.home-featured-product', { duration: 1, backgroundColor: '#cd0e0f', ease: "none" }, 1)
         .to('.lettering-container p', { duration: 1, color: '#FCDC3E', ease: "none" }, 0)
         .to('.lettering-container p', { duration: 1, color: '#de9f0d', ease: "none" }, 1)
        

      // HOME SMOKY PACKET
        var rotate = gsap.timeline({
          scrollTrigger:{
            trigger: ".home-featured-product",
            scrub:0.5,
            start: 'top top +=200',
            end:'+=10000',
          }
        })
        .to('.home-featured-product.bacon .content-container img', {
          rotation:-360*5,
          duration:1, ease:'none',
        })


        gsap.set('.home-featured-product.cheese .content-container img', {rotate:-300});

        gsap.set('.home-featured-product.super .content-container img', {rotate:300});

        
        
        homeCheeseDesktop()
        
        jQuery(window).resize(function(){
            homeCheeseDesktop()
        });
        
        function homeCheeseDesktop() {
            
            var superrotate = gsap.timeline({
                  scrollTrigger:{
                    trigger: "main",
                    scrub:0.2,
                    start: 'top top',
                    end:'+=10000',
                  }
                })
                .to('.home-featured-product.super .content-container img', {
                  rotation:360*7, ease:'none',
                })
            
//            var horizontalWidth = jQuery('.horizontal-container').outerWidth();
//            var horizontalWidthMultiplied = horizontalWidth*2;
//            
//            // HOME SUPER PACKET
//            var superrotate = gsap.timeline({
//              scrollTrigger:{
//                trigger: ".home-featured-product.super .content-container img",
//                scrub:0.5,
//                start: () => `+=${horizontalWidth}`,
//                end: () => `+=${horizontalWidthMultiplied}`
//              }
//            })
//            .to('.home-featured-product.super .content-container img', {
//              rotation:-360,ease:'none',
//            })
            
            if(jQuery(window).width() > 900) {
                // HOME CHEESE PACKET
                var rotate = gsap.timeline({
                  scrollTrigger:{
                    trigger: ".home-featured-product",
                    scrub:0.5,
                    start: "bottom +25%",
                    end: "bottom 0%",
                  }
                })
                .to('.home-featured-product.cheese .content-container img', {
                  rotation:-360,
                  duration:1, ease:'none',
                })
                
                
                
                                

                
                
            }
            if((jQuery(window).width() < 900) && (jQuery(window).width() > 767)) {
                // HOME CHEESE PACKET
                var rotate = gsap.timeline({
                  scrollTrigger:{
                    trigger: ".home-featured-product",
                    scrub:0.5,
                    start: "bottom +55%",
                    end: "bottom +200",
                  }
                })
                .to('.home-featured-product.cheese .content-container img', {
                  rotation:-360,
                  duration:1, ease:'none',
                })
            }
            if((jQuery(window).width() < 768) && (jQuery(window).width() > 100)) {
                // HOME CHEESE PACKET
                var rotate = gsap.timeline({
                  scrollTrigger:{
                    trigger: ".home-featured-product",
                    scrub:0.5,
                    start: "bottom +75%",
                    end: "bottom +400",
                  }
                })
                .to('.home-featured-product.cheese .content-container img', {
                  rotation:-360,
                  duration:1, ease:'none',
                })
            }
            
        }
        
        

    });
    
}


//PAGES

let presscontent = document.getElementById("press-content");

if (jQuery(presscontent).length > 0 ) {
    
    //PRESS SIDE SCROLLING
    function pressScrolling() {

        gsap.to(presscontent, {
          x: () => `${-(presscontent.scrollWidth - document.documentElement.clientWidth)}px`,
          ease: "none",
          scrollTrigger: {
            trigger: presscontent,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 0.2,
            start: "top top",
            end: () => `+=${presscontent.scrollWidth - document.documentElement.clientWidth}`
          }
        });
    }

    jQuery(document).ready(function(){

        if(jQuery(window).width() > 991) {
            pressScrolling(); 
        } else {
    //        do nothing
        }

        var currentWidth = jQuery(window).width();

        jQuery(window).resize(function(){

            if((jQuery(window).width() > 990) && (currentWidth <= 990)) {
                pressScrolling();
            } else {
                TweenMax.killTweensOf(presscontent);
            }
            currentWidth = jQuery(window).width();
        });

    });

    //PRESS SIDE SCROLLING --- END
    
    jQuery(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 350;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            jQuery('.top').css('right','0');
        } else {
            jQuery('.top').css('right','-200px');
        }
    });
    
    
}

//STORY

let tumbleweed = document.getElementById("tumbleweed");

if(jQuery(tumbleweed).length > 0) {
    
    jQuery(document).ready(function(){

       var windowWidth = jQuery(window).outerWidth();

       var tumbleweed = gsap.timeline({
          scrollTrigger:{
            trigger: "#tumbleweed",
            scrub:0.5,
            start: 'top bottom',
            end:'bottom top',
          }
        })
        .to('#tumbleweed', 5, {
            x: windowWidth,
            rotation:-360*3,
            duration:1, ease:'none',
        })
       
        gsap.to("#tumbleweed", {duration: 0.6, y:120, ease:"circ.in", repeat:-1, yoyo:true})

        var tl = new TimelineMax({repeat:-1});
        
    });
}

let plainNooch = document.getElementById("plainnooch");

if(jQuery(plainNooch).length > 0) {
    
    jQuery(document).ready(function(){
        
        gsap.to('#plainnooch', {
          rotate: 110,
          ease: "none",
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
            scrub: true
          }
        })
        gsap.to('#plainnooch2', {
          rotate: -110,
          ease: "none",
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
            scrub: true
          }
        })
        
        
        //DUST - LEFT
         
        var dustStart = "bottom center";
        var shouldstop = false;
        
        let tlone = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineOne,
          }
        });
        let tltwo = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwo,
          }
        });
        let tlthree = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineThree,
          }
        });
        let tlfour = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineFour,
          }
        });
        let tlfive = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineFive,
          }
        });
        let tlsix = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineSix,
          }
        });
        let tlseven = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineSeven,
          }
        });
        let tleight = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineEight,
          }
        });
        let tlnine = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineNine,
          }
        });
        let tlten = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTen,
          }
        });
        
        if (jQuery(window).width() < 700) {
            var dustOneX = 250;
            var dustTwoX = 230;
            var dustThreeX = 280;
            var dustFourX = 250;
            var dustFiveX = 270;
            var dustSixX = 210;
            var dustSevenX = 250;
            var dustEightX = 280;
            var dustNineX = 250;
            var dustTenX = 280;
        }
        else {
            var dustOneX = 500;
            var dustTwoX = 530;
            var dustThreeX = 580;
            var dustFourX = 550;
            var dustFiveX = 670;
            var dustSixX = 610;
            var dustSevenX = 500;
            var dustEightX = 480;
            var dustNineX = 450;
            var dustTenX = 530;
        }

        tlone.to('.dustone', {
            ease: "power1.in", y: 300, x: dustOneX, repeat: -1, onRepeat:checkShouldStopOne, duration: 4, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwo.to('.dusttwo', {
            ease: "power1.in", y: 300, x: dustTwoX, repeat: -1, onRepeat:checkShouldStopTwo, duration: 4.2, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tlthree.to('.dustthree', {
            ease: "power1.in", y: 300, x: dustThreeX, repeat: -1, onRepeat:checkShouldStopThree, duration: 5.5, delay: 2, rotate: 90, opacity: 1,
        }, 1)
        tlfour.to('.dustfour', {
            ease: "power1.in", y: 300, x: dustFourX, repeat: -1, onRepeat:checkShouldStopFour, duration: 4.6, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tlfive.to('.dustfive', {
            ease: "power1.in", y: 300, x: dustFiveX, repeat: -1, onRepeat:checkShouldStopFive, duration: 4.1, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tlsix.to('.dustsix', {
            ease: "power1.in", y: 300, x: dustSixX, repeat: -1, onRepeat:checkShouldStopSix, duration: 3.7, delay: 1, rotate: 90, opacity: 1,
        }, 1)
        tlseven.to('.dustseven', {
            ease: "power1.in", y: 300, x: dustSevenX, repeat: -1, onRepeat:checkShouldStopSeven, duration: 3.8, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tleight.to('.dusteight', {
            ease: "power1.in", y: 300, x: dustEightX, repeat: -1, onRepeat:checkShouldStopEight, duration: 3.9, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tlnine.to('.dustnine', {
            ease: "power1.in", y: 300, x: dustNineX, repeat: -1, onRepeat:checkShouldStopNine, duration: 4.4, delay: 3, rotate: 90, opacity: 1,
        }, 1)
        tlten.to('.dustten', {
            ease: "power1.in", y: 300, x: dustTenX, repeat: -1, onRepeat:checkShouldStopTen, duration: 4.2, delay: 0, rotate: 90, opacity: 1,
        }, 1)
    

        function stopTimelineOne() {
            console.log('stop');
            shouldstopone = true;
        }
        function stopTimelineTwo() {
            console.log('stop');
            shouldstoptwo = true;
        }
        function stopTimelineThree() {
            console.log('stop');
            shouldstopthree = true;
        }
        function stopTimelineFour() {
            console.log('stop');
            shouldstopfour = true;
        }
        function stopTimelineFive() {
            console.log('stop');
            shouldstopfive = true;
        }
        function stopTimelineSix() {
            console.log('stop');
            shouldstopsix = true;
        }
        function stopTimelineSeven() {
            console.log('stop');
            shouldstopseven = true;
        }
        function stopTimelineEight() {
            console.log('stop');
            shouldstopeight = true;
        }
        function stopTimelineNine() {
            console.log('stop');
            shouldstopnine = true;
        }
        function stopTimelineTen() {
            console.log('stop');
            shouldstopten = true;
        }
        function checkShouldStopOne() {
          if (shouldstopone)
            tlone.pause();
        }
        function checkShouldStopTwo() {
          if (shouldstoptwo)
            tltwo.pause();
        }
        function checkShouldStopThree() {
          if (shouldstopthree)
            tlthree.pause();
        }
        function checkShouldStopFour() {
          if (shouldstopfour)
            tlfour.pause();
        }
        function checkShouldStopFive() {
          if (shouldstopfive)
            tlfive.pause();
        }
        function checkShouldStopSix() {
          if (shouldstopsix)
            tlsix.pause();
        }
        function checkShouldStopSeven() {
          if (shouldstopseven)
            tlseven.pause();
        }
        function checkShouldStopEight() {
          if (shouldstopeight)
            tleight.pause();
        }
        function checkShouldStopNine() {
          if (shouldstopnine)
            tlnine.pause();
        }
        function checkShouldStopTen() {
          if (shouldstopten)
            tlten.pause();
        }
        
        // DUST - LEFT - END
        
        // DUST - RIGHT
        
        let tltwoone = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoOne,
          }
        });
        let tltwotwo = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoTwo,
          }
        });
        let tltwothree = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoThree,
          }
        });
        let tltwofour = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoFour,
          }
        });
        let tltwofive = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoFive,
          }
        });
        let tltwosix = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoSix,
          }
        });
        let tltwoseven = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoSeven,
          }
        });
        let tltwoeight = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoEight,
          }
        });
        let tltwonine = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoNine,
          }
        });
        let tltwoten = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimelineTwoTen,
          }
        });

        tltwoone.to('.dusttwoone', {
            ease: "power1.in", y: 300, x: -dustOneX, repeat: -1, onRepeat:checkShouldStopTwoOne, duration: 4, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwotwo.to('.dusttwotwo', {
            ease: "power1.in", y: 300, x: -dustTwoX, repeat: -1, onRepeat:checkShouldStopTwoTwo, duration: 4.2, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwothree.to('.dusttwothree', {
            ease: "power1.in", y: 300, x: -dustThreeX, repeat: -1, onRepeat:checkShouldStopTwoThree, duration: 5.5, delay: 2, rotate: 90, opacity: 1,
        }, 1)
        tltwofour.to('.dusttwofour', {
            ease: "power1.in", y: 300, x: -dustFourX, repeat: -1, onRepeat:checkShouldStopTwoFour, duration: 4.6, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwofive.to('.dusttwofive', {
            ease: "power1.in", y: 300, x: -dustFiveX, repeat: -1, onRepeat:checkShouldStopTwoFive, duration: 4.1, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwosix.to('.dusttwosix', {
            ease: "power1.in", y: 300, x: -dustSixX, repeat: -1, onRepeat:checkShouldStopTwoSix, duration: 3.7, delay: 1, rotate: 90, opacity: 1,
        }, 1)
        tltwoseven.to('.dusttwoseven', {
            ease: "power1.in", y: 300, x: -dustSevenX, repeat: -1, onRepeat:checkShouldStopTwoSeven, duration: 3.8, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwoeight.to('.dusttwoeight', {
            ease: "power1.in", y: 300, x: -dustEightX, repeat: -1, onRepeat:checkShouldStopTwoEight, duration: 3.9, delay: 0, rotate: 90, opacity: 1,
        }, 1)
        tltwonine.to('.dusttwonine', {
            ease: "power1.in", y: 300, x: -dustNineX, repeat: -1, onRepeat:checkShouldStopTwoNine, duration: 4.4, delay: 3, rotate: 90, opacity: 1,
        }, 1)
        tltwoten.to('.dusttwoten', {
            ease: "power1.in", y: 300, x: -dustTenX, repeat: -1, onRepeat:checkShouldStopTwoTen, duration: 4.2, delay: 0, rotate: 90, opacity: 1,
        }, 1)
    

        function repeatTimeline() {
            console.log('repeat');
            shouldstopone = false;
            shouldstoptwo = false;
            shouldstopthree = false;
            shouldstopfour = false;
            shouldstopfive = false;
            shouldstopsix = false;
            shouldstopseven = false;
            shouldstopeight = false;
            shouldstopnine = false;
            shouldstopten = false;
            shouldstoptwoone = false;
            shouldstoptwotwo = false;
            shouldstoptwothree = false;
            shouldstoptwofour = false;
            shouldstoptwofive = false;
            shouldstoptwosix = false;
            shouldstoptwoseven = false;
            shouldstoptwoeight = false;
            shouldstoptwonine = false;
            shouldstoptwoten = false;
        }
        function stopTimelineTwoOne() {
            console.log('stop');
            shouldstoptwoone = true;
        }
        function stopTimelineTwoTwo() {
            console.log('stop');
            shouldstoptwotwo = true;
        }
        function stopTimelineTwoThree() {
            console.log('stop');
            shouldstoptwothree = true;
        }
        function stopTimelineTwoFour() {
            console.log('stop');
            shouldstoptwofour = true;
        }
        function stopTimelineTwoFive() {
            console.log('stop');
            shouldstoptwofive = true;
        }
        function stopTimelineTwoSix() {
            console.log('stop');
            shouldstoptwosix = true;
        }
        function stopTimelineTwoSeven() {
            console.log('stop');
            shouldstoptwoseven = true;
        }
        function stopTimelineTwoEight() {
            console.log('stop');
            shouldstoptwoeight = true;
        }
        function stopTimelineTwoNine() {
            console.log('stop');
            shouldstoptwonine = true;
        }
        function stopTimelineTwoTen() {
            console.log('stop');
            shouldstoptwoten = true;
        }
        function checkShouldStopTwoOne() {
          if (shouldstoptwoone)
            tltwoone.pause();
        }
        function checkShouldStopTwoTwo() {
          if (shouldstoptwotwo)
            tltwotwo.pause();
        }
        function checkShouldStopTwoThree() {
          if (shouldstoptwothree)
            tltwothree.pause();
        }
        function checkShouldStopTwoFour() {
          if (shouldstoptwofour)
            tltwofour.pause();
        }
        function checkShouldStopTwoFive() {
          if (shouldstoptwofive)
            tltwofive.pause();
        }
        function checkShouldStopTwoSix() {
          if (shouldstoptwosix)
            tltwosix.pause();
        }
        function checkShouldStopTwoSeven() {
          if (shouldstoptwoseven)
            tltwoseven.pause();
        }
        function checkShouldStopTwoEight() {
          if (shouldstoptwoeight)
            tltwoeight.pause();
        }
        function checkShouldStopTwoNine() {
          if (shouldstoptwonine)
            tltwonine.pause();
        }
        function checkShouldStopTwoTen() {
          if (shouldstoptwoten)
            tltwoten.pause();
        }
        
        // DUST - LEFT - END
        
    
//        gsap.to('.toasted .dust', {
//          ease: "power1.in", y: 300,x: -500,repeat: -1,duration: 4, delay:2, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dusttwo', {
//          ease: "power1.in",y: 300,x: -530,repeat: -1,duration: 4.2, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustthree', {
//          ease: "power1.in",y: 300,x: -580,repeat: -1,duration: 5.5,delay:2, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustfour', {
//          ease: "power1.in",y: 300,x: -550,repeat: -1,duration: 4.6, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustfive', {
//          ease: "power1.in",y: 300,x: -670,repeat: -1,duration: 4.1, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustsix', {
//          ease: "power1.in",y: 300,x: -610,repeat: -1,duration: 3.7, delay:1, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustseven', {
//          ease: "power1.in",y: 300,x: -500,repeat: -1,duration: 3.8, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dusteight', {
//          ease: "power1.in",y: 300,x: -480,repeat: -1,duration: 3.9, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustnine', {
//          ease: "power1.in",y: 300,x: -450,repeat: -1,duration: 4.4,delay:3, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })
//        gsap.to('.toasted .dustten', {
//          ease: "power1.in",y: 300,x: -530,repeat: -1,duration: 4.2, rotate: 90,
//          scrollTrigger: {
//            trigger: "#plainnooch",
//            start: "top bottom",
//            end: "bottom center",
//          }
//        })

    });
}

//STORY BACKGROUND CHANGE

if (jQuery('body').hasClass('story')) {
    const sections = gsap.utils.toArray(".panel");
    const container = document.querySelector('#MainContent');

    const backgroundChange = gsap.timeline({

        scrollTrigger: {
        trigger: "#process",
        scrub: true,
        end: () => `+=${container.offsetWidth}`

      }

    })

     backgroundChange
     .to(container, { duration: 3, backgroundColor: '#CE0F69', ease: "none" }, 0)
}















