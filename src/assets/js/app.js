import $ from 'jquery';
import whatInput from 'what-input';
import AOS from 'aos';


// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';

// import 'waypoints/lib/noframework.waypoints.js';


$(document).foundation();

AOS.init({

});


$('.startgomb').on("click", function(e) {
    $(this).addClass('dontshow');
});

// window.addEventListener('resize', () => {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

var leadbasebottom = 0; 

function poscheck(){
    leadbasebottom = window.innerHeight - ( $('.thelead').offset().top + $('.thelead').height() ); 
}
$(document).ready(function () {
    poscheck();
});
$(window).resize(function () {
    poscheck();
});

$(document).on('scroll', function () {    

    $('.startgomb').addClass('dontshow');
    
    if ( $(window).scrollTop() === 0 ) {
        $('.banner').css('transform', 'translate3d(0, 0, 0)');
        poscheck();
        $('.startgomb').removeClass('dontshow');
        
    } else if ( ( ($(window).scrollTop() - leadbasebottom ) > 0) && ( ($(window).scrollTop() - leadbasebottom ) <= window.innerHeight) && ( (window.innerHeight + $(window).scrollTop())>0  )) {
        var ytolas = 0 - ($(window).scrollTop() - leadbasebottom );
        $('.banner').css('transform', 'translate3d(0,' + ytolas +'px, 0)');
    } else if ( $(window).scrollTop() < leadbasebottom ) {
    }  
});