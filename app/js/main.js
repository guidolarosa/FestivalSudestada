'use strict'

$(document).ready(function()
{
    // Scroll to animation for the navbar

    $('.navbar a').click(function()
    {
        let target = $(this)[0].attributes[1].nodeValue;
        console.log(target)
        $([document.documentElement, document.body]).animate({
            scrollTop: $("." + target).offset().top
        }, 1000);
    })
    
    // Show navbar when clicking the menu container
    
    $('.display-menu-container').click(function()
    {   
        $('.navbar-container').toggleClass('navbar-show');
    })

    // Do when all images are loaded

    $(window).on("load",function(event)
    {
        console.log(event);
        $('.loading-overlay').css({opacity:0})
        setTimeout(function()
        {
            // Load AOS
            AOS.init();
            // Remove overlay
            $('.loading-overlay').css({display:"none"})
        },500)
    })
})