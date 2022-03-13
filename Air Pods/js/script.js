// Slider owl-carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       loop: true,
       nav: true,
       mouseDrag: true,
       items: 4,
       responsive:{
         576:{
             items:2,
             nav:true
         },
         768:{
             items:3,
         },
         992:{
             items:3,
         },
         1200:{
             items:4,
         },
     }
    });

// Scroll
    $(window).scroll(function(){
      let scroll = $(this).scrollTop();
      if (scroll > 300) {
          $('.slide_up').fadeIn();
      }else{
          $('.slide_up').fadeOut();
      }
  })

  $('.slide_up').click(function(){
      $('html,body').animate({
          scrollTop: 0,
      },500)
  })
  });


//   Search menu
  window.addEventListener('load',function(){
     let search = this.document.querySelector('.header_top .fa-search');
     let div = this.document.querySelector('.search');
     let close = this.document.querySelector('.search .search_icon .fa');

     search.addEventListener('click',function(){
        div.style.display = 'block';
        div.style.display = 'flex';
     })

     close.addEventListener('click',function(){
        div.style.display = 'none';
     })
  })