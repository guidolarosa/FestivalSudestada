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

    setTimeout(function()
    {
        $('.loading-overlay').css({opacity:0})
        // Load AOS
        AOS.init();
        // Remove overlay
    },500)

    setTimeout(function()
    {
        $('.loading-overlay').css({display:"none"})
    },1000)

    // Créditos

    console.log("Diseño por Pablo Picyk")
    console.log("http://www.pablopicyk.com.ar/")
    console.log('')
    console.log("Desarrollo web por Guido La Rosa")
    console.log("http://www.guidolarosa.tumblr.com")
})