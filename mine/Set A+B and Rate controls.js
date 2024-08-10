// var result = [];
// Get all links from the page

(function() {
    'use strict';

    // Create loop controls for each video element
    document.querySelectorAll('video').forEach((video, index) => {
        // Create a container for the buttons
        const controlContainer = document.createElement('div');

        controlContainer.style.display = 'absolute';
        controlContainer.style.marginBottom = '10px';
		controlContainer.style.marginTop = '10px';
		controlContainer.style.zIndex = '999999';
		controlContainer.style.fontSize = '16px';
		controlContainer.style.transform = 'scale(1.1, 1.1)';
		controlContainer.style.marginLeft = '50px';

		// Create buttons
		const buttonA = document.createElement("button");
		buttonA.innerText = "Set A";
		const buttonB = document.createElement("button");
		buttonB.innerText = "Set B";
     const gap1 = document.createElement("span");
		gap1.innerText = " - ";
     gap1.style.width = "10px";
		const buttonClearA = document.createElement("button");
		buttonClearA.innerText = "Clear A";
		const buttonClearB = document.createElement("button");
		buttonClearB.innerText = "Clear B";
     const gap2 = document.createElement("span");
		gap2.innerText = " - ";
     gap2.style.width = "10px";
		const buttonClear = document.createElement("button");
		buttonClear.innerText = "Clear BOTH";
     const gap = document.createElement("span");
		gap.innerText = " - ";
     gap.style.width = "10px";
     const buttonSpeedD = document.createElement("button");
		buttonSpeedD.innerText = "Speed -";
     const buttonSpeedU = document.createElement("button");
		buttonSpeedU.innerText = "Speed +";
     const buttonSpeedt = document.createElement("button");
		buttonSpeedt.innerText = "Enter #";

        // Append buttons to the control container
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

        // Insert the control container before the video element
        video.parentNode.insertBefore(controlContainer, video);

        // Variables to store loop points
        let loopStart = null;
        let loopEnd = null;
        let loopInterval = null;

        // Set the start loop point (A)
        buttonA.addEventListener('click', () => {
            loopStart = video.currentTime;
            console.log(`Loop (A) set to: ${loopStart}`);
        });

        // Set the end loop point (B)
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

        // Clear loop points
        buttonClearA.addEventListener('click', () => {
            loopStart = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A cleared');
        });
        // Clear loop points
        buttonClearB.addEventListener('click', () => {
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop B cleared');
        });

        // Clear loop points
        buttonClear.addEventListener('click', () => {
            loopStart = null;
            loopEnd = null;
            if (loopInterval) clearInterval(loopInterval);
            console.log('Loop A & B cleared');
        });

        // Speed buttons
        buttonSpeedD.addEventListener('click', () => {
            video.playbackRate -= 0.05;
            console.log('rate -0.05');
        });
        buttonSpeedU.addEventListener('click', () => {
            video.playbackRate += 0.05;
            console.log('rate +0.05');
        });
        buttonSpeedt.addEventListener('click', () => {
           let input;
           do {
              input = prompt("Enter a number:");
           } while (isNaN(input) || input === null || input.trim() === "");
           // Convert the input to a number
           input = Number(input); 
           video.playbackRate = input;
           console.log('New rate: ' + input);
        });
    });
})();

// Call completion to finish
// completion(result);
