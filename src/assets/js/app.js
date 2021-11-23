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


var winX = null;
var winY = null;

window.addEventListener('scroll', function () {
    if (winX !== null && winY !== null) {
        window.scrollTo(winX, winY);
    }
});

function disableWindowScroll() {
    winX = window.scrollX;
    winY = window.scrollY;
}

function enableWindowScroll() {
    winX = null;
    winY = null;
}


var startlinks = $(".startlinks");
var introstatus = 0;
if ((document.documentElement.scrollTop!==0) ) {
    introstatus=101;
    enableWindowScroll()
    $(startlinks).removeClass('dontshow');
    $(startlinks).addClass('aos-animate'); 
} else {
    disableWindowScroll();
}


console.log(whatInput.ask());

document.addEventListener('touchstart', () => {
    console.log(whatInput.ask());
    if (whatInput.ask() !== 'mouse') {
        $(startlinks).removeClass('dontshow');
        $(startlinks).addClass('aos-animate');
        enableWindowScroll();
        introstatus = 100;
    }
});

document.addEventListener('keydown', () => {
    console.log(whatInput.ask());
    if (whatInput.ask() !== 'mouse') {
        $(startlinks).removeClass('dontshow');
        $(startlinks).addClass('aos-animate');
        enableWindowScroll();
        introstatus = 100;
    }
});


$('.startgomb').on("click", function(e) {

    if (introstatus>5) {
        enableWindowScroll();
        introstatus = 101;
    } else {
        e.stopPropagation();
        $(startlinks).removeClass('dontshow');
        $(startlinks).addClass('aos-animate');
        introstatus = 6;

    }
});

var isTrackpad = false;

function detectTrackPad(e) {
    isTrackpad = false;
    if (e.wheelDeltaY) {
        // console.log(e.wheelDeltaY +' | ' + (e.deltaY * -3));
        if (e.wheelDeltaY === (e.deltaY * -3)) {
            isTrackpad = true;
        }
    }
    else if (e.deltaMode === 0) {
        isTrackpad = true;
    }
    console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");
}

document.addEventListener("mousewheel", detectTrackPad, false);
document.addEventListener("DOMMouseScroll", detectTrackPad, false);




function mouseWheelHandler(event) {



    var delta = event.originalEvent.deltaY;
    // console.log(document.documentElement.scrollTop - document.getElementById('banner').clientHeight );
    // if (delta > 0) {
    //    if ((document.documentElement.scrollTop - document.getElementById('banner').clientHeight) < 0) {
    //         Foundation.SmoothScroll.scrollToLoc('#banner');
    //         introstatus = 100;
    //    }
    // }

    if (introstatus!==101) {

        if ((introstatus > 5) && (introstatus<100)) {
            enableWindowScroll();
            introstatus = 100;
        
        }

        if ( (introstatus === 100) && (delta > 0 ) ) {
            Foundation.SmoothScroll.scrollToLoc('#start');
            introstatus = 101;
        }


        if (introstatus < 6 ) {
            if (delta > 0) {
                $(startlinks).removeClass('dontshow');
                $(startlinks).addClass('aos-animate');
                introstatus += 1;
            } else {
                // console.log('fel')
            }
        }
    }
    

}

$(document).on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", mouseWheelHandler);