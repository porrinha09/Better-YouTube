// ==UserScript==
// @name         Hide comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Better YouTube
// @author       Kelvin zv
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20comments.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20comments.js
// ==/UserScript==

let removedComments = false;
let timerComments;
const comments_id = 'ytd-comments.style-scope';

(function() {
    'use strict';
    console.log('youtube-comment-remover started');
})();

removeComments = function() {
    "use strict";
    let comments = document.querySelector(comments_id);
    comments.parentNode.removeChild( comments );
    document.body.removeEventListener('DOMSubtreeModified', timerComments, false);
}

timerComments = function () {
    if(!removedComments) {
      let comments = document.querySelector(comments_id);
      if(comments !== null) {
          setTimeout(removeComments, 2400);
          removedComments = true;
      }
    }
}

document.body.addEventListener('DOMSubtreeModified', timerComments, false);
