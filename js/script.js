const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll(".navlink");
nav.forEach(nav => {
    nav.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        nav.classList.add('active');
    })
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute("id"); }
    });

    nav.forEach(nav => {
        nav.classList.remove("active");
        if (nav.classList.contains(current)) {
            nav.classList.add("active");
        }
    });
};