$(".banner-slider").slick({
    fade:true,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-circle-right next"></i>',
    
})

$('.venobox').venobox();

$(".service-slider").slick({
    vertical:true,
    autoplay:true,
    speed: 1000,
    autoplayHoverPause:true,
    autoplaySpeed: 2000,
    slidesToShow:3,
    centerMode: true,
    centerPadding: "0",
    prevArrow:'<i class="fas fa-chevron-up up"></i>',
    nextArrow:'<i class="fas fa-chevron-down down"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".testi-slider").slick({
    vertical:true,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    prevArrow:'<i class="fas fa-chevron-up up"></i>',
    nextArrow:'<i class="fas fa-chevron-down down"></i>',
    asNavFor:".text-slider",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:false,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".text-slider").slick({
    slidesToShow:1,
    arrows: false,
    asNavFor:".testi-slider",
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".sponsor-slider").slick({
    slidesToShow:5,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay:true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})