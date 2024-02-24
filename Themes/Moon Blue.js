// ==UserScript==
// @name         Moon Blue
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Better YouTube
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png
// @author       Kelvin zv
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/Moon%20Blue.js
// @updateURL    https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/Moon%20Blue.js
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body, #page-manager {
            background-color: #0e1521 !important;
            color: #fff !important;
        }
        ytd-masthead, #masthead-container {
            background-color: #071e3d !important;
        }
    `);
})();
