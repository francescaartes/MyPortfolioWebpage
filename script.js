const navbar = document.querySelector(".navbar");
const openBtn = document.querySelector("#open-nav");
const closeBtn = document.querySelector("#close-nav");

openBtn.onclick = openSidebar;
closeBtn.onclick = closeSidebar;

function openSidebar() {
    navbar.style.right = 0;
    closeBtn.style.display = 'initial';
    openBtn.style.display = 'none';
}

function closeSidebar() {
    navbar.style.right = '-100%';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'initial';
}

window.addEventListener('resize', checkVW);

function checkVW() {
    if (window.innerWidth > 768) {
        closeBtn.style.display = 'none';
        openBtn.style.display = 'none';
    } else {
        closeBtn.style.display = 'none';
        openBtn.style.display = 'flex';
    }
}