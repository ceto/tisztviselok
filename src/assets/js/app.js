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

import 'waypoints/lib/noframework.waypoints.js';


$(document).foundation();


AOS.init({

});


$('.startgomb').on("click", function(e) {
    $(this).addClass('dontshow');
});

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var leadbasebottom = 0; 
var afterbannerbasetop = 0;
// var vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);


function poscheck(){
    // vh = window.innerHeight * 0.01;
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    leadbasebottom = window.innerHeight - ( $('.thelead').offset().top + $('.thelead').height() ); 
    
}
$(document).ready(function () {
    poscheck();
});
$(window).resize(function () {
    poscheck();
});

$(document).on('scroll', function () {
    // poscheck();
    // console.log($(window).scrollTop() - leadbasebottom + " --- " + leadbasebottom + ' --- ' + window.innerHeight + ' --- ' + ( $(window).scrollTop()) );
    

    $('.startgomb').addClass('dontshow');


    
    if ( $(window).scrollTop() === 0 ) {
        $('.banner').css('transform', 'translate3d(0, 0, 0)');
        poscheck();
        $('.startgomb').removeClass('dontshow');
        
    } else if ( ( ($(window).scrollTop() - leadbasebottom ) > 0) && ( ($(window).scrollTop() - leadbasebottom ) <= window.innerHeight) && ( (window.innerHeight + $(window).scrollTop())>0  )) {
        var ytolas = 0 - ($(window).scrollTop() - leadbasebottom );
        // console.log('itt kell ügyeskedni' + ytolas + 'px');
        $('.banner').css('transform', 'translate3d(0,' + ytolas +'px, 0)');
        // $('.banner').css('bottom', ytolas +'px')
    } else if ( $(window).scrollTop() < leadbasebottom ) {
        // console.log('elején vagyok');
        // window.scrollTo({top:leadbasebottom, behavior:'auto'});
    }  
});