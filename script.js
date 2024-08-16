// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page4Animation() {
  let elemC = document.querySelector("#elem-container");
  let fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  let elems = document.querySelectorAll(".elem");

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      fixed.style.backgroundImage = `url(${elem.getAttribute("data-image")}`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = "0";
      navimg.style.opacity = "0";
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });

  let menuIcon = document.querySelector(".menuIcon");

  menu.addEventListener("click", function () {
    menuIcon.classList.toggle("activeMenu");
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
    // loader.style.display = "none";
  }, 4200);
}

loaderAnimation();
menuAnimation();
swiperAnimation();
page4Animation();
