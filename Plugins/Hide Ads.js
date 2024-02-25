// ==UserScript==
// @name         Hide Ads
// @namespace    http://tampermonkey.net/
// @description	  Better YouTube
// @version      1.0.0
// @license      MIT
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @exclude      /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20Ads.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20Ads.js
// ==/UserScript==

(function () {
  'use strict';
  const wm = new WeakSet();

  const removeAdsSlot = async (grid) => {
    const td = grid.data;
    if (td && !wm.has(td)) {
      const md = Object.assign({}, td);
      md.contents = md.contents.filter(content => {
        let isadSlotRenderer = ((((content || 0).richItemRenderer || 0).content || 0).adSlotRenderer || null) !== null;
        return isadSlotRenderer ? false : true;
      });
      wm.add(md);
      grid.data = md;
    }
  }

  customYtElements.whenRegistered('ytd-rich-grid-renderer', (proto) => {
    proto.dataChanged = ((dataChanged) => {
      return function () {
        removeAdsSlot(this);
        return dataChanged.apply(this, arguments);
      }
    })(proto.dataChanged)
  });

})();
