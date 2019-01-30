//parallax effect
const parallaxBg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', parallax);
let didScroll = false;

function parallax() {
  didScroll = true;
}

setInterval(() => {
  if (didScroll) {
    let scroll = window.scrollY;
    parallaxBg.style.backgroundPosition = 'center ' + scroll * 0.45 + 'px';
    didScroll = false;
    console.log('you scrolled');
  }
}, 9);
