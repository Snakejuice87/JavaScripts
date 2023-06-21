// ==UserScript==
// @name          Run Loop unmute autoplay & controls
// @namespace     http://userstyles.org
// @description	  My javascript injection
// @author        Snakejuice
// @include       *.*
// @match       *.*
// @include        *://*.*
// @exclude      *.pornhub.com/*
// @exclude     *.facebook.com/*
// @exclude      *images.google.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @run-at     document-start
// @version       1.0

// ==/UserScript==

(function() {
	'use strict';
	var videos = document.querySelectorAll("video");
	for (var video of videos) {
		video.setAttribute("controls", true);
		video.setAttribute("loop", true);
		video.setAttribute("muted", false);
		video.setAttribute("autoplay", true);
		//video.loop = true;
		//video.muted = false;
		//video.autoplay = true;
		//video.controls = true;
	}
	if (typeof video.loop == 'boolean') { // loop supported
		video.loop = true;
	} else { // loop property not supported
		video.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
	}
	//...
	video.play();