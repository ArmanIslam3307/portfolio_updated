// NAV SHRINK
const navbar=document.querySelector('nav');
window.addEventListener('scroll',()=>{navbar.style.padding=window.scrollY>40?'10px 24px':'';navbar.style.paddingLeft=window.scrollY>40?'24px':'';navbar.style.paddingRight=window.scrollY>40?'24px':'';});

// MOBILE MENU
function toggleMenu(){const m=document.getElementById('mobile-menu');m.classList.toggle('open');}