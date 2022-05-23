const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highLightMenu = () => {
  const elen = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const serviceMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  // adds 'highligh' class to my menu items

  if ((window.innerWidth > 960) & (scrollPos < 600)) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    serviceMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.add("highlight");
    serviceMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    homeMenu.classList.remove("highlight");
    serviceMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elen && window.innerWidth < 960 && scrollPos < 600) || elen) {
    elen.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highLightMenu);
window.addEventListener("click", highLightMenu);

// Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
menuLinks.addEventListener("click", hideMobileMenu);
