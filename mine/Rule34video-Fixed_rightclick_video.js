
// ==UserScript==
// @name	   Rule34video-Fixed_rightclick_video
// @namespace      http://tampermonkey.net/
// @version	0.2
// @description    Modify URLs to append tag_ids and sort_by query parameters
// @include	      https://rule34video.com/*
// @include	      https://rule34video.com/*/*/*
// @include	      https://rule34video.com/*/*/*/*
// @include	      https://rule34video.com/*/*/*
// @include	       https://rule34video.com/*/*
// @match       https://rule34video.com/*
// @match      *://rule34video.com/*
// @include	     https://rule34video.com
// @match     https://rule34video.com
// @match     https://rule34video.com/*
// @include     rule34video.com/*
// @include     rule34video.com/*/*
// @include     rule34video.com/*/*/*
// @include     rule34video.com/*/*/*/*
// @match      *://ezgif.com/*
// @include	     https://ezgif.com
// @match     https://ezgif.com
// @match     https://ezgif.com/*
// @include     ezgif.com/*
// @include     ezgif.com/*/*
// @include     ezgif.com/*/*/*
// @include     ezgif.com/*/*/*/*
// @include       https://www.lesbian8.com/videos/*
// @run-at       document-end
// @grant none
// ==/UserScript==

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

