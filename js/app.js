//parallax effect
const parallaxBg = document.querySelector('.parallax-bg');
const parallaxBg2 = document.querySelector('.parallax-bg2');
window.addEventListener('scroll', _.debounce(parallax));

function parallax() {
  let scroll = window.scrollY;
  parallaxBg.style.backgroundPosition = 'center ' + scroll * 0.45 + 'px';
  //parallax for testimonial background
  let windowWidth = window.innerWidth;
  let coords = '0% ' + (-(scroll * 0.3 - 750) + 'px');
  //image starts to repeat at t
  if (windowWidth >= 770) {
    parallaxBg2.style.backgroundPosition = coords;
  }
}

//hamburger menu toggle
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('main-nav-open');
  menu.classList.toggle('open');
});
