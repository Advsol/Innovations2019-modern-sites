jQuery('.js-parallax-up').each(function(_, elm){
    jQuery(elm).data('initialPositionY', jQuery(elm).position().top);
});
jQuery(window).bind('scroll',function(e){
    parallaxScroll();
});
function parallaxScroll(){
    var scrolled = jQuery(window).scrollTop();
    jQuery('.js-parallax-up').each(function(_, elm) {
        var $elm = jQuery(elm);
        var multiplier = 0.15;
        if ($elm.hasClass('js-parallax-up-2')) { multiplier = 0.25; }
        else if ($elm.hasClass('js-parallax-up-3')) { multiplier = 0.5; }
        else if ($elm.hasClass('js-parallax-up-4')) { multiplier = 0.75; }
        $elm.css('top', (0 - (scrolled - $elm.data('initialPositionY')) * multiplier) + 'px');
    });
}