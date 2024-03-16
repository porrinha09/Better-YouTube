// ==UserScript==
// @name         Hide YouTube logo
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better YouTube
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var logo = document.getElementById("logo-icon");

    if (logo) {
        logo.style.display = "none";
    }
})();
