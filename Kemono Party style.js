// ==UserScript==
// @name           Kemono Party style
// @description    custom css style for kemono party
// @include        https://kemono.su/*
// @include        https://kemono.su/*/user/*/
// @run-at         document-start

// ==/UserScript==

// NEW SITES CAN BE ADDED NOW

var css =
		"*:visited { color: orange; border: blue 2px solid !important; } card-list__items, div:visited { border: blue 2px solid !important; } card-list__items:visited { border: blue 2px solid !important; } a, card-list__items:visited { border: blue 2px solid !important; } /* card-list__items, div { --card-size: 250px; } post-card__image { objectfit: contain; background: contain; fit: contain; } post-card__image, img { objectfit: contain; background: contain; fit: contain; } */",
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
