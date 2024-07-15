(function(){
    console.log('this');

    // header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        window.scrollY > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    });

    const texts = document.querySelectorAll("svg.text__motion text");
    let x = 10; // 초기 x 위치

    texts.forEach((text, index) => {
        text.setAttribute("x", x);
        const textWidth = text.getBBox().width;
        x += textWidth; // 글자 간 간격을 추가
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add('onload');

        const element = document.querySelector('.warwrap');
        
        function toggleActiveClass() {
            element.classList.remove('active');
            setTimeout(() => {
                element.classList.add('active');
            }, 10);
        }

        setTimeout(() => {
            toggleActiveClass();
            setInterval(toggleActiveClass, 3000);
        }, 4000);
    });
})();
