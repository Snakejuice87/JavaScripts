// ==UserScript==
// @name         Kemono Timestamps to Human-Readable Format
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Convert timestamps to human-readable format like "yesterday" or "an hour ago"
// @author       ChatGPT
// @match        https://kemono.su/favorites
// @match        https://kemono.su/*
// @match        https://kemono.su/*/*
// @match        https://kemono.su/*/*/*
// @match        kemono.su
// @match        kemono.su/*
// @match        kemono.su/*/*
// @match        kemono.su/*/*/*
// @include        kemono.su
// @include        https://kemono.su/*
// @include        https://kemono.su/*/*
// @include        https://kemono.su/*/*/*
// @include        https://kemono.su/account/favorites/artists
// ==/UserScript==

(function() {
    'use strict';

        const tmes = document.querySelectorAll('.timestamp');
		          tmes.forEach(tme => {
					tme.style.color = '#76E658' // '#3781D6';
					tme.style.fontWeight = '600';
		        });
		
    // Function to calculate time difference and convert to human-readable format
    function timeAgo(datetime) {
        const now = new Date();
        const past = new Date(datetime);
        const secondsPast = (now - past) / 1000;

        if (secondsPast < 60) {
            return `${Math.floor(secondsPast)} seconds ago`;
        } else if (secondsPast < 3600) {
            return `${Math.floor(secondsPast / 60)} minutes ago`;
        } else if (secondsPast < 86400) {
            return `${Math.floor(secondsPast / 3600)} hours ago`;
        } else if (secondsPast < 172800) {
            return `yesterday`;
        } else {
            const daysPast = Math.floor(secondsPast / 86400);
            return `${daysPast} days ago`;
        }
    }

    // Function to update timestamps
    function updateTimestamps() {
        const timeElements = document.querySelectorAll('.timestamp');

        timeElements.forEach(timeElement => {
            const datetime = timeElement.getAttribute('datetime');
            const readableTime = timeAgo(datetime);

           timeElement.setAttribute('datetime', readableTime);
            timeElement.textContent = readableTime;
        });
    }

    // Run the function initially
    updateTimestamps();
    // Run the function again when the DOM changes (for dynamically loaded content)
    const observer = new MutationObserver(updateTimestamps);
    observer.observe(document.body, { childList: true, subtree: true });
})();
