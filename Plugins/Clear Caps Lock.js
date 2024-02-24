// ==UserScript==
// @name Clear caps lock
// @description Better YouTube
// @author Kelvin zv
// @version 1.0.0
// @grant GM_addStyle
// @run-at document-start
// @include http://youtube.com/*
// @include https://youtube.com/*
// @include http://*.youtube.com/*
// @include https://*.youtube.com/*
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Clear%20Caps%20Lock.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Clear%20Caps%20Lock.js
// ==/UserScript==

(function() {
let css = `
  .title, #video-title
  {
    text-transform: lowercase;
  }
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
