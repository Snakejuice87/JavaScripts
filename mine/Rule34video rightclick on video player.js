// ==UserScript==
// @name           Rule34video rightclick on video player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modify URLs to append tag_ids and sort_by query parameters
// @include        https://rule34video.com/*/*/*/*
// @include        https://rule34video.com/*/*/*
// @include        https://rule34video.com/*/*
// @include       https://rule34video.com/*
// @match      *://rule34video.com/*
// @include        https://rule34video.com
// @match     https://rule34video.com
// @match     https://rule34video.com/*
// @include     rule34video.com/*
// @include     rule34video.com/*/*
// @include     rule34video.com/*/*/*
// @include     rule34video.com/*/*/*/
// @match      *://ezgif.com/*
// @include	     https://ezgif.com
// @match     https://ezgif.com
// @match     https://ezgif.com/*
// @include     ezgif.com/*
// @include     ezgif.com/*/*
// @include     ezgif.com/*/*/*
// @include     ezgif.com/*/*/*/*
// @include       https://www.lesbian8.com/videos/**
// @grant     none
// ==/UserScript==

/*
document.getElementByClassName('.fp-ui').addEventListener('contextmenu', () => {
    const element = document.querySelectorAll('video')[0];
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
});

// Optional: Exit fullscreen when pressing the Escape key
document.addEventListener('dblclick', (event) => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
});
*/

/*
(function() {
    'use strict';

    // Disable default context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Function to handle context menu on fp-ui elements
    function handleContextMenuOnUI(event) {
        let fpUiElement = event.currentTarget;

        if (window.getComputedStyle(fpUiElement).display === 'block') {
            fpUiElement.style.display = 'none';
            let videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.controls = true;
            });
        }
    }

    // Function to handle context menu on video elements
    function handleContextMenuOnVideo(event) {
        let fpUiElements = document.querySelectorAll('.fp-ui');
        fpUiElements.forEach(fpUiElement => {
            fpUiElement.style.display = 'block';
        });

        event.currentTarget.controls = false;
    }

    // Add context menu event listener to fp-ui elements
    document.querySelectorAll('.fp-ui').forEach(element => {
        element.addEventListener('contextmenu', handleContextMenuOnUI);
    });

    // Add context menu event listener to video elements
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('contextmenu', handleContextMenuOnVideo);
    });

})();
*/


(function() {
	'use strict';

	// Select the element with class 'fp-ui'
	const fpUiElement = document.querySelector('.fp-ui');
	const videos = document.querySelectorAll("video");

	videos.forEach(video => {
		// Check if the element exists
		if (fpUiElement) {
			// Add event listener for double click
			fpUiElement.addEventListener('contextmenu', function() {
		          event.preventDefault();
							
				// Toggle the display property between 'block' and 'none'
				fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
				video.controls = true;
				video.setAttribute('controls', 'true');
			});
		}

		// video.setAttribute('controls', 'true');
		// video.controls = true;
		video.style.Zindex = '9999';

		if (video) {
			video.addEventListener('contextmenu', function() {
                    event.preventDefault();
										
				// Toggle the display property between 'block' and 'none'
				fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
				video.controls = false;
				video.removeAttribute('controls');
			});
		}
	});

})();


const list = document.querySelectorAll(".views");
for (let i = 0; i < list.length; i++) {
	list[i].style.fontSize = "18px";
}
// document.getElementByClassName(".views").style.fontSize = "x-large";
console.log('Injected');

// var styleELm = '.fp-player > div { display: none !important; height: 0px !important; z-index: 0 !important; } .view { /* zoom: 1.3; */ font-size:18px !important } .thumb_info { font-size:18px !important }',

var scss =
	'div.thumb_info > .views { font-size: 18px !important; } .views { font-size: 18px !important; } .thumb_info { font-size: 18px !important; } /* .fp-player > div, .fp-player > div > *, .fp-player > div > * > * { display: none; height: 0px; } .fp-ui, .fp-controls, .fp-controls.fade, .fp-settings, .fp-settings > *, .fp-settings > * > * { display: block !important; height: auto !important; } */ .view { /* zoom: 1.3; */ font-size:18px !important } .thumb_info { font-size:18px !important }',
	head = document.head || document.getElementsByTagName("head")[0],
	style = document.createElement("style");

head.appendChild(style);
style.type = "text/css";
style.setAttribute('id', 'styleInject');
if (style.styleSheet) {
	// This is required for IE8 and below.
	style.styleSheet.cssText = scss;
} else {
	style.appendChild(document.createTextNode(scss));
}
/*
 stylez = document.createElement('style');

head.appendChild(stylez);
	stylez.type = "text/css";
if (stylez.styleSheet) {
	// This is required for IE8 and below.
	stylez.styleSheet.cssText = styleELm;
} else {
	stylez.appendChild(document.createTextNode(styleELm));
}
*/

console.log('hehe');
var divs = document.getElementsByClassName("thumb_info");
for (var i = 0; i < divs.length; i++) {
	divs[i].style.fontSize = "18px";
}

var divs2 = document.getElementsByClassName("views");
console.log(divs2);
for (var i = 0; i < divs2.length; i++) {
	divs2[i].style.fontSize = "18px";
}
/*
var divs3 = document.getElementsByTagName("video");
for (var i = 0; i < divs3.length; i++) {
	divs3[i].setAttribute('controls', 'true');
	divs3[i].controls = true;
	divs3[i].style.Zindex = '9999';
}
*/