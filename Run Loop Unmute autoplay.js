// ==UserScript==
// @name          Run Loop unmute & autoplay
// @namespace     http://userstyles.org
// @description	  My javascript injection
// @author        Snakejuice
// @include       *.*
// @match         *.*
// @include        *://*.*
// ' //  @exclude      *images.google.com/*
// ' // @exclude      images.google.com
// @version       1.0
// ==/UserScript==

(function () {
	"use strict";
	var videos = document.querySelectorAll("video");
	for (var video of videos) {
		video.loop = true;
		video.muted = false;
		video.autoplay = true;
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
		completion(videos.length);
})();
