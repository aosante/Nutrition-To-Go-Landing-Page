//parallax effect
const parallaxBg = document.querySelector('.parallax-bg');
const parallaxBg2 = document.querySelector('.parallax-bg2');
window.addEventListener('scroll', _.debounce(parallax));

function parallax() {
  let windowWidth = window.innerWidth;
  let scroll = window.scrollY;
  parallaxBg.style.backgroundPosition = 'center ' + scroll * 0.45 + 'px';
  switch (true) {
    case windowWidth >= 1180:
      parallaxBg2.style.backgroundPosition =
        'center ' + (scroll - 3500) * 0.25 + 'px';
      break;
    case windowWidth < 1180 && windowWidth > 1050:
      parallaxBg2.style.backgroundPosition =
        'center ' + (scroll - 900) * 0.25 + 'px';
      break;
    case windowWidth < 940:
      parallaxBg2.style.backgroundPosition =
        'center ' + (scroll - 1380) * 0.25 + 'px';
  }
}
