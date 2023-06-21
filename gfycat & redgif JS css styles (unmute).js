// ==UserScript==
// @name                gfycat & redgif JS css styles (unmute)
// @description         z-index  unmute button
// @match               *gfycat.com/*
// @match          *://gfycat.com/
// @include       *gfycat.com/*
// @match          *://redgif.com/
// @include       *redgif.com/*
// @icon           https://www.google.com/s2/favicons?sz=64&domain=gfycat.com
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @run-at       document-start
// ==/UserScript==

// TODO:
//  Shortcut for opening the picture on a background tab (issues/25)
//  Date format (issues/26)

(function () {
    'use strict';

 // Include button in right corner to center video on screen
        var node = document.getElementbyClass("span.SVGInline.ic.ic-sound");
        node.setAttribute("style","z-index: 999999;");
        document.body.appendChild(node);
}());

(function addStyle() {
    // While <head> is not loaded we keep trying
    if (!document.querySelector("head")) {
        return setTimeout(addStyle, 50);
    }

    // We create an object and start including its content to include in DOM at the end
    var ephcss =
    // Hide ads while we can't remove them
    "iframespan.SVGInline.ic.ic-sound {" +
        "z-index: 99999 !important;" +
        "}" +
    // Gifs page
    ".gifsWrapper ul.gifs li.first {" +
        "margin-right: 12px !important;" +
        "margin-top: 0 !important;" +
        "height: 353px !important;" +
        "margin-bottom: 12px !important;" +
    "}" +
    "@media only screen and (min-width: 1350px) {" +
        ".gifsWrapper ul.gifs li.first {" +
            "height: 381px !important;" +
        "}" +
        ".gifsWrapper ul.gifs li:nth-child(8) {" +
            "display: none !important;" +
        "}" +
    "}" +
    ".gifColumnLeft.float-left {" +
        "width: 100% !important;" +
    "}";

    // Inject created CSS
    var ephnode = document.createElement("style");
    ephnode.type = "text/css";
    ephnode.id = "EPH-style";
    ephnode.appendChild(document.createTextNode(ephcss));
    document.head.appendChild(ephnode);
}());

