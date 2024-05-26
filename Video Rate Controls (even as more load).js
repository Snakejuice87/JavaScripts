// ==UserScript==
// @name         Video Rate Controls (even as more load)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds buttons to control video playback rate
// @author       You
// @match        *://*/*
// @include        *://*bd36019.com/*
// @exclude     *://*anitaku.*/*
// @exclude     *://*anitaku.*
// @exclude     *://*.google.com
// @exclude     *://*.google.com/*
// @require             https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add CSS styles for buttons and speed display
    const style = document.createElement('style');
    style.innerHTML = `
        .video-controls {
            margin-top: 10px;
        }
        .speed-control {
            display: inline-block;
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
        }
        .speed-display {
            display: inline-block;
            margin-left: 10px;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Function to add playback rate control buttons
    function addControls() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            const controlsContainer = document.createElement('div');
            controlsContainer.classList.add('video-controls');

            const decreaseBtn = document.createElement('button');
            decreaseBtn.textContent = '-';
            decreaseBtn.classList.add('speed-control');
            decreaseBtn.addEventListener('click', () => {
                video.playbackRate -= 0.1;
                updateSpeedDisplay();
            });

            const resetBtn = document.createElement('button');
            resetBtn.textContent = '1x';
            resetBtn.classList.add('speed-control');
            resetBtn.addEventListener('click', () => {
                video.playbackRate = 1;
                updateSpeedDisplay();
            });

            const increaseBtn = document.createElement('button');
            increaseBtn.textContent = '+';
            increaseBtn.classList.add('speed-control');
            increaseBtn.addEventListener('click', () => {
                video.playbackRate += 0.1;
                updateSpeedDisplay();
            });

            const speedDisplay = document.createElement('span');
            speedDisplay.classList.add('speed-display');
            updateSpeedDisplay();

            function updateSpeedDisplay() {
                speedDisplay.textContent = `Speed: ${video.playbackRate.toFixed(1)}x`;
            }

            controlsContainer.appendChild(decreaseBtn);
            controlsContainer.appendChild(resetBtn);
            controlsContainer.appendChild(increaseBtn);
            controlsContainer.appendChild(speedDisplay);

            video.parentNode.insertBefore(controlsContainer, video.nextSibling);
        });
    }

    addControls();

    // Detect changes in the DOM and add controls to new videos
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                addControls();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();