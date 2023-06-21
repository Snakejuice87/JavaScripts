// ==UserScript==
// @name           Visited link style
// @description    custom link css style 
// @include        *://*.*
// @run-at         document-start
// @version       1.0
// ==/UserScript==


// NEW SITES CAN BE ADDED NOW

var css =
		"a:visited { color: red; text-decoration: underline}",
	head = document.head || document.getElementsByTagName("head")[0],
	style = document.createElement("style");

head.appendChild(style);

style.type = "text/css";
if (style.styleSheet) {
	// This is required for IE8 and below.
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}


(function() {
    'use strict';
   var videos = document.querySelectorAll("video");
for (var video of videos) {
    video.loop = true;
    video.muted = false;
    video.autoplay = true;
   }
   completion(videos.length);
})();


