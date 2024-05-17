// ==UserScript==
// @name         Video Speed Controls (toggle)
// @namespace    http://your.website.com
// @version      1.0
// @description  Adds playback rate control buttons and a button to get the video source URL.
// @author       Your Name
// @match        *://*/*
// @match        *
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all video elements on the page
    const videos = document.querySelectorAll('video');
	const currentRate = video.playbackRate;
    let savedrate = video.playbackRate;
    
    videos.forEach(video => {
        
        let originalRate = video.playbackRate;
        
        // Create buttons for controlling playback rate
        const slowerButton = document.createElement('button');
        slowerButton.textContent = '-0.05';
        slowerButton.addEventListener('click', () => {
            video.playbackRate -= 0.05;
        });

        const fasterButton = document.createElement('button');
        fasterButton.textContent = '+0.05';
        fasterButton.addEventListener('click', () => {
            video.playbackRate += 0.05;
        });

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'toggle';
        toggleButton.addEventListener('click', () => {
            if (video.playbackRate === 1) {
                    video.playbackRate = savedrate;
                } else {
                    savedrate = video.playbackRate;
                    video.playbackRate = 1;
            }
        });
        
        const resetButton = document.createElement('button');
        resetButton.textContent = '1x';
        resetButton.addEventListener('click', () => {
            video.playbackRate = 1;
        });

        // Create a button to get the video source URL
        const urlButton = document.createElement('button');
        urlButton.textContent = 'Video Src';
        urlButton.addEventListener('click', () => {
            const videoSrc = video.src;
        if (videoSrc == null) {
           // alert(videoSrc);
             alert('video src is NULL');
          } else {
            window.open(videoSrc, '_blank'); // Open the video source URL in a new tab
          }
        });

        // Append buttons to a container div
        const controlsDiv = document.createElement('div');
        controlsDiv.appendChild(slowerButton);
        controlsDiv.appendChild(fasterButton);
        controlsDiv.appendChild(toggleButton);
        controlsDiv.appendChild(resetButton);
        controlsDiv.appendChild(urlButton);

        // Add styles to the container div
        controlsDiv.style.position = 'absolute';
        controlsDiv.style.top = '10px';
        controlsDiv.style.left = '10px';
        controlsDiv.style.zIndex = '9999';

        // Append the controls to the document body
        document.body.appendChild(controlsDiv);
    });
})();
