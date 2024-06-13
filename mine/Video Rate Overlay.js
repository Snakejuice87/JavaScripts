// ==UserScript==
// @name         Video Rate Overlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds playback rate control buttons to all videos, even in fullscreen mode
// @author       Your Name
// @match        *://*/*
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create and append the rate control buttons
    function createRateControls(video) {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '10px';
        container.style.left = '10px';
        container.style.zIndex = '9999';
        container.style.background = 'rgba(0, 0, 0, 0.5)';
        container.style.borderRadius = '5px';
        container.style.padding = '5px';
        container.style.color = 'white';
        container.style.fontSize = '14px';

        const rates = [0.5, 1, 1.5, 2];

        rates.forEach(rate => {
            const button = document.createElement('button');
            button.innerText = `${rate}x`;
            button.style.margin = '0 5px';
            button.style.background = 'none';
            button.style.border = '1px solid white';
            button.style.color = 'white';
            button.style.borderRadius = '3px';
            button.style.padding = '5px';
            button.addEventListener('click', () => {
                video.playbackRate = rate;
            });
            container.appendChild(button);
        });

        video.parentElement.style.position = 'relative';
        video.parentElement.appendChild(container);

        // Adjust position when in fullscreen
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                container.style.position = 'fixed';
            } else {
                container.style.position = 'absolute';
            }
        });
    }

    // Function to initialize rate control buttons for all videos
    function initRateControls() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            createRateControls(video);
        });
    }

    // Initialize rate controls when the script is first run
    initRateControls();

    // Also initialize rate controls for dynamically added videos
    new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'VIDEO') {
                        createRateControls(node);
                    }
                });
            }
        }
    }).observe(document.body, { childList: true, subtree: true });
})();
