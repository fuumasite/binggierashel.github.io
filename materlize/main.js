const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transtion: 600,
  interval: 3000,
});

const parallax = document.querySelector(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelector(".materialboxed");
M.Materialbox.init(materialbox);

const scroll = document.querySelector(".scrollspy");
M.ScrollSpy.init(scroll),
  {
    scrollOffset: 50,
  };

const carousel = document.querySelector(".carousel");
M.Carousel.init(carousel, {
  indicators: true,
});

AOS.init({
  once: true,
});
