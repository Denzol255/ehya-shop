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
