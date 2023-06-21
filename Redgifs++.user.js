// ==UserScript==
// @name         Redgifs++
// @version      1.1
// @license      AGPLv3
// @author       midnightarousal93
// @description  Automatically sets Redgifs to HD and unmutes when viewed directly or on Reddit. Inspired by "betterRedgifs" by u/MatthieuG7.
// @match        https://www.redgifs.com/ifr/*
// @match        https://www.redgifs.com/watch/*
// @match        https://old.reddit.com/*
// @match        https://www.reddit.com/*
// @grant        none
// @namespace    https://greasyfork.org/users/1073886
// ==/UserScript==

if (window.location.href.includes("redgifs.com")) {

    const click = (elm) => {
        const evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 1, 1, 1, 1, false, false, false, false, 0, null);
        elm.dispatchEvent(evt);
    }

    const hdInterval = setInterval(() => {
        const gear = document.querySelector(".gear");
        if (gear) {
            if (gear.parentNode.childNodes[1].outerText == "SD") {
                click(gear);
                return clearInterval(hdInterval);
            }
            else if (gear.parentNode.childNodes[1].outerText == "HD") {
                return clearInterval(hdInterval);
            }
        }
        const sd = document.querySelector(".sd");
        if (sd) {
            click(sd);
            return clearInterval(hdInterval);
        }
        const hd = document.querySelector(".hd");
        if (hd) {
            return clearInterval(hdInterval);
        }
    }, 100)

    function unmute() {
        if (!this.unmuted) {
            this.unmuted = true
            const unmuteInterval = setInterval(() => {
                const soundOff = document.querySelector(".soundOff");
                if (soundOff) {
                    click(soundOff);
                    return clearInterval(unmuteInterval);
                }
                const video = document.querySelector(".embeddedPlayer video");
                if (video && video.muted === true) {
                    video.muted = false;
                    return clearInterval(unmuteInterval);
                }
            }, 100)
        }
    }

    if (window.top === window.self) {
        unmute();
    }
    else {
        window.addEventListener("message", function(event) {
            if (event.data.unmuteRedgifs) {
                unmute();
            }
        }, false);
    }
}
else if (window.location.href.includes("old.reddit.com")) {
    setInterval(() => {
        const iframes = document.getElementsByTagName("iframe");
        for(let i = 0; i < iframes.length; i++) {
            iframes[i].contentWindow.postMessage({
                unmuteRedgifs: true
            }, "*");
        }
    }, 500)
}
else if (window.location.href.includes("www.reddit.com")) {
    const processElement = (element) => {
        const iframes = element.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].contentWindow.postMessage({
                unmuteRedgifs: true
            }, "*");
        }
    }, 500)
}
else if (window.location.href.includes("twitter.com")) {
    const processElement = (element) => {
        const iframes = element.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].contentWindow.postMessage({
                unmuteRedgifs: true
            }, "*");
        }
    }
}
else if (window.location.href.includes("mobile.twitter.com")) {
    const processElement = (element) => {
        const iframes = element.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].contentWindow.postMessage({
                unmuteRedgifs: true
            }, "*");
        }
    }
}
    setInterval(() => {
        const content = document.querySelectorAll('[data-test-id="post-content"]');
        for (let i = 0; i < content.length; i++) {
            processElement(content[i]);
        }
        const closeButtons = document.querySelectorAll('[data-click-id="expando_close"]');
        for (let i = 0; i < closeButtons.length; i++) {
            const postContainer = closeButtons[i].closest('[data-testid="post-container"]');
            if (postContainer) {
                processElement(postContainer);
            }
        }
    }, 500)
}
