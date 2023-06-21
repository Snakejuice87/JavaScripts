// ==UserScript==
// @name           Gogoanime style
// @description    custom css style for Gogoannime
// @include        *gogoanime.*/*
// @include        *gogoanime.*
// @run-at         document-start

// ==/UserScript==

// NEW SITES CAN BE ADDED NOW

var css =
		"a, span, p { font-size: 16px !important; } a:visited { color: red !important; }",
	head = document.head || document.getElementsByTagName("head")[0],
	style = document.createElement("style");

head.appendChild(style);

style.type = "text/css";
if (style.styleSheet) {
	// This is required for IE8 and below.
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}
