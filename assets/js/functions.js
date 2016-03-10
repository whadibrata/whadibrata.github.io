$(document).ready(function() {
  (function() {

    animate();

    mobileMenu();

  })();
});



function animate() {

  var ani = $('.animate_up'),
    tl = new TimelineLite();

  tl.staggerTo(ani, 1, {opacity: 1,  transform: 'translateY(0px)'}, 0.3);

};

function mobileMenu(){
  var menuIcon = $(".site-navigation-mobile"),
      mobileMenu = $(".site-navigation-mobile-items"),
      isClicked = true;

  menuIcon.on("click", function(){
    if (isClicked) {
      menuIcon.addClass("is-active");
      mobileMenu.addClass("is-active");
    } else {
      menuIcon.removeClass("is-active");
      mobileMenu.removeClass("is-active");
    }
    isClicked = !isClicked;
  });
}
