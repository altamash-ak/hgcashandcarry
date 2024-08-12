var swiper = new Swiper(".heroSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// tabs
$(function () {
  var activeIndex = $(".active-tab").index(),
    $contentlis = $(".tabs-content li"),
    $tabslis = $(".tabs li");

  // Show content of active tab on loads
  $contentlis.eq(activeIndex).show();

  $(".tabs").on("click", "li", function (e) {
    var $current = $(e.currentTarget),
      index = $current.index();

    $tabslis.removeClass("active-tab");
    $current.addClass("active-tab");
    $contentlis.hide().eq(index).show();
  });
});
// product slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
      touchRatio: 0
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 8,
      touchRatio: 0
    },
  },
});