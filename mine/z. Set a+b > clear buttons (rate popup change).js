// ==UserScript==
// @name         z. Set a+b > clear buttons (rate popup change)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a text input and button to change video playback rate
// @author       Your Name
// @match        *://*/*
// @include      *./*
// @include      /.*://.*\..*\/.*(\/.*)+?\.(mp4|mov|avi|mp3|ogg|wav).*?/
// @match      /*://*(mp4|mov|avi|mp3|ogg|wav)*/
// @include      https?:\/\/.*\.(?:mp4|mov|avi|mp3|ogg|wav)($|.*)
// @exclude    https://snakejuice87.github.io/_posts/Gemma pornhub gif videos.html
// @exclude    anitaku.*
// @exclude    *://anitaku.*/*
// @exclude    *://anitaku.*/*/*
// @exclude    *://anitaku.*
// @exclude    anitaku.*
// @exclude    anitaku.**
// @exclude    anitaku.*/*
// @exclude    anitaku.*/*/*
// @exclude    https://www.netflix.com/watch/*
// @exclude     *://*.google.com
// @exclude     *://*.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    document.querySelectorAll('video').forEach((video, index) => {
        const controlContainer = document.createElement('div');
        controlContainer.style.position = 'relative';
        controlContainer.style.marginBottom = '10px';
        controlContainer.style.marginTop = '30px';
        controlContainer.style.top = '0px';
        controlContainer.style.zIndex = '999999';
        controlContainer.style.fontSize = '15px';
        controlContainer.style.fontWeight = 'bold';
        // controlContainer.style.transform = 'scale(1, 1)';
        controlContainer.style.marginLeft = '50px';

        const buttonA = document.createElement("button");
        buttonA.innerText = "Set A";
        // buttonA.style.backgroundColor = "lightgray";
        // buttonA.style.color = "black";
        const buttonB = document.createElement("button");
        buttonB.innerText = "Set B";
        // buttonA.style.backgroundColor = "lightgray";
        // buttonA.style.color = "black";
        const gap1 = document.createElement("span");
        gap1.innerText = " - ";
        gap1.style.width = "10px";
        const buttonClearA = document.createElement("button");
        buttonClearA.innerText = "Clear A";
        // buttonClearA.style.backgroundColor = "lightgray";
        // buttonClearA.style.color = "black";
        const buttonClearB = document.createElement("button");
        buttonClearB.innerText = "Clear B"
        // buttonClearB.style.backgroundColor = "lightgray";
        // buttonClearB.style.color = "black";;
        const gap2 = document.createElement("span");
        gap2.innerText = " - ";
        gap2.style.width = "10px";
        const buttonClear = document.createElement("button");
        buttonClear.innerText = "Clear BOTH"
        const gap = document.createElement("span");
        gap.innerText = " - ";
        gap.style.width = "10px";
        const goto = document.createElement("button");
        goto.innerText = "Goto"
        // buttonClear.style.backgroundColor = "lightgray";
        // buttonClear.style.color = "black";;
        const gap3 = document.createElement("span");
        gap3.innerText = " - ";
        gap3.style.width = "10px";
        const buttonSpeedD = document.createElement("button")
        buttonSpeedD.innerText = "Speed -"
        // buttonSpeedD.style.backgroundColor = "lightgray";
        // buttonSpeedD.style.color = "black";
        const buttonSpeedU = document.createElement("button");
        buttonSpeedU.innerText = "Speed +"
        // buttonSpeedU.style.backgroundColor = "lightgray";
        // buttonSpeedU.style.color = "black";
        const buttonSpeedt = document.createElement("button");
        buttonSpeedt.innerText = "Enter #"
        // buttonSpeedt.style.backgroundColor = "lightgray";
        // buttonSpeedt.style.color = "black";
        const gap4 = document.createElement("span");
        gap4.innerText = " - ";
        gap4.style.width = "10px";
        const buttonSrc = document.createElement("button");
        buttonSrc.innerText = "Video Src"
        // buttonSrc.style.backgroundColor = "lightgray";
        // buttonSrc.style.color = "black";

        controlContainer.appendChild(buttonA);
        controlContainer.appendChild(buttonB);
        controlContainer.appendChild(gap1);
        controlContainer.appendChild(buttonClearA);
        controlContainer.appendChild(buttonClearB);
        controlContainer.appendChild(gap2);
        controlContainer.appendChild(buttonClear);
        controlContainer.appendChild(gap);
        controlContainer.appendChild(goto);
        controlContainer.appendChild(gap3);
        controlContainer.appendChild(buttonSpeedD);
        controlContainer.appendChild(buttonSpeedU);
        controlContainer.appendChild(buttonSpeedt);
        controlContainer.appendChild(gap4);
        controlContainer.appendChild(buttonSrc);

        video.parentNode.insertBefore(controlContainer, video);

        let loopStart = null;
        let loopEnd = null;
        let loopInterval = null;
        let sec = null;

        const showRateOverlay = (rate) => {
            /* if (overlay) {
                video.parentNode.removeChild(overlay);
            } */
            const overlay = document.createElement('div');
            overlay.innerText = `Rate = ${rate.toFixed(2)}`;
            overlay.style.position = 'absolute';
            overlay.style.marginTop = '50%';
            overlay.style.marginLeft = '50%';
            overlay.style.left = '50%';
            overlay.style.top = '50%';
            overlay.style.transform = 'translateX(-50vh)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            overlay.style.color = 'white';
            overlay.style.fontSize = '18px';
            overlay.style.fontFamily = 'helvetica';
            overlay.style.fontWeight = 'bold';
            overlay.style.padding = '10px 20px';
            overlay.style.borderRadius = '5px';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.5s ease-in';
            overlay.style.zIndex = '100000';
            
            video.parentNode.appendChild(overlay, video);

            // document.body.appendChild(overlay);
            setTimeout(() => overlay.style.opacity = '0.6', 150); // Fade in
            setTimeout(() => overlay.style.opacity = '0', 1600); // Fade out
            setTimeout(() => video.parentNode.removeChild(overlay), 2000); // Remove element
        };

        buttonA.addEventListener('click', () => {
            loopStart = video.currentTime;
            console.log(`Loop (A) set to: ${loopStart}`);
        });

        buttonB.addEventListener('click', () => {
            loopEnd = video.currentTime;
            console.log(`Loop (B) set to: ${loopEnd}`);
            if (loopStart !== null && loopEnd !== null) {
                if (loopInterval) clearInterval(loopInterval);
                loopInterval = setInterval(() => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                    }
                }, 100);
            }
        });

        buttonClearA.addEventListener('click', () => {
            loopStart = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A cleared');
        });

        buttonClearB.addEventListener('click', () => {
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop B cleared');
        });

        buttonClear.addEventListener('click', () => {
            loopStart = null;
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A & B cleared');
        });
        
        goto.addEventListener('click', () => {
            let time = video.currentTime * 60;
            
            let input;
            do {
                input = prompt("Enter a number - " + video.currentTime.toString(), time.toString());
            } while (isNaN(input) || input.trim() === "");
            input = Number(input);
            /* let prompt = confirm(input + '\nif number entered minutes + seconds press OK\nOR\nCancel: if in seconds?');
            if (prompt == true) { 
                let sec = input * 60;
            } else if (prompt == false) {
                let sec = input;
            } */
            let sec = input / 60;
            video.currentTime = sec;
            console.log('Goto = ' + video.currentTime + ' (' + sec + ')');
        });
        
        buttonSpeedD.addEventListener('click', () => {
            video.playbackRate -= 0.05;
            console.log('Rate = ' + video.playbackRate);
            showRateOverlay(video.playbackRate);
        });

        buttonSpeedU.addEventListener('click', () => {
            video.playbackRate += 0.05;
            console.log('Rate = ' + video.playbackRate);
            showRateOverlay(video.playbackRate);
        });

        buttonSpeedt.addEventListener('click', () => {
            let input;
            do {
                input = prompt("Enter a number - " + video.playbackRate.toString(), video.playbackRate.toString());
            } while (isNaN(input) || input.trim() === "");
            input = Number(input);
            video.playbackRate = input;
            console.log('Rate = ' + input);
            showRateOverlay(video.playbackRate);
        });

        buttonSrc.addEventListener('click', () => {
            video.pause(); 
            let srcs = video.currentSrc; 
            let cnf = confirm('Open in Newtab?\n\n' +srcs); 
            if (cnf == true) { 
                window.open(srcs, '_blank');
                }
        });
    });
})();




/*
(function() {
    'use strict';
    
    document.querySelectorAll('video').forEach((video, index) => {
        const controlContainer = document.createElement('div');
        controlContainer.style.position = 'relative';
        controlContainer.style.marginBottom = '10px';
        controlContainer.style.marginTop = '30px';
        controlContainer.style.top = '0px';
        controlContainer.style.zIndex = '999999';
        controlContainer.style.fontSize = '15px';
        controlContainer.style.fontWeight = 'bold';
        // controlContainer.style.transform = 'scale(1, 1)';
        controlContainer.style.marginLeft = '50px';

        const buttonA = document.createElement("button");
        buttonA.innerText = "Set A";
        // buttonA.style.backgroundColor = "lightgray";
        // buttonA.style.color = "black";
        const buttonB = document.createElement("button");
        buttonB.innerText = "Set B";
        // buttonB.style.backgroundColor = "lightgray";
        // buttonB.style.color = "black";
        const gap1 = document.createElement("span");
        gap1.innerText = " - ";
        gap1.style.width = "10px";
        const buttonClearA = document.createElement("button");
        buttonClearA.innerText = "Clear A";
        // buttonClearA.style.backgroundColor = "lightgray";
        // buttonClearA.style.color = "black";
        const buttonClearB = document.createElement("button");
        buttonClearB.innerText = "Clear B"
        // buttonClearB.style.backgroundColor = "lightgray";
        // buttonClearB.style.color = "black";;
        const gap2 = document.createElement("span");
        gap2.innerText = " - ";
        gap2.style.width = "10px";
        const buttonClear = document.createElement("button");
        buttonClear.innerText = "Clear BOTH"
        // buttonClear.style.backgroundColor = "lightgray";
        // buttonClear.style.color = "black";;
        const gap = document.createElement("span");
        gap.innerText = " - ";
        gap.style.width = "10px";
        const buttonSpeedD = document.createElement("button")
        buttonSpeedD.innerText = "Speed -"
        // buttonSpeedD.style.backgroundColor = "lightgray";
        // buttonSpeedD.style.color = "black";
        const buttonSpeedU = document.createElement("button");
        buttonSpeedU.innerText = "Speed +"
        // buttonSpeedU.style.backgroundColor = "lightgray";
        // buttonSpeedU.style.color = "black";
        const buttonSpeedt = document.createElement("button");
        buttonSpeedt.innerText = "Enter #"
        // buttonSpeedt.style.backgroundColor = "lightgray";
        // buttonSpeedt.style.color = "black";
        const gap4 = document.createElement("span");
        gap4.innerText = " - ";
        gap4.style.width = "10px";
        const buttonSrc = document.createElement("button");
        buttonSrc.innerText = "Video Src"
        // buttonSrc.style.backgroundColor = "lightgray";
        // buttonSrc.style.color = "black";

        controlContainer.appendChild(buttonA);
        controlContainer.appendChild(buttonB);
        controlContainer.appendChild(gap1);
        controlContainer.appendChild(buttonClearA);
        controlContainer.appendChild(buttonClearB);
        controlContainer.appendChild(gap2);
        controlContainer.appendChild(buttonClear);
        controlContainer.appendChild(gap);
        controlContainer.appendChild(buttonSpeedD);
        controlContainer.appendChild(buttonSpeedU);
        controlContainer.appendChild(buttonSpeedt);
        controlContainer.appendChild(gap4);
        controlContainer.appendChild(buttonSrc);

        video.parentNode.insertBefore(controlContainer, video);

        let loopStart = null;
        let loopEnd = null;
        let loopInterval = null;

        const showRateOverlay = (rate) => {
            const overlay = document.createElement('div');
            overlay.innerText = `${rate.toFixed(2)}`;
            overlay.style.position = 'relative';
            overlay.style.marginTop = '10%';
            overlay.style.left = '50%';
            overlay.style.transform = 'translateX(-50%)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            overlay.style.color = 'white';
            overlay.style.fontSize = '18px';
            overlay.style.fontFamily = 'helvetica';
            overlay.style.fontWeight = 'bold';
            overlay.style.padding = '10px 20px';
            overlay.style.borderRadius = '5px';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.zIndex = '100000';
            
            video.parentNode.appendChild(overlay, video);
            
            if (overlay) {
                setTimeout(() => video.parentNode.removeChild(overlay), 10); // Remove element
            }
            
            // document.body.appendChild(overlay);
            setTimeout(() => overlay.style.opacity = '0.6', 150); // Fade in
            setTimeout(() => overlay.style.opacity = '0', 1600); // Fade out
            setTimeout(() => video.parentNode.removeChild(overlay), 2000); // Remove element
        };

        buttonA.addEventListener('click', () => {
            loopStart = video.currentTime;
            console.log(`Loop (A) set to: ${loopStart}`);
            showRateOverlay(video.currentTime)
        });

        buttonB.addEventListener('click', () => {
            loopEnd = video.currentTime;
            console.log(`Loop (B) set to: ${loopEnd}`);
            showRateOverlay(video.currentTime)
            if (loopStart !== null && loopEnd !== null) {
                if (loopInterval) clearInterval(loopInterval);
                loopInterval = setInterval(() => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                    }
                }, 100);
            }
        });

        buttonClearA.addEventListener('click', () => {
            loopStart = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A cleared');
            // showRateOverlay('A cleared')
        });

        buttonClearB.addEventListener('click', () => {
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop B cleared');
            // showRateOverlay('A cleared')
        });

        buttonClear.addEventListener('click', () => {
            loopStart = null;
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A & B cleared');
            // showRateOverlay('A & B cleared')
        });

        buttonSpeedD.addEventListener('click', () => {
            video.playbackRate -= 0.05;
            console.log('rate -0.05');
            showRateOverlay(video.playbackRate);
        });

        buttonSpeedU.addEventListener('click', () => {
            video.playbackRate += 0.05;
            console.log('rate +0.05');
            showRateOverlay(video.playbackRate);
        });

        buttonSpeedt.addEventListener('click', () => {
            let input;
            do {
                input = prompt("Enter a number - " + video.playbackRate.toString(), video.playbackRate.toString());
            } while (isNaN(input) || input.trim() === "");
            input = Number(input);
            video.playbackRate = input;
            console.log('Rate = ' + input);
            showRateOverlay(video.playbackRate);
        });

        buttonSrc.addEventListener('click', () => {
            video.pause(); 
            let srcs = video.currentSrc; 
            let cnf = confirm('Open in Newtab?\n\n' +srcs); 
            if (cnf == true) { 
                window.open(srcs);
                }
        });
                buttonSrc.addEventListener('contextmenu', () => {
            video.pause(); 
            let srcs = video.currentSrc; 
            let cnf = confirm('Open in Newtab?\n\n' +srcs); 
            if (cnf == true) { 
                window.open(srcs);
                }
        });
    });
})();

*/