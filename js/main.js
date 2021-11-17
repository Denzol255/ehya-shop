$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu--visible");
    document
      .querySelector(".menu-button")
      .classList.toggle("menu-button--active");
    document.querySelector("body").classList.toggle("scroll--lock");
  });

  var tabsItem = $(".tabs__item");
  var contentItem = $(".trends__cards");

  tabsItem.on('click', function(event){
    var visibleContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    contentItem.removeClass("trends__cards--visible");
    $(visibleContent).addClass("trends__cards--visible");
    $(this).addClass("tabs__item--active");
  })

  $(".tabs__item:first").click();

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    grabCursor: true,
    autoplay: true,
    autoplay: {
      delay: 7000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var sliderPlay = document.querySelector(".reviews-slider").swiper;

  $(".reviews-slider").mouseenter(function () {
    sliderPlay.autoplay.stop();
  });

  $(".reviews-slider").mouseleave(function () {
    sliderPlay.autoplay.start();
  });

  var storiesSlider = new Swiper(".stories-slider", {
    // Optional parameters
    grabCursor: true,
    // Navigation arrows
    navigation: {
      nextEl: ".stories-buttons__button--next",
      prevEl: ".stories-buttons__button--prev",
    },
  });

  // Кнопки
  
  storiesSlider.on("slideChange", function () {
    var slideNum = storiesSlider.realIndex;
    if (slideNum == "1") {
      secondSlide();
    } else if (slideNum == "0") {
      firstSlide();
    } else if (slideNum == "2") {
      thirdSlide();
    }
  });

  function firstSlide (){
    var d = document.querySelector(".stories-buttons__button--prev")
    d.classList.remove("stories-buttons__button--active");
  }

  function secondSlide (){
    var k = document.querySelector(".stories-buttons__button--next");
    var g = document.querySelector(".stories-buttons__button--prev");
    g.classList.add("stories-buttons__button--active");
    k.classList.add("stories-buttons__button--active");
  }

  function thirdSlide () {
    var l = document.querySelector(".stories-buttons__button--next");
    l.classList.toggle("stories-buttons__button--active");
  }

  // Modal

  var e = $("[data-toggle=modal]");
  var g = $(".modal__close");
  e.on("click", c);
  g.on("click", d);

  function d(j) {
    j.preventDefault();
    document.querySelector("body").classList.remove("scroll--lock--modal");
    var h = $(".modal__overlay");
    var i = $(".modal__dialog");
    h.removeClass("modal__overlay--visible");
    i.removeClass("modal__dialog--visible");
  }

  function c() {
    document.querySelector("body").classList.add("scroll--lock--modal");
    var h = $(".modal__overlay");
    var i = $(".modal__dialog");
    h.addClass("modal__overlay--visible");
    i.addClass("modal__dialog--visible");
  }

  var over = document.querySelector(".modal__overlay");

  over.addEventListener("click", function () {
    document
      .querySelector(".modal__dialog")
      .classList.remove("modal__dialog--visible");
    document
      .querySelector(".modal__overlay")
      .classList.remove("modal__overlay--visible");
    document
      .querySelector("body")
      .classList.remove("scroll--lock--modal");
  })

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document
          .querySelector(".modal__dialog")
          .classList.remove("modal__dialog--visible");
        document
          .querySelector(".modal__overlay")
          .classList.remove("modal__overlay--visible");
        document
          .querySelector("body")
          .classList.remove("scroll--lock--modal");
      }
    },
    false
  );
  
  // Обработка форм

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Пожалуйста укажите ваш Email",
          email: "Формат Email - name@domain.com",
        },
        name: {
          required: "Пожалуйста укажите ваше имя",
          minlength: "Имя содержит минимум 3 символа",
        },
        phone: {
          required: "Пожалуйста укажите ваш телефон",
          minlength: "Телефон неполный",
        },
      },
    });
  });
  $(".phone-input").mask("+7 (999) 999-99-99");
});
