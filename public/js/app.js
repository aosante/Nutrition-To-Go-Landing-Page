//parallax effect
const parallaxBg = document.querySelector('.parallax-bg');
const parallaxBg2 = document.querySelector('.parallax-bg2');
window.addEventListener('scroll', _.throttle(parallax, 10));

function parallax() {
  let scroll = window.scrollY;
  parallaxBg.style.backgroundPosition = 'center ' + scroll * 0.45 + 'px';
  //parallax for testimonial background
  let windowWidth = window.innerWidth;
  let coords = '0% ' + (-(scroll * 0.3 - 750) + 'px');
  //image starts to repeat at t
  if (windowWidth >= 765) {
    parallaxBg2.style.backgroundPosition = coords;
  }
}
//hamburger menu toggle
//--------------------------------------------------------------------
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('main-nav-open');
  menu.classList.toggle('open');
});
//--------------------------------------------------------------------

//hide hamburger navigation after user clicks a link
const windowWidth = window.innerWidth;
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    if (windowWidth < 760) {
      nav.classList.remove('main-nav-open');
      menu.classList.remove('open');
    }
  });
});
//--------------------------------------------------------------------
//animations on scroll
window.addEventListener('scroll', activateAnimation);
function activateAnimation() {
  const animatedParents = document.querySelectorAll('.animated-parent');
  animatedParents.forEach(parent => {
    animate(parent);
  });
}

const animate = elem => {
  //activate at half of the container
  let activateAt = window.scrollY + window.innerHeight - elem.scrollHeight / 2;
  //distance from the bottom of the container to the top
  const divBottom = elem.offsetTop + elem.scrollHeight;
  //true if element is half shown
  let halfShown = activateAt > elem.offsetTop;
  let isNotGone = window.scrollY < divBottom;
  const children = elem.children;
  Array.from(children).forEach(child => {
    if (halfShown && isNotGone) {
      child.classList.add('triggered');
    }
  });
};

// exclusive animation for premium pricing plan
window.addEventListener('scroll', activatePlanAnimation);

function activatePlanAnimation() {
  const plan = document.querySelector('#premium-plan');
  let activateAt = window.scrollY + window.innerHeight - plan.scrollHeight / 2;
  const divBottom = plan.offsetTop + plan.scrollHeight;
  let halfShown = activateAt > plan.offsetTop;
  let isNotGone = window.scrollY < divBottom;
  if (halfShown && isNotGone) {
    plan.classList.add('premium-triggered');
  }
}

//---------------------------------------------------------

//Sticky navbar on certain scroll position--------------------
const heroSection = document.querySelector('header');
function addFixedNav() {
  const navig = document.querySelector('nav');
  const logo = document.querySelector('.sticky-logo');
  let scroll = window.scrollY;
  let heroBottom = heroSection.offsetTop + heroSection.scrollHeight;
  if (scroll > heroBottom) {
    navig.classList.add('sticky');
    logo.setAttribute('id', 'logo');
  } else {
    navig.classList.remove('sticky');
    logo.removeAttribute('id');
  }
}
window.addEventListener('scroll', _.throttle(addFixedNav, 100));

//---------------------------------------------------------
