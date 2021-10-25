//-----EFECTO SCROLL DEL MENU NAVEGADOR
$(document).ready(function(){
    let $nav = $('.fixed-top');
    let previousScroll = 0;
    $(window).scroll(function(event){
       let scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 200){
           $nav.addClass('bgcolor');
       } else {
           $nav.removeClass('bgcolor');
       }
       previousScroll = scroll;
    });
  });