// ==UserScript==
// @name        Kemono.party Image Full Size Autoloader
// @description Auto load full size image in kemono.party
// @match     https://kemono.party/*/user/*/post/*
// @version     1.0.0
// @namespace   andyching168.scripts
// @author      andyching168
// @license     MIT License
// @run-at      document-start
// @grant GM_log
// ==/UserScript==


var G=0;

setTimeout(R, 500);
function R() {
    G=document.querySelector("#page > div > div.post__files").childElementCount


for (var i = 1; i <= G; i++) {
          document.querySelector("#page > div > div.post__files > div:nth-child("+i+") > a > img").src=document.querySelector("#page > div > div.post__files > div:nth-child("+i+") > a").href;
}

}
