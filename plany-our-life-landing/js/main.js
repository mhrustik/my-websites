$('.top__slider-container').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'ease',
    adaptiveHeight: true
  });

$('.blog-slider__slide-items').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

$(function () {
  const reviewSlideElement = ".review-slider__items ";
  $(reviewSlideElement).slick({
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 'd',
      responsive: [
        {
          breakpoint: 550,
          settings: {
            centerMode: false,
            centerPadding: '0',
          }
        }
      ]
  });

if ($(window).width() > 551){
    $(function (){
      let prevSlideNew = document.querySelector(reviewSlideElement + ".slick-active.slick-center").previousElementSibling;
      prevSlideNew.style.cssText= `
      opacity: 0;
      `;
      prevSlideNew
    })
    function prevSlide(){
      jQuery(reviewSlideElement + ".slick-track > *").css({"opacity":""});
      jQuery(reviewSlideElement + ".slick-active.slick-center").prev().css({"opacity":"0"});
    }
    $(reviewSlideElement).on('swipe', function(event, slick, direction){
      prevSlide();
    });
    $(function (){
      let noActiveSlide = document.querySelectorAll(reviewSlideElement + "div.slick-slide:not(.slick-center) > .review-slider__item");
      $(noActiveSlide).on('click', function() {
        $(reviewSlideElement).slick('slickNext');
        prevSlide();
      });
    });
  };
  });

$(function popup(){
  let popupTitles = document.querySelectorAll('.popupTitle');
  popupTitles.forEach(function(popupTitle){
    popupTitle.addEventListener("click", function(e){
      console.log('click');
      let popupActives = document.querySelectorAll('.popupItems > .active');
      if(popupActives.length > 0 && !(popupTitle.parentNode.classList.contains('active'))){
        popupActives.forEach(function (popupActive){
          popupActive.classList.remove('active');
        });
      }
      popupTitle.parentNode.classList.toggle('active');
    });
  });
  });

function ibg(){
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}
ibg();