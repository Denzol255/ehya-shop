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
});