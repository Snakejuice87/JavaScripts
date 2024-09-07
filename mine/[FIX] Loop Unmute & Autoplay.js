// ==UserScript==
// @name           [FIXED] Loop Unmute & autoplay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically set videos to loop, unmute, and autoplay. Adds event listener if loop property isn't available.
// @author        Snakejuice
// @include       *.*
// @match         *.*
// @match         *://*.*/*
// @match        *://*.*
//  @exclude      *images.google.com/*
// @exclude    anitaku.*/*
//  @exclude      images.google.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Get all video elements on the page
	const videos = document.querySelectorAll('video');

	// Iterate through each video element
	videos.forEach((video) => {
		// Set video properties
		video.loop = true; // Enable looping (initially try this)
		video.muted = false; // Unmute the video
		video.autoplay = true; // Set autoplay

		// Check if the loop property is available using 'typeof'
		if (typeof video.loop === 'boolean') {
			// If loop is a boolean, set the loop to true
			video.loop = true;
		} else {
			// If loop property isn't available, add event listener for 'ended'
			video.addEventListener('ended', () => {
				video.currentTime = 0; // Reset the video time to 0
				video.play(); // Replay the video
			});
		}
		video.play();
	});
})();
