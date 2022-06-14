//------------------- Swiper config  ------------------ //

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

//------------------- accordion boxes ------------------ //

const box = document.querySelectorAll(".box");
const boxContent = document.querySelectorAll(".box-content");
const icon = document.querySelectorAll(".box-head i");
const firstBoxContent = document.querySelectorAll(".box-content")[0];
const showBoxContent = "active";

box.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (!boxContent[i].classList.contains(showBoxContent)) {
      boxContent[i].classList.add(showBoxContent);
      boxContent[i].style.height = boxContent[i].scrollHeight + "px";
      icon[i].classList.replace("uil-angle-down", "uil-angle-up");
    } else {
      boxContent[i].classList.remove(showBoxContent);
      boxContent[i].style.height = 0;
      icon[i].classList.replace("uil-angle-up", "uil-angle-down");
    }
  });
});

//------------------- Loading content ------------------ //

const spinnerContainer = document.querySelector(".spinner__container");
const spinner = document.querySelector(".spinner");

document.addEventListener("DOMContentLoaded", function (e) {
  spinnerContainer.classList.add("spinner__container");
  spinner.classList.add("spinner__on");
});

window.addEventListener("load", function (e) {
  spinnerContainer.classList.remove("spinner__container");
  spinner.classList.replace("spinner__on", "spinner__off");
});

//------------------- Responsive Navbar  ------------------ //

const header = document.querySelector(".header");
const newHeaderColor = "var(--container-color-3)";
const originalHeaderColor = "transparent";

const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const links = document.querySelectorAll(".nav-items a");

const navItems = document.querySelector(".nav-items");

btnOpen.addEventListener("click", () => {
  navItems.style.left = "0";
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
  header.style.background = newHeaderColor;
});

btnClose.addEventListener("click", () => {
  navItems.style.left = "-100%";
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
  header.style.background = originalHeaderColor;
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.style.left = "-100%";
    btnClose.style.display = "none";
    btnOpen.style.display = "block";
    header.style.background = originalHeaderColor;
  });
});

//------------------- Reveal animation  ------------------ //

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(
  ".header , .hero ,.trending__section  , .category__section , .artists__section , .faq__section , .footer",
  {
    interval: 500,
    cleanup: true,
  }
);

ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1000,
}).reveal(".trending-project   , .artists-container , .box", {
  interval: 500,
  cleanup: true,
});

//------------------- Navbar Shadow ------------------ //

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = " rgba(0, 0, 0, 0.24) 0px 3px 8px";
  } else {
    header.style.boxShadow = "none";
  }
  console.log(window.scrollY);
});
