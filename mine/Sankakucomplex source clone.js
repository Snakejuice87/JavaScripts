// ==UserScript==
// @name         Sankakucomplex source clone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Copy the element with the ID "highres" and attach it after the parent of the element with the ID "flag-button" if the URL matches https://me.some.com/en/posts/*.
// @author       SnakeJuice
// @include       *://chan.sankakucomplex.com/*
// @match       *://chan.sankakucomplex.com/*
// @match       *://idol.sankakucomplex.com/*
// @match       *://legacy.sankakucomplex.com/*
// @match      https://chan.sankakucomplex.com/en/posts/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current URL matches the specified pattern
    if (window.location.href.match(/^https:\/\/chan\.sankakucomplex\.com\/en\/posts\/.*/)) {
         // Create Text node
        var text = document.createTextNode('Source: ');
        var vlc = document.createTextNode('VLC: ');

        // Get the elements by ID
        const highresElement = document.getElementById('highres');
        const flagButtonElement = document.getElementById('flag-button');
        
        if (highresElement && flagButtonElement) {
            // Clone the highres element (to create a copy)
            const highresCopy = highresElement.cloneNode(true);
							highresCopy.id = "highres2";
							highresCopy.style.fontSize='16px';
							highresCopy.style.padding='12px';
							highresCopy.style.marginLeft='300px';
							highresCopy.style.border='1px solid grey';
							highresCopy.style.borderRadius='15px';
							highresCopy.style.marginTop='-7px';
                          highresCopy.setAttribute('target', '_blank');
                          // highresCopy.style.right = '20px';
                          highresCopy.style.position = 'relative';
                            
            // Creates element for VLC callback
                // const highresVlc = document.createElement("div");
                const highresVlc = highresElement.cloneNode(true);
							highresVlc.id = "highres3";
                             // highresVlc.href = "vlc-x-callback://?url="+highresElement.href;
							highresVlc.style.fontSize='16px';
							highresVlc.style.padding='12px';
							highresVlc.style.marginLeft='300px';
							highresVlc.style.border='1px solid grey';
							highresVlc.style.borderRadius='15px';
							highresVlc.style.marginTop='-7px';
                          highresVlc.setAttribute('target', '_blank');
                          highresCopy.style.position = 'relative';
                

            // Get the parent of the flag button element
            const flagButtonParent = flagButtonElement.parentNode;
            const highresCopyParent = highresCopy.parentNode;

            // Insert the copied highres element after the parent of flag-button
            flagButtonParent.insertAdjacentElement('afterend', highresCopy);
            highresCopy.insertAdjacentElement('beforebegin', text);;
            highresCopy.parentNode.insertBefore(text, highresCopy);
            
            // highresVlc.appendChild(vlc);
            // highresVlc.insertBefore(highresVlc, highresVlc);
            
            highresCopy.insertAdjacentElement('afterend', highresVlc);
            highresVlc.insertAdjacentElement('beforebegin', vlc);;
            highresVlc.parentNode.insertBefore(vlc, highresVlc);
             
            let hr2 = document.getElementById('highres2');
            let hr3 = document.getElementById('highres3');
            
            hr2.addEventListener('click', () => {
                let op = hr2.href;
                window.open(op, '_blank');
                console.log(op);
            });
                
            hr3.addEventListener('click', () => {
                window.open('vlc-x-callback://?url='+encodeURIComponent(hr3.href));
                console.log('vlc-x-callback://?url='+encodeURIComponent(hr3.href);
            });
        }
    }
   
                                                //  ------ 2nd Section ------- //

        // Check if the current URL matches the specified pattern
    if (window.location.href.match(/^https?:\/\/.*\.sankakucomplex\.com\/.*/)) {
        
        var button = document.querySelector('button[name="button"][class="center secondary"]');
    
        if (button) {
            button.click();
            console.log("adblock skipped warning. Now you will no longer be redirected to the page https://chan.sankakucomplex.com/static/disable_adblock");
        } else {
            console.log('Button not found');
        }
    }
})();