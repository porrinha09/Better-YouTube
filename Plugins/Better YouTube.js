// ==UserScript==
// @name         BetterYouTube
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better YouTube
// @author       Kelvin zv
// @match        *://www.youtube.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

const customImageURL = 'https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png';

const customImageSVG = `<img src="${customImageURL}" alt="Custom Image" style="width: 78px; height: 47px;">`;

function isYouTubeUrl() {
    return window.location.hostname === 'www.youtube.com' || window.location.hostname === 'youtube.com';
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.getElementById(selector)) {
            return resolve(document.getElementById(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.getElementById(selector)) {
                resolve(document.getElementById(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('logo-icon').then((elm) => {
    if (isYouTubeUrl()) {
        document.getElementById('logo-icon').innerHTML = customImageSVG;
    }
});
