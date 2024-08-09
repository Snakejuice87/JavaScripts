// ==UserScript==
// @name          Sankakucomplex ad-block click
// @description    code to press continue button
// @match      https://chan.sankakucomplex.com/*
// @match      https://chan.sankakucomplex.com/*/*
// @version       1.0
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        const button = document.querySelector('#content > div:nth-child(16) > div:nth-child(3) > div > a:last-child > button');
        if (button) {
            button.click();  // Automatically clicks the button when the page is fully loaded
        }
    });
})();
