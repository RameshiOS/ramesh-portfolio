document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.querySelector('.hero').style.transform = `translateY(${scrollPosition * 0.5}px)`;
});