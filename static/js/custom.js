// $(window).scroll(function () {
//   if ($(this).scrollTop() < 100) {
//     $(".nav").css({
//       display: "flex",
//     });
//   } else {
//     $(".nav").css({
//       display: "none",
//     });
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

$(".dropdown--trigger").hover(function () {
  $(".dropdown").toggleClass("dropdown-open");
});

$(".dropdown").hover(function () {
  $(".dropdown").toggleClass("dropdown-open");
});

$(".nav--trigger").click(function () {
  $(".nav__bar").toggleClass("nav--open");
  $(".header2").toggleClass("header--open");
});

$(".h-slides").slick({
  dots: true,
  infinite: true,
  fade: true,
  cssEase: "linear",
  draggable: true,
  autoplay: true /* this is the new line */,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 1000,
  prevArrow: $(".prev-arrow"),
  nextArrow: $(".next-arrow"),
});

$(".h-slides").on("beforeChange", function () {
  $(".header1__container--title").removeClass("animate__animated animate__fadeInDown").hide();
  $(".header1__container--subtitle").removeClass("animate__animated animate__fadeIn").hide();
  $(".header1__container--starting").removeClass("animate__animated animate__fadeInUp").hide();

  $(".header2__container--title").removeClass("animate__animated animate__fadeInDown").hide();
  $(".header2__container--subtitle").removeClass("animate__animated animate__fadeIn").hide();
  $(".header2__container--starting").removeClass("animate__animated animate__fadeInUp").hide();
  $(".header2__container--btn").removeClass("animate__animated animate__fadeIn").hide();

  setTimeout(() => {
    $(".header1__container--title").addClass("animate__animated animate__fadeInDown").show();
    $(".header1__container--subtitle").addClass("animate__animated animate__fadeIn").show();
    $(".header1__container--starting").addClass("animate__animated animate__fadeInUp").show();

    $(".header2__container--title").addClass("animate__animated animate__fadeInDown").show();
    $(".header2__container--subtitle").addClass("animate__animated animate__fadeIn").show();
    $(".header2__container--starting").addClass("animate__animated animate__fadeInUp").show();
    $(".header2__container--btn").addClass("animate__animated animate__fadeIn").show();
  }, 100);
});
