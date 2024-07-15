(function(){
    console.log('this')

    // header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        window.scrollY > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled');

    });

    document.addEventListener("DOMContentLoaded", function() {

        // 텍스트
        gsap.to(".movie__timeline-01", { opacity: 1, duration: 1 , y: 0,});
        gsap.to(".movie__timeline-02", { opacity: 1, duration: 1, y: 0, delay: 0.5 ,});
        gsap.to(".movie__timeline-03", { opacity: 1, duration: 1, y: 0, delay: 1 ,});
        gsap.to(".movie__timeline-04", { opacity: 1, duration: 1, delay: 1.25 ,});

        gsap.to(".obj", { opacity: 1, scale: 1 , duration: 2, delay: 1.5, ease: "elastic.out(1, 0.3)" });
        // 물방울
        gsap.to(".movie__timeline-05", { opacity: 1, scale: 1 , duration: 1.1, delay: 1.8, ease: "elastic.out(1, 0.3)" });
        gsap.to(".movie__timeline-06", { opacity: 1, scale: 1 , duration: 1.1, delay: 2, ease: "elastic.out(1, 0.3)" });
        gsap.to(".movie__timeline-07", { opacity: 1, scale: 1 , duration: 1.1, delay: 2.2, ease: "elastic.out(1, 0.3)" });
    });


   
    

})();