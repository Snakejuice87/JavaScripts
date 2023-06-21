// ==UserScript==
// @name         Sankaku Channel Access Rights
// @namespace    http://tampermonkey.net/
// @version      20201018
// @description  Access blocked images on Sankaku Channel
// @author       Couchy
// @match        https://chan.sankakucomplex.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function unblockThumbs(target) {
    const thumbs = target.querySelectorAll("span.thumb");
    for (const thumb of thumbs) {
        const link = thumb.firstElementChild;
        if (!link || link.href != "https://get.sankaku.plus/") {
            continue;
        }
        const id = thumb.id.substring(1);
        link.href = `/post/show/${id}`;
        link.removeAttribute("target");
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function(){
            //console.log(oReq.responseText);
            const data = JSON.parse(oReq.responseText)[0];
            //console.log(data);
            let scale = 1;
            if (data.preview_width > 150 || data.preview_height > 150) {
                scale = 150 / Math.max(data.preview_width, data.preview_height);
            }

            const previewElem = thumb.children[0].children[0];
            //console.log(previewElem);
            previewElem.width = data.preview_width * scale;
            previewElem.height = data.preview_height * scale;
            previewElem.src = data.preview_url;

            let title = "";
            for (let tag of data.tags) {
                title += `${tag.name_en} `;
            }
            //TODO: other info in title
            previewElem.title = title;
        });
        oReq.open("GET", `https://capi-v2.sankakucomplex.com/posts?lang=en&page=1&limit=1&tags=id_range:${id}`);
        oReq.send();
    }
}

function unblockLarge(content) {
    content.innerHTML = "";
    const id = document.querySelector('meta[property~="og:title"][content]').content.slice(5);
    const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function(){
            //console.log(oReq.responseText);
            const data = JSON.parse(oReq.responseText)[0];
            //console.log(data);
            let scale = 1;
            if (data.sample_width > 1000 || data.sample_height > 1000) {
                scale = 1000 / Math.max(data.sample_width, data.sample_height);
            }

            let img;
            if (!data.file_type) { //Flash
                img = document.createElement("object");
                let embed = document.createElement("embed");
                embed.src = data.sample_url;
                embed.width = data.sample_width * scale;
                embed.height = data.sample_height * scale;
                img.appendChild(embed);
            }
            else if (data.file_type.startsWith("image")){
                img = document.createElement("img");
                img.src = data.sample_url;
            }
            else if (data.file_type.startsWith("video")) {
                img = document.createElement("video");
                img.controls = true;
                img.autoplay = false;
                img.src = data.sample_url;
            }

            if (img) {
                img.width = data.sample_width * scale;
                img.height = data.sample_height * scale;

                const container = document.createElement("div");
                container.setAttribute("style", "display: flex; flex-direction: column; padding-left: 1em;");

                if (data.width != data.sample_width || data.height != data.sample_height) {
                    const note = document.createElement("span");
                    note.textContent = "Showing resized - click for full size.";
                    container.appendChild(note);
                }

                const full = document.createElement("a");
                full.href = data.file_url;
                full.target = "_blank";
                full.appendChild(img);
                container.appendChild(full);

                content.appendChild(container);
            }
            else {
                console.log(`Unhandled file type: ${data.file_type}`);
            }
        });
        //console.log(`querying id: ${id}`);
        oReq.open("GET", `https://capi-v2.sankakucomplex.com/posts?lang=en&page=1&limit=1&tags=id_range:${id}`);
        oReq.send();
}

if (document.querySelector("span.thumb")) {
    unblockThumbs(document);
}
const list = document.getElementById("post-list");
if (list) {
    const callback = function (mutations){
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].className == "content-page") {
                console.log(mutation.addedNodes[0]);
                unblockThumbs(mutation.addedNodes[0]);
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(list, {childList: true, subtree: true});
}
const content = document.getElementById("post-content");
if (content && content.querySelector(".post-content-notification")) {
    unblockLarge(content);
}

// Fix Sankaku's shit
/*
var parts = /(.*) Rating:(\w)\w+ Score:(\S+) Size:(\d+)x(\d+) User:(.*)/.exec(title);
				o.tags = parts[1];
				o.rating = parts[2].toLowerCase();
				o.score = parseFloat(parts[3]);
				o.width = parseInt(parts[4]);
				o.height = parseInt(parts[5]);
				o.author = parts[6];
*/
const realExec = RegExp.prototype.exec;
RegExp.prototype.exec = function(str){
    let result = realExec.apply(this, [str]);
    if (!result && this.source.indexOf("Rating") > -1) {
        result = ["","","e","0","0","0",""];
    }
    return result;
};

})();