// ==UserScript==
// @name         Kemono UI tweak.user
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MI
// @description  Modifies the new Kemono Party UI to look more like the old one
// @author       parky
// @include        https://kemono.party/*/*
// @include        https://kemono.party/*/user/*/
// ==/UserScript==

(function() {
    console.log('hehe');
    var imgs = document.getElementsByClassName("post-card__image");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.objectFit="contain";
    }

    var divs = document.getElementsByClassName("card-list__items");
    console.log(divs);
    for (var j = 0; j < divs.length; j++) {
        divs[0].style.cssText="--card-size:250px";
    }
})();