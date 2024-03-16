// ==UserScript==
// @name         Change country code text
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better YouTube
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 document.getElementById("country-code").innerHTML = "BETTER YOUTUBE"
 document.getElementById("#logo-container > span.content-region").innerHTML = "BETA"
})();
