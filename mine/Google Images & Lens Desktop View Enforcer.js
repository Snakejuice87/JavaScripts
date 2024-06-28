// ==UserScript==
// @name         Google Images & Lens Desktop View Enforcer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Force desktop view for images.google.com and lens.google.com, mobile view for other google.com domains
// @author       ChatGPT
// @match        *://*.google.com/*
// @include        *://*.google.com/*
// @include        *://images.google.com/*
// @match        *://lens.google.com/*
// @match        *.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to override the user agent
    function overrideUserAgent(uaString) {
        Object.defineProperty(navigator, 'userAgent', {
            value: uaString,
            writable: false,
            configurable: false
        });
    }

    // Define the desktop and mobile user agent strings
    const desktopUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36';
    const mobileUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';

    // Get the current hostname
    const hostname = window.location.hostname;

    // Check if the hostname matches images.google.com or lens.google.com
    if (hostname === 'images.google.com' || hostname === 'lens.google.com') {
        overrideUserAgent(desktopUserAgent);
    } else if (hostname.endsWith('.google.com')) {
        overrideUserAgent(mobileUserAgent);
    }

})();
