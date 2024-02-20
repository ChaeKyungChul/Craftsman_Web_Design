/******nav*******/
$(function(){
    $('.nav').hover(function(){
      $('.nav>ul>li>ul>li').fadeToggle();
    });


$('contentsMenu>ul>li').click(function(e){
    e.preventDefault();
    $('contentsMenu>ul>li').removeClass('active');
    const href = $(this).find('a').attr('href');
    $(this).addClass('active');
    $('.gallery').removeClass('active');
    $(href).addClass('active')
})    
});



/**************************slide******************** */

$(document).ready(function(){
    function fadeImages(){
        $('.img1').delay(1500).fadeIn('slow', function() {
            $(this).delay(1500).fadeOut('slow');

            $('.img2').delay(1500).fadeIn('slow', function() {
              $(this).delay(1500).fadeOut('slow');

              $('.img3').delay(1500).fadeIn('slow', function() {
                $(this).delay(1500).fadeOut('slow', function() {                   
                    fadeImages();
                    });                   
                });
            });
        });
}
fadeImages();
});



      



