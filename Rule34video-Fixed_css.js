
// ==UserScript==
// @name           Rule34video-Fixed_css
// @namespace      http://tampermonkey.net/
// @version        0.2
// @description    Adjust font size and enable video controls
// @include        https://rule34video.com/*
// @include        https://rule34video.com/*/*/*/*
// @include        https://rule34video.com/*/*/*
// @include        https://rule34video.com/*/*
// @include       https://rule34video.com/*
// @match      *://rule34video.com/*
// @include        https://rule34video.com
// @match     https://rule34video.com
// @match     https://rule34video.com/*
// @include     rule34video.com/*
// @include     rule34video.com/*/*
// @include     rule34video.com/*/*/*
// @include     rule34video.com/*/*/*/*
// @run-at      document-start
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('Injected');

        var scss = 'div.thumb_info > .views { font-size: 18px !important; color: yellow; } ' +
                   '.views { font-size: 18px !important; } ' +
                   '.thumb_info { /* font-size: 18px !important; */ } ' +
                   '.view { /* font-size:18px !important; */ }' +
                      '.fp_player > div:last-child > img { display: none; }',

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
        }*

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
