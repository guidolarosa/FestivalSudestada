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
})