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
    loop: true,
    grabCursor: true,
    observeParents: true,
    observeSlideChildren: true,
    // Navigation arrows
    navigation: {
      nextEl: ".stories-buttons__button--next",
      prevEl: ".stories-buttons__button--prev",
    },
  });
});