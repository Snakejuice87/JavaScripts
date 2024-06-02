// ==UserScript==
// @name         (broken) Video Playback Control v.2
// @namespace    http://your.website.com
// @description  Adds playback rate control buttons and a button to get the video source URL.
// @author       SnakeJuice
// @match        *://*/*
// @include        *://*bd36019.com/*
// @include      *://.*(mp4|mov|avi|mp3|ogg|wav).*
// @match      *://*(mp4|mov|avi|mp3|ogg|wav)*
// @include      https?:\/\/.*\.(?:mp4|mov|avi|mp3|ogg|wav)($|.*)
// @exclude    anitaku.*
// @exclude    *://anitaku.*/*
// @exclude    *://anitaku.*/*/*
// @exclude    *://anitaku.*
// @exclude    anitaku.*
// @exclude    anitaku.**
// @exclude    anitaku.*/*
// @exclude    anitaku.*/*/*
// @exclude     *://*.google.com
// @exclude     *://*.google.com/*
// @run-at     document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create a button with given properties
    function createButton(label, onClick) {
        const button = document.createElement('button');
        button.innerText = label;
        button.style.position = 'flex';
        button.style.zIndex = '9999';
        button.style.marginTop = '5px';
        button.addEventListener('click', onClick);
        return button;
    }

    // Function to add control buttons to a video element
    function addVideoControls(video) {
        const container = document.createElement('div');
        container.style.zIndex = '9999999';
        video.parentNode.insertBefore(container, video);
        container.appendChild(video);

        let originalRate = video.playbackRate;

        const slowDownButton = createButton('-', () => {
            video.playbackRate = Math.max(0.05, video.playbackRate - 0.05);
        });

        const toggleRateButton = createButton('Toggle', () => {
            const currentRate = video.playbackRate;
            video.playbackRate = currentRate === 1 ? originalRate : 1;
            originalRate = currentRate;
        });

        const speedUpButton = createButton('+', () => {
            video.playbackRate += 0.05;
        });

        const getSrcButton = createButton('-Src', () => {
            const src = video.currentSrc || video.src;
            window.open(src, '_blank');
            // alert(`${src}`);
        });

        container.appendChild(slowDownButton);
        container.appendChild(speedUpButton);
        container.appendChild(toggleRateButton);
        container.appendChild(getSrcButton);
    }

    // Add controls to all video elements on the page
    function addControlsToAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            addVideoControls(video);
        });
    }

    // Wait for the DOM to be fully loaded before adding the controls
    window.addEventListener('load', addControlsToAllVideos);
})();
