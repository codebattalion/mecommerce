// $(window).scroll(function () {
//   if ($(this).scrollTop() < 30) {
//       $(".nav").css({
//           'background': 'transparent',
//           'height': '100px',
//           'color': '#333',
//           'boxShadow': '0px 0px 0px 0px rgba(0,0,0,0.1)'

//       });

//   }
//   else{
//       $(".nav").css({
//           'background': '#fff',
//           'height': '80px',
//           'color': '#333',
//           'boxShadow': '0px 1px 10px 2px rgba(0,0,0,0.1)'
//       });

//   }

// });

$(".cart-trigger").hover(function () {
  $(".cart").toggleClass("cart-open");
});
$(".cart").hover(function () {
  $(this).toggleClass("cart-open");
});

$(".search--trigger").hover(function () {
  $(".search").toggleClass("search-open");
});
$(".search").hover(function () {
  $(this).toggleClass("search-open");
});

$(".usercard--trigger").hover(function () {
  $(".usercard").toggleClass("usercard-open");
});
$(".usercard").hover(function () {
  $(this).toggleClass("usercard-open");
});

$(".nav--trigger").click(function () {
  $(".nav__bar").toggleClass("nav--open");
  $(".header2").toggleClass("header--open");
});
