import $ from 'jquery';
import 'what-input';
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


AOS.init();


$('.chapter .theaxiswrap').each( function(i,element) {

    var waypointtop = new Waypoint({
        element: element,
        handler: function(direction) {
            if (direction==='down') {
                $('#globalaxis').addClass('is-shown');
            } else {
                $('#globalaxis').removeClass('is-shown');
            }
        },
        // offset:-100
    })

});

$('.chapter__data').each( function(i,element) {
    var waypointbtm = new Waypoint({
        element: element,
        handler: function(direction) {
            if (direction==='up') {
                $('#globalaxis').addClass('is-shown');
            } else {
                $('#globalaxis').removeClass('is-shown');
            }
        },
        offset: function() {
            return -(this.element.clientHeight - 100)
        }
    })
});

let scroll_position = 0;
let scroll_direction;

window.addEventListener('scroll', function(e){
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    if(scroll_direction === 'up'){
        $('body').addClass('upscrolling').removeClass('downscrolling');
    } else if(scroll_direction === 'down'){
        $('body').addClass('downscrolling').removeClass('upscrolling');
    }
});


    // if(oldValue - newValue < 0){
    //     $('body').addClass('upscrolling').removeClass('downscrolling');
    // } else if(oldValue - newValue > 0){
    //     $('body').addClass('downscrolling').removeClass('upcrolling');
    // }
