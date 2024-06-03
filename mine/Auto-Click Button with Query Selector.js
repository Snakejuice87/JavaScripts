// ==UserScript==
// @name         Auto-Click Button with Query Selector
// @namespace    http://hyperweb.net/
// @version      1.0
// @description  Automatically clicks a button using a query selector
// @match        *://chan.sankakucomplex.com/*
// @match       *://chan.sankakucomplex.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
center secondary
    // Function to simulate a click event
    function autoClick() {
        var button = document.querySelector('button.secondary[type="submit"]'); // Adjust the selector to target your button
        if (button) {
            button.click();
            console.log('Button clicked!');
        } else {
            console.log('Button not found!');
        }
    }

    // Run the autoClick function after the page loads
    window.onload = autoClick;
})();
