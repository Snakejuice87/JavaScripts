// ==UserScript==
// @name         NaughtyMachinima download Btn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace video URL with highest quality download link and add a download button.
// @author       Your Name
// @include         https://www.naughtymachinima.com/video/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var navbar = document.querySelectorAll('.sticky-top > .nav-bar');
        navbar.forEach(navbar => {
            navbar.style.display = 'none';
            navbar.style.height = '0px';
        });
    var ads = document.querySelectorAll('.ad-content');
        ads.forEach(ads => {
            ads.style.display = 'none';
            ads.style.height = '0px';
        });
            
    // Step 1: Match the current URL using the provided regex
    const urlRegex = /https\:\/\/www\.naughtymachinima\.com\/video\/(\d{5})\/(.*)/i;
    const match = window.location.href.match(urlRegex);

    if (match) {
        const videoId = match[1];
        const videoName = match[2];

        // Step 2: Find all video sources on the page
        const videoSources = Array.from(document.querySelectorAll('video source'));

        if (videoSources.length > 0) {
            // Step 3: Identify the highest quality video source
            let highestQualitySrc = videoSources[0].src;

            videoSources.forEach(source => {
                const src = source.src;
                if (/* logic to compare quality */ src.includes('720p')) { // Modify this condition to your needs
                    highestQualitySrc = src;
                }
            });

            // Extract the quality part from the URL if present
            const qualityMatch = highestQualitySrc.match(/(\d{3,4}p)/);
            const highestQuality = qualityMatch ? qualityMatch[1] : 'default-quality';

            // Step 4: Construct the new URL
            const newUrl = `https://www.naughtymachinima.com/media/videos/h264/${videoId}_${highestQuality}.mp4?filename=/${videoName}`;

            // Step 5: Create a button element
            const downloadButton = document.createElement('button');
            downloadButton.context = 'Download';
            downloadButton.style.cssText = 'z-index: 99999; margin-right: 10px; padding: 4.4px 12px; background-color: rgb(74, 74, 74); color: rgb(255, 255, 255); border: none; cursor: pointer;';

            // Step 6: Set the button to open the new URL in a new tab when clicked
            downloadButton.addEventListener('click', function() {
                window.open(newUrl, '_blank');
            });

            // Append the button before the element with id "video_share"
            const videoShareElement = document.getElementById('video_share');
            if (videoShareElement) {
                videoShareElement.parentNode.insertBefore(downloadButton, videoShareElement);
                videoShareElement.parentNode.removeChild(videoShareElement);
            }
        }
    }
})();