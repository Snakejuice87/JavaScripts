// ==UserScript==
// @name          Run Loop unmute & autoplay (github).js
// @namespace     http://userstyles.org
// @description	  My javascript injection
// @author        Snakejuice
// @include       *.*
// @exclude      *images.google.com/*
// @exclude      images.google.com
// @run-at      document-start
// @version       1.0
// ==/UserScript==

(function() {
    'use strict';
   var videos = document.querySelectorAll("video");
for (var video of videos) {
    video.loop = true;
    video.muted = false;
    video.autoplay = true;
    video.controls = true;
   }
   completion(videos.length);
})();
