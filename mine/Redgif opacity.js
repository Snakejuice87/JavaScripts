// ==UserScript==
// @name         Redgif opacity
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds looping controls to video elements
// @author       SnakeJuice
// @match              https://www.redgifs.com/*
// @match              https://www.redgifs.com/*/*
// @include    https://www.redgifs.com/*/*/*/*/*
// @include    https://www.redgifs.com/*/*/*/*
// @include    https://www.redgifs.com/*/*/*
// @include    https://www.redgifs.com/*/*
// @include    https://www.redgifs.com/*
// @match     https://www.redgifs.com/gifs/*
// @grant        none
// ==/UserScript==


(function() {
	'use strict';

	// Function to update timestamps
	function updateTimestamps() {

		const videos = document.querySelectorAll("video");

		videos.forEach(video => {
			video.defaultMuted = false;
			video.defaultUnmuted = true;
			video.volume = 1;
		});

		if (video) {
			video.addEventListener('playing', function() {
				this.muted = false;
				this.unmuted = true;
				this.volume = 1;
				this.loop = true;
			});
		}

		const rights = document.querySelectorAll('.skyWrapper > .right', 'div.right.side');
		rights.forEach(right => {
			right.style.display = 'none'; // '#3781D6';
			right.style.opacity = '0';
		});

		const rightss = document.querySelectorAll('.skyWrapper > .side');
		rightss.forEach(rightz => {
			rightz.style.display = 'none'; // '#3781D6';
			rightz.style.opacity = '0';
		});

		const tmes = document.querySelectorAll('.shadow');
		tmes.forEach(tme => {
			tme.style.display = 'none'; // '#3781D6';
			tme.style.opacity = '0';
		});

		const tmess = document.querySelectorAll('.shadow-hover');
		tmess.forEach(tmez => {
			tmez.style.display = 'none' // '#3781D6';
			tmez.style.opacity = '0';
		});
	};
});

//   --------
var result = [];

(function() {
	'use strict';

	var lis = document.querySelectorAll("li");

	for (let li of lis) {
		li.style.opacity = "1";
	}
	var shadows = document.querySelectorAll(".shadow");
	for (let shadow of shadows) {
		shadow.style.opacity = "0";
		shadow.style.display = "none";
	}
	var shadowHovers = document.querySelectorAll(".shadow-hover");
	for (let shadowHover of shadowHovers) {
		shadowHover.style.opacity = "0";
		shadowHover.style.display = "none";
	}

	// Run the function initially
	updateTimestamps();

	// Run the function again when the DOM changes (for dynamically loaded content)
	const observer = new MutationObserver(updateTimestamps);
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});

})();

completion(result);



(function() {
	'use strict';

	// Create loop controls for each shadow element
	document.querySelectorAll('.shadow').forEach((shadow) => {
		// Create a container for the buttons
		shadow.style.display = none;
		shadow.style.opacity = 0;
	});

	// Create loop controls for each shadow-hover element
	document.querySelectorAll('.shadow-hover').forEach((shadow - hover) => {
		// Create a container for the buttons
		shadow - hover.style.display = none;
		shadow - hover.style.opacity = 0;
	});

	var videos = document.querySelectorAll(".shadow");
	for (let video of videos) {
		video.style.opacity = "0";
		video.style.display = "none";
	};

	var videoes = document.querySelectorAll(".shadow-hover");
	for (let videoe of videoes) {
		videoe.style.opacity = "0";
		videoe.style.display = "none";
	};
})();



(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		console.log('Injected');

		var scss = 'div.thumb_info > .views { font-size: 18px !important; color: yellow; } ' +
			'.views { font-size: 18px !important; } ' +
			'.thumb_info { /* font-size: 18px !important; */ } ' +
			'.view { /* font-size:18px !important; */ }';

		var head = document.head || document.getElementsByTagName("head")[0],
			style = document.createElement("style");

		head.appendChild(style);
		style.type = "text/css";
		style.setAttribute('id', 'styleInject');
		if (style.styleSheet) {
			style.styleSheet.cssText = scss;
		} else {
			style.appendChild(document.createTextNode(scss));
		}

		// Apply styles to .thumb_info and .views elements
		var divs = document.querySelectorAll(".thumb_info>.views");
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.fontSize = "18px";
		}

		var divs2 = document.getElementsByClassName("views");
		console.log(divs2);
		for (var i = 0; i < divs2.length; i++) {
			divs2[i].style.fontSize = "18px";
			divs2[i].style.color = "yellow";
		}

		// Enable controls on video elements
		/* var divs3 = document.getElementsByTagName("video");
		for (var i = 0; i < divs3.length; i++) {
		    divs3[i].setAttribute('controls', 'true');
		    divs3[i].controls = true;
		    divs3[i].style.zIndex = '9999';  // Corrected casing
		} */
	});
})();



(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		console.log('Injected');

		var scss = '.page.homePage.feed { width: 720px; } .previewFeed { width: 720px; max-width: 720px; }';

		var head = document.head || document.getElementsByTagName("head")[0],
			style = document.createElement("style");

		head.appendChild(style);
		style.type = "text/css";
		style.setAttribute('id', 'styleInject');
		if (style.styleSheet) {
			style.styleSheet.cssText = scss;
		} else {
			style.appendChild(document.createTextNode(scss));
		}

		// Apply styles to both elements
		var divs = document.querySelectorAll(".page.homePage.feed");
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.fontSize = "18px";
		}

		var divs2 = document.getElementsByClassName("previewFeed");
		console.log(divs2);
		for (var i = 0; i < divs2.length; i++) {
			divs2[i].style.width = "720px";
			divs2[i].style.maxWidth = "720px";
		}
	});
})();
