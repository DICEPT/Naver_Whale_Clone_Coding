// 헤더 메뉴 서브 영역

let nav = document.querySelector('nav'),
    menu_top_btn = document.querySelector('.menu_top_btn');

menu_top_btn.addEventListener('mouseover', function(){
    nav.style.height = '290px';
});

menu_top_btn.addEventListener('mouseout', function(){
    nav.style.height = '90px';
});



// main_tasking 영역

document.querySelector('.main_tasking input[id="slide01"]').addEventListener('click', function () {
    document.querySelector('.main_tasking .inner_wide').style.transform = 'translate(0vw)';
});

document.querySelector('.main_tasking input[id="slide02"]').addEventListener('click', function () {
    document.querySelector('.main_tasking .inner_wide').style.transform = 'translate(-100%)';
});

document.querySelector('input[id="slide03"]').addEventListener('click', function () {
    document.querySelector('.main_tasking .inner_wide').style.transform = 'translate(-200%)';
});

document.querySelector('input[id="slide04"]').addEventListener('click', function () {
    document.querySelector('.main_tasking .inner_wide').style.transform = 'translate(-300%)';
});

document.querySelector('input[id="slide05"]').addEventListener('click', function () {
    document.querySelector('.main_tasking .inner_wide').style.transform = 'translate(-400%)';
});

// main_security 영역

document.querySelector('.main_security input[id="slide01"]').addEventListener('click', function () {
    document.querySelector('.main_security .inner_wide').style.transform = 'translate(0vw)';
});

document.querySelector('.main_security input[id="slide02"]').addEventListener('click', function () {
    document.querySelector('.main_security .inner_wide').style.transform = 'translate(-100%)';
});

document.querySelector('.main_security input[id="slide03"]').addEventListener('click', function () {
    document.querySelector('.main_security .inner_wide').style.transform = 'translate(-200%)';
});

// main_custom 영역

document.querySelector('.main_custom input[id="slide01"]').addEventListener('click', function () {
    document.querySelector('.main_custom .inner_wide').style.transform = 'translate(0vw)';
});

document.querySelector('.main_custom input[id="slide02"]').addEventListener('click', function () {
    document.querySelector('.main_custom .inner_wide').style.transform = 'translate(-100%)';
});

document.querySelector('.main_custom input[id="slide03"]').addEventListener('click', function () {
    document.querySelector('.main_custom .inner_wide').style.transform = 'translate(-200%)';
});