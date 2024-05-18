// ==UserScript==
// @name         A-B Video Loop
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds looping controls to video elements
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create loop controls for each video element
    document.querySelectorAll('video').forEach((video, index) => {
        // Create a container for the buttons
        const controlContainer = document.createElement('div');
        controlContainer.style.display = 'flex';
        controlContainer.style.marginBottom = '10px';

        // Create buttons
        const buttonA = document.createElement('button');
        buttonA.innerText = 'Set A';
        const buttonB = document.createElement('button');
        buttonB.innerText = 'Set B';
        const buttonClear = document.createElement('button');
        buttonClear.innerText = 'Clear A & B';

        // Append buttons to the control container
        controlContainer.appendChild(buttonA);
        controlContainer.appendChild(buttonB);
        controlContainer.appendChild(buttonClear);

        // Insert the control container before the video element
        video.parentNode.insertBefore(controlContainer, video);

        // Variables to store loop points
        let loopStart = null;
        let loopEnd = null;
        let loopInterval = null;

        // Set the start loop point (A)
        buttonA.addEventListener('click', () => {
            loopStart = video.currentTime;
            console.log(`Loop start (A) set to: ${loopStart}`);
        });

        // Set the end loop point (B)
        buttonB.addEventListener('click', () => {
            loopEnd = video.currentTime;
            console.log(`Loop end (B) set to: ${loopEnd}`);
            if (loopStart !== null && loopEnd !== null) {
                if (loopInterval) clearInterval(loopInterval);
                loopInterval = setInterval(() => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                    }
                }, 100);
            }
        });

        // Clear loop points
        buttonClear.addEventListener('click', () => {
            loopStart = null;
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop points A & B cleared');
        });
    });
})();