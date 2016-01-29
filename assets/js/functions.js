$(document).ready(function() {
  (function() {

    animate();

    mobileMenu();

  })();
});



function animate() {

  $(".animate_up").each(function(i) {
    var delay = 0;

    $(".animate_up").eq(i).css({
      "animation-name": "wait,show",
      "animation-iteration-count": "linear",
      "animation-duration": (delay + i * 200) + "ms, 1000ms",
      "animation-delay": "0ms, " + (delay + i * 200) + "ms",
      "opacity" : "1"
    });

  });

};

function mobileMenu(){
  var menuIcon = $(".site-navigation-mobile"),
      mobileMenu = $(".site-navigation-mobile-items"),
      isClicked = true;

  menuIcon.click(function(){
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
