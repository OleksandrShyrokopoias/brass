$(document).ready(function() {
    $('.toggle-menu').click(function() {
        $('.main-menu-wrap').fadeToggle();
    })

    var $page = $('html, body');
    $('a.link-anchor[href*="#"]').click(function() {
        if($(window).width() < 768) {
            $('.main-menu-wrap').fadeOut();
        }
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
})


const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  
});

//popup
Fancybox.bind("[data-fancybox]", {
  });
    

