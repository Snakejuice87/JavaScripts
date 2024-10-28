// ==UserScript==
// @name         Motherless download Btn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace video URL with highest quality download link and add a download button.
// @author       Your Name
// @include        /^https?://(www\.)?.*?motherless.*?\..*/(.*/)?(/.*/)?/i
// @match        https://motherless.com/*
// @match        https://motherless.com/*/*
// @include        https://motherless.com/*
// @include        *://*motherless.com/*/*
// @include        *://www.motherless.com/*/*
// @grant        none
// ==/UserScript==

/*
(function() {
    'use strict';

    // Check if the current URL matches the specified pattern
    if (window.location.href.match(/^(https\:\/\/motherless\.com\/.\/(.*))/)) {
         // Create Text node
        var text = document.createTextNode('Source: ');

        // Get the elements by ID
        const highresElement = document.getElementById('highres');
        const flagButtonElement = document.getElementById('flag-button');

        if (highresElement && flagButtonElement) {
            // Clone the highres element (to create a copy)
            const highresCopy = highresElement.cloneNode(true);
							highresCopy.id = "highres2";
							highresCopy.style.fontSize='17px';
							highresCopy.style.padding='12px';
							highresCopy.style.marginLeft='300px';
							highresCopy.style.border='1px solid grey';
							highresCopy.style.borderRadius='15px';
							highresCopy.style.marginTop='-7px';

            // Get the parent of the flag button element
            const flagButtonParent = flagButtonElement.parentNode;

            // Insert the copied highres element after the parent of flag-button
            flagButtonParent.insertAdjacentElement('afterend', highresCopy);
            highresCopy.insertAdjacentElement('beforebegin', text);;
            highresCopy.parentNode.insertBefore(text, highresCopy);
        }
    }
})();
*/

(function() {
   'use-strict';

    let dwn = document.getElementById('btn-download-media');

    document.querySelectorAll('video').forEach(vid => {
          vid.pause(); 
          let srcs = vid.currentSrc; 
            dwn.setAttribute('href', srcs);
              dwn.setAttribute('target', '_blank');
             // dwn.style.border = '1px solid grey';

            /* dwn.addEventListener('click', function(event) {
              event.preventDefault();
                
              let cnf = confirm('Open in Newtab?\n\n' +srcs);
              if (cnf == true) { 
                window.open(srcs, '_blank');
              }

          });
            */
   });
})();

/*
(function() {
   'use-strict';

    let dwn = document.querySelectorAll('.video-js > div button');

    document.querySelectorAll('video').forEach(vid => {
          vid.pause(); 
          let srcs = vid.currentSrc; 
             vid.setAttribute('controls', 'true');
             vid.setAttribute('loop', 'true');
             dwn.style.display = 'none';

              dwn.addEventListener('contextmenu', function(event) {
              event.preventDefault();
                
              let cnt = vid.controls;
              if (cnt !== true) { 
                window.open(srcs, '_blank');
              }

          });
   });
})();
*/

(function() {
	'use strict';

	// Select the element with class 'fp-ui'
	const fpUiElement = document.querySelector('.video-js > div');
	const videos = document.querySelectorAll("video");

	videos.forEach(video => {
		// Check if the element exists
		if (fpUiElement) {
			
			// Add event listener for double click
			fpUiElement.addEventListener('contextmenu', function() {
			   event.preventDefault();
								
					// Toggle the display property between 'block' and 'none'
					fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
					video.controls = true;
                    
					video.setAttribute('controls', 'true');
				});
		}

		// video.setAttribute('controls', 'true');
		// video.controls = true;
		video.style.Zindex = '9999';

		if (video) {
			video.addEventListener('contextmenu', function() {
	        event.preventDefault();
											
					// Toggle the display property between 'block' and 'none'
					fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
					video.controls = false;
					video.removeAttribute('controls');
				});
		}
	});
})();





(function() {
	'use strict';

	// Select the element with class 'fp-ui'
	const fpUiElement = document.querySelector('.video-js');
	const videos = document.querySelectorAll("video");

	videos.forEach(video => {
		// Check if the element exists
		if (fpUiElement) {
			
			// Add event listener for double click
			fpUiElement.addEventListener('contextmenu', function() {
			   event.preventDefault();
								
					let fpUiElement = document.querySelectorAll('.video-js > div, .video-js > button');
					// Toggle the display property between 'block' and 'none'
					fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
					video.controls = true;
            video.style.display = 'block';
					video.setAttribute('controls', 'true');
				});
		}

		// video.setAttribute('controls', 'true');
		// video.controls = true;
		video.style.Zindex = '9999';
		video.style.display = 'block';

		if (video) {
			video.addEventListener('contextmenu', function() {
	        event.preventDefault();
											
					let fpUiElement = document.querySelectorAll('.video-js > div, .video-js > button');
					// Toggle the display property between 'block' and 'none'
					fpUiElement.style.display = (fpUiElement.style.display === 'none') ? 'block' : 'none';
					video.controls = false;
            video.style.display = 'block';
					video.removeAttribute('controls');
				});
		}
	});
})();




/*
(function() {
    'use strict';

    // Step 1: Match the current URL using the provided regex
    const urlRegex = /(https\:\/\/motherless\.com\/video\/(.*))/i;
    const match = window.location.href.match(urlRegex);

    if (match) {
        const videoId = match[1];

        // Step 2: Find all video sources on the page
        const videoSources = Array.from(document.querySelectorAll('video source'));

        if (videoSources.length > 0) {
            // Step 3: Identify the highest quality video source
            let highestQualitySrc = videoSources[0].src;

            videoSources.forEach(source => {
                const src = source.src;
                if (src.includes('720p'))  { // Modify this condition to your needs -- [OG] -->  ('720p')
                    highestQualitySrc = src;
                }
            });

            // Extract the quality part from the URL if present
            const qualityMatch = highestQualitySrc.match(/(\d{3,4}p)/);
            const highestQuality = qualityMatch ? qualityMatch[1] : 'default-quality';

            // Step 4: Construct the new URL
            const newUrl = `https://cdn5-videos.motherlessmedia.com/videos/${videoId}-${highestQuality}.mp4`;

            // Step 5: Create a button element
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download';
            downloadButton.class = 'icon-custom download big';
            downloadButton.style.cssText = 'z-index: 99999; border-radius: 50px; margin-right: 10px; padding: 3px 6px; background-color: #000000; color: #DADADA; border: none; cursor: pointer;';

            // Step 6: Set the button to open the new URL in a new tab when clicked
            downloadButton.addEventListener('click', function() {
                window.open(newUrl, '_blank');
            });

            // Append the button before the element with id ”video_share”
            // const videoShareElement = document.getElementById('button-report-upload');
            const videoShareElement = document.getElementById('video_share');
            if (videoShareElement) {
                    // videoShareElement.setAttribute('href', newUrl);
                    // videoShareElement.setAttribute('target', '_blank');
                    
                   videoShareElement.parentNode.insertBefore(downloadButton, videoShareElement);
                   // videoShareElement.parentNode.removeChild(videoShareElement);
            }
        }
    }
})();
*/