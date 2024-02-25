// ==UserScript==
// @name         Dark
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Better YouTube
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/Dark.js
// @updateURL    https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/Dark.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body, #page-manager {
            background-color: #000000 !important;
            color: #fff !important;
        }
        ytd-masthead, #masthead-container {
            background-color: #000000 !important;
        }
    `);
})();
