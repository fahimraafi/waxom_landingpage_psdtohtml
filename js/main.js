$(function(){
    // SERVICE PART SLICK SLIDER START
    $('.service_slick').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa-solid fa-circle-chevron-left service_left_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-circle-chevron-right service_right_arrow"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          } 
        ]
      });
    
      // SERVICE PART SLICK SLIDER END

    // VIDEO PART VENO BOX START
      new VenoBox({
        selector: '.my-video-links',
      });
    // VIDEO PART VENO BOX END

});

// COUNTER UP PART START
      
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

// COUNTER UP PART END

// PROJECT PART MIXIT UP PLUGIN START
  $(function(){
    var containerEl = document.querySelector('.mix_filter');

    var mixer = mixitup(containerEl);
  });
// PROJECT PART MIXIT UP PLUGIN END

  // BLOG SLICK SLIDER START
  $(function(){
    $('.blog_slick').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fa-regular fa-circle-left scroll_left blogprev"></i>',
      nextArrow: '<i class="fa-regular fa-circle-right scroll_right blognext"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
      ]
    });
  })
  // BLOG SLICK SLIDER END


// CLIENTS SLICK SLIDER START
$(function(){
  $('.client_slick').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  });
})
// CLIENTS SLICK SLIDER END

// STICKY HEADER START
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_header');
  }
  else {
       $('.navbar').removeClass('sticky_header');
  }
  });  
// STICKY HEADER END

// BACK TO TOP BUTTON FUNCTION START
  //==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 800){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// BACK TO TOP BUTTON FUNCTION END
