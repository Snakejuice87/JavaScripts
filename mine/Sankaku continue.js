// ==UserScript==
// @name         Sankaku continue
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically clicks the CONTINUE button after page load
// @author       SnakeJuice
// @include       *://chan.sankakucomplex.com/*
// @match       *://chan.sankakucomplex.com/*
// @match       *://idol.sankakucomplex.com/*
// @match       *://legacy.sankakucomplex.com/*
// @match      https://chan.sankakucomplex.com/en/posts/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

// ==UserScript==
// @name         Auto Click CONTINUE Button (Robust + Retry)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically clicks the CONTINUE button after page load, retries until successful
// @match        *://*/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let attempts = 0;
    const maxAttempts = 200;        // ~20 seconds at 100ms
    const interval = 100;

    function findContinueButton() {
        const buttons = document.querySelectorAll('button');
        for (const btn of buttons) {
            if (
                btn.textContent.trim().toUpperCase() === 'CONTINUE' &&
                btn.classList.contains('center') &&
                btn.classList.contains('secondary')
            ) {
                return btn;
            }
        }
        return null;
    }

    const timer = setInterval(() => {
        attempts++;

        const btn = findContinueButton();
        if (btn) {
            console.log('[AutoClick] CONTINUE found. Clicking.');
            btn.click();
            clearInterval(timer);
            return;
        }

        if (attempts >= maxAttempts) {
            console.warn('[AutoClick] Gave up after too many attempts.');
            clearInterval(timer);
        }
    }, interval);
})();

/*
(function () {
    'use strict';

    function clickContinue() {
        const btn = document.querySelector('button.center.secondary[onclick*="t501398"]');
        if (btn) {
            console.log('[AutoClick] CONTINUE button found — clicking.');
            btn.click();
            return true;
        }
        return false;
    }

    // Try immediately
    if (clickContinue()) return;

    // Otherwise observe DOM changes (for delayed content)
    const observer = new MutationObserver(() => {
        if (clickContinue()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
*/