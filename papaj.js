const MAX_WIDTH = 70;
const MAX_HEIGHT = 70;
const MIN_WIDTH = 50;
const MIN_HEIGHT = 50;
const MAX_Y = 60;
const MAX_X = 60;
const MAX_ROTATION = 45;

const mutationObserver = new MutationObserver(() => {
    const thumbnails = document.querySelectorAll("ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element)");

    thumbnails.forEach(e => {
        if(e.classList.contains('spapiezowany')) {return};

        e.style.position = "relative";

        let papajImage = document.createElement('img');
        papajImage.classList.add("papajImage");
        papajImage.src = chrome.runtime.getURL(`/images/papaj${Math.floor(Math.random() * 13) + 1}.png`);
        
        let papajWidth = Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH + 1) + MIN_WIDTH);
        let papajHeight = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1) + MIN_HEIGHT);
        
        let papajVerticalPos = Math.floor(Math.random() * MAX_Y);
        let papajHorizontalPos = Math.floor(Math.random() * MAX_X);

        let papajRotation = Math.floor(Math.random() * MAX_ROTATION) - (MAX_ROTATION / 2);
        let papajFlip = Math.round(Math.random()) ? -1 : 1;
        
        papajImage.style.position = "absolute";
        papajImage.style.width = `${papajWidth}%`;
        papajImage.style.height = `${papajHeight}%`

        papajImage.style.top = `${papajVerticalPos}%`;
        papajImage.style.left =  `${papajHorizontalPos}%`;

        papajImage.style.transform += `rotate(${papajRotation}deg)`;
        papajImage.style.transform += `scaleX(${papajFlip})`;

        e.parentElement.appendChild(papajImage);
        e.classList.add('spapiezowany');    
    });
});

mutationObserver.observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});

/*

     👑 👑 👑 👑 👑 👑 👑 👑 
    ██████   ██ ██████  ███████ 
        ██  ███      ██      ██ 
    █████    ██  █████      ██  
    ██       ██      ██    ██   
    ███████  ██ ██████     ██   
                                                        
*/                    
 
 