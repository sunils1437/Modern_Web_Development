// import LocomotiveScroll from 'locomotive-scroll';

// Scroll Effect
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


// Mouse Circle 
let timeout;
function circlestrech(){
    //define default scale value
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollow(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}
function circleMouseFollow(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY)
    document.querySelector("#minicircle").style.display = "block";
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
  document.addEventListener("mouseout", function (event) {
    document.querySelector("#minicircle").style.display = "none";
  });
}
circlestrech();

// Bounding Effect
function firstPageAnim() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  .to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: .2
  })
  .from("#herofooter", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut
  })
}
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        }); 
    });
    elem.addEventListener("mousemove", function (dets) {
        var diffT = dets.clientY - elem.getBoundingClientRect().top - 302 / 2;
        var diffL = dets.clientX - elem.getBoundingClientRect().left - 400 / 2;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diffT,
            left: diffL,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        }); 
    });
});
