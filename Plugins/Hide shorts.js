// ==UserScript==
// @name         Hide shorts
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better YouTube
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Icons/hide%20shorts.webp
// @license MIT
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/486864/NoShorts%20%E2%80%93%20YT.user.js
// @updateURL https://update.greasyfork.org/scripts/486864/NoShorts%20%E2%80%93%20YT.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function removeShorts() {
        var titles = document.querySelectorAll("span#title");
        titles.forEach(function(title) {
            if (title.textContent.includes("Shorts")) {
                var parentDiv = title.closest("div#dismissible, ytd-reel-shelf-renderer");
                if (parentDiv) {
                    parentDiv.parentNode.removeChild(parentDiv);
                }
            }
        });
     
        var shortsTitles = document.querySelectorAll("span[aria-label='Shorts']");
        shortsTitles.forEach(function(title) {
            var parentDiv = title.closest("div#dismissible");
            if (parentDiv) {
                parentDiv.parentNode.removeChild(parentDiv);
            }
        });
    }

    function noShorts() {
        removeShorts();
        setTimeout(noShorts, 500); 
    }

    noShorts();
})();
