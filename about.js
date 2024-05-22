// //////////////////////////
// SERVICES SLIDER
// ////////////////////////

const slider3column = function () {
  const allSlides = document.querySelectorAll(".section--services__slides");

  let curSlide = 0;
  const maxSlide = allSlides.length - 1;

  const goToSlide = function (slide) {
    allSlides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  goToSlide(0);

  const nextSlide = function (e) {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  setInterval(function () {
    nextSlide();
  }, 5000);
};
slider3column();

// //////////////////////////////
// 2 colum slide functionality
// //////////////////////////////

const slider2column = function () {
  const allSlides = document.querySelectorAll(
    ".section--services__slides--2-cols"
  );
  const maxSlide = allSlides.length - 1;
  let curSlide = 0;

  const goToSlide = function (slide) {
    allSlides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  goToSlide(0);

  const nextSlide = function (e) {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  setInterval(function () {
    nextSlide();
  }, 3500);
};

slider2column();

// //////////////////////////////
// 1 colum slide functionality
// //////////////////////////////

const slider1column = function () {
  const allSlides = document.querySelectorAll(
    ".section--services__slides--1-col"
  );
  const maxSlide = allSlides.length - 1;
  let curSlide = 0;

  const goToSlide = function (slide) {
    allSlides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  setInterval(function () {
    nextSlide();
  }, 3000);
};
slider1column();

// //////////////////////////////
// smooth scroll functionality
// //////////////////////////////

const gallerySmoothScroll = function () {
  const galleryLink = document.querySelector(".gallery-link");
  const gallery = document.querySelector(".gallery");

  galleryLink.addEventListener("click", function () {
    gallery.scrollIntoView({ behavior: "smooth" });
  });
};

gallerySmoothScroll();
