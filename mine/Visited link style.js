// ==UserScript==
// @name           Visited link style
// @description    custom link css style 
// @include        *.*
//  @match  *.*
// @run-at         document-start
// @exclude    github.com
// @version       1.0
// ==/UserScript==


// NEW SITES CAN BE ADDED NOW

var css =
		"a:visited { border: 1px solid red; color: red; text-decoration: underline}",
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
