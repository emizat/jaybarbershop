// //////////////////////////
// MOBILE NAVIGATION
// ////////////////////////

const mobileNav = function () {
  const header = document.querySelector(".header");
  const btnOpenMenu = document.querySelector(".header__mobile--icon-menu");
  const btnCloseMenu = document.querySelector(".header__mobile--icon-cross");

  const openMenu = function () {
    header.classList.add("open");
  };

  const closeMenu = function () {
    header.classList.remove("open");
  };

  // event handlers
  btnOpenMenu.addEventListener("click", openMenu);
  btnCloseMenu.addEventListener("click", closeMenu);
};

mobileNav();

// //////////////////////////
// REVEAL SECTIONS
// ////////////////////////

const revealingSections = function () {
  const allSections = document.querySelectorAll(".section");

  const revealSections = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionsObserver = new IntersectionObserver(revealSections, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionsObserver.observe(section);
    section.classList.add("section--hidden");
  });
};
revealingSections();

const updateFooterYear = function () {
  const footerYear = document.querySelector(".year");
  const fullyear = new Date().getFullYear();
  footerYear.textContent = fullyear;
};
updateFooterYear();

// //////////////////////////
// SMOOTH SCROLLING
// ////////////////////////

const smoothScroll = function () {
  const secServices = document.querySelector(".services");
  const secContact = document.querySelector(".contact");
  const servicesLink = document.querySelector(".services-link");
  const contactLink = document.querySelector(".contact-link");

  servicesLink.addEventListener("click", function () {
    secServices.scrollIntoView({ behavior: "smooth" });
  });
  contactLink.addEventListener("click", function () {
    secContact.scrollIntoView({ behavior: "smooth" });
  });
};

smoothScroll();

// **********************
// SLIDER COMPONENT
// **********************
const slider = function () {
  const slides = document.querySelectorAll(".slider__slide");
  const btnLeft = document.querySelector(".slider__btn-left");
  const btnRight = document.querySelector(".slider__btn-right");
  const dotsContainer = document.querySelector(".dots");

  let curSlide = 0;
  let maxSlide = slides.length;

  // ////////////////
  // FUNCTIONS
  // ///////////////

  // create dot
  const createDot = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dots__dot' aria-label="dot-button" data-slide='${i}'></button>`
      );
    });
  };
  // // /////

  // activate dot
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };

  // /////

  // go to slide
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // // /////

  // // init
  const init = function () {
    goToSlide(0);
    createDot();
    activateDot(0);
  };

  init();
  // // //////

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  setInterval(function () {
    nextSlide();
  }, 3500);

  // ////////////////////
  // EVENTS HANDLERS
  // ///////////////////
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

// **********************
// TABBED COMPONENT
// **********************

const tabComponent = function () {
  const tabsContainer = document.querySelector(".tab__btn--container");
  const tabs = document.querySelectorAll(".tab__btn");
  const tabContent = document.querySelectorAll(".tab__content");

  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab__btn");

    if (!clicked) return;
    // remove active class
    tabs.forEach((tab) => tab.classList.remove("tab__btn--active"));
    tabContent.forEach((con) => con.classList.remove("tab__content--active"));

    // activate classes
    clicked.classList.add("tab__btn--active");
    document
      .querySelector(`.tab__content--${clicked.dataset.tab}`)
      .classList.add("tab__content--active");
  });
};

tabComponent();
