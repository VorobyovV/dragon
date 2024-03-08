$(document).ready(function() {
  

	$('.partners__slider').slick({
		slidesToShow: 3,
		infinite: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
	})

    $('.faq__header').click(function () {
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active')
          $(this).removeClass('active')
          $(this).next().slideUp(300)
        } else {
          $('.faq__header').removeClass('active')
          $('.faq__body').slideUp(300)
          $(this).toggleClass('active')
          $(this).next().slideToggle(300)
        }
      })



    
   

  


     
      

});





