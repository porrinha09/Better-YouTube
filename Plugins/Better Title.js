// ==UserScript==
// @name         Better Title
// @description  Better YouTube
// @author       Kelvin zv
// @version      1.0.0
// @match        *://*.youtube.com/*
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Better%20Title.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Better%20Title.js
// ==/UserScript==

(function(){
    const expose_interface = false;
    const youtube_title_fixer = (function(){
        const pattern = /\(\d+\)\s+/;
        let loop;
        let delay = 1000;
        function fixit(){
            if(document.title.match(pattern) !== null)
                document.title = document.title.replace(pattern, "");
        }
        function kill(){
            clearInterval(loop);
        }
        function init(){
            loop = setInterval(fixit, delay);
        }
        function set_delay(new_delay){
            delay = new_delay;
        }
        return Object.freeze({
            fixit,
            kill,
            init,
            set_delay
        });
    }());
    youtube_title_fixer.init();
    if(expose_interface)
        window.youtube_title_fixer = youtube_title_fixer;
}());
