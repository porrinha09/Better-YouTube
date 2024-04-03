// ==UserScript==
// @name         font bold
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better Youtube
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/font%20bold.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/font%20bold.js
// ==/UserScript==

(function() {
    'use strict';
    
    GM_addStyle(`
        * {
            font-weight: bold !important;
        }
    `);
})();
