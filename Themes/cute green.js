// ==UserScript==
// @name         cute green
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Better YouTube
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png
// @author       Kelvin zv
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/cute%20green.js
// @updateURL    https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Themes/cute%20green.js
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body, #page-manager {
            background-color: #1B261E !important;
            color: #fff !important;
        }
        ytd-masthead, #masthead-container {
            background-color: #131A13 !important;
        }
    `);
})();
