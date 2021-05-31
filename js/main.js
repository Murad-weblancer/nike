const burger = document.querySelector(".navbar__burger");
const list = document.querySelector(".navbar__list");
const body = document.body
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    list.classList.toggle('active');
    body.classList.toggle('disable-scroll');
})