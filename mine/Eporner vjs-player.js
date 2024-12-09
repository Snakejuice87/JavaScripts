// ==UserScript==
// @name         Eporner vjs-player
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Force default video fullscreen, set double-click to fullscreen, and toggle overlay with right-click on eporner videos.
// @author       Your Name
// @match        eporner.com
// @match        *://*.eporner.com/*
// @match        *://*.eporner.com/*/*
// @match        *://*.eporner.com/*/*/*
// @include        *://*.eporner.com/*
// @include        *://*.eporner.com/*/*
// @include        *://*.eporner.com/*/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify video player behavior
    function modifyPlayer() {
        const videoPlayer = document.querySelector('.vjs-player video');  // ('vjs-player #EPvideo_html5_api');
        const overlay = document.querySelector('.vjs-overlay'); // Adjust if necessary

        if (videoPlayer) {
            console.log('Video player found');

            // Disable the vjs-player's fullscreen
            const parent = videoPlayer.closest('.vjs-player');
            if (parent) {
                parent.addEventListener('dblclick', (e) => e.stopPropagation(), true);
                console.log('Disabled vjs-player fullscreen trigger');
            }

            // Set default fullscreen on double-click
            videoPlayer.ondblclick = () => {
                if (videoPlayer.requestFullscreen) {
                    videoPlayer.requestFullscreen();
                } else if (videoPlayer.webkitRequestFullscreen) {
                    videoPlayer.webkitRequestFullscreen(); // Safari/Edge support
                } else if (videoPlayer.msRequestFullscreen) {
                    videoPlayer.msRequestFullscreen(); // IE11 support
                }
                console.log('Default fullscreen triggered');
            };

            // Toggle overlay visibility on right-click
            videoPlayer.oncontextmenu = (e) => {
                e.preventDefault(); // Prevent default context menu
                if (overlay) {
                    if (overlay.style.display === 'none') {
                        overlay.style.display = '';
                            videoPlayer.removeAttribute('controls');
                            console.log('Overlay enabled');
                    } else {
                        overlay.style.display = 'none';
                            videoPlayer.setAttribute('controls', 'controls');
                            console.log('Overlay disabled');
                    }
                } else {
                    console.log('Overlay not found');
                }
            };
        } else {
            console.log('Video player not found');
        }
    }
    
    // Run the function on page load and monitor for dynamic content changes
    const observer = new MutationObserver(() => modifyPlayer());
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial run
    modifyPlayer();
})();
