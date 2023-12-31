// for heading

$(window).scroll(function () {
  const a = $(this).scrollTop(),
    b = 800;
  $("h1").css({
    backgroundPosition: "center " + a / 2 + "px",
  });
  $(".parallax").css({
    top: a / 1.6 + "px",
    opacity: 1 - a / b,
  });
});

// parallax scrolling

document.addEventListener("scroll", () => {
  const top = window.pageYOffset,
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five");

  one.style.bottom = -(top * 0.1) + "px";
  two.style.bottom = -(top * 0.2) + "px";
  three.style.bottom = -(top * 0.3) + "px";
  four.style.bottom = -(top * 0.4) + "px";
  five.style.bottom = -(top * 0.5) + "px";
});

// Initialize Swiper
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   grid: {
//     rows: 4,
//   },
//   // spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
