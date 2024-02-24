// ==UserScript==
// @name         buttons to change video quality
// @namespace    m-youtube-com-quality-change-buttons
// @version      1.0.0
// @description  Better YouTube
// @author       Kelvin zv
// @match        https://m.youtube.com/*
// @match        https://youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/assets/BetterYouTube.png
// @grant        none
// @run-at       document-idle
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/buttons%20to%20change%20video%20quality.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/buttons%20to%20change%20video%20quality.js
// ==/UserScript==

(function() {

    function addbuttons(){
        document.getElementById("qualitybuttons").innerHTML = "";

        var player = document.getElementById('movie_player');

       player.click(); 
        player.click();

        const qualities = player.getAvailableQualityData();

        qualities.forEach((q)=>{

            let button = document.createElement('button');
            button.setAttribute("quality", q.quality);
            button.textContent = q.qualityLabel.replace("p50","p").replace("p60","p"); 
            button.className = "qualitybutton";

            button.style.margin = "4px";
            button.style.padding = "4px";
            button.style.position = "relative";

            if( player.getPlaybackQualityLabel() == q.qualityLabel ){
                button.style.backgroundColor = "darkorange";
            } else{
                button.style.backgroundColor = "green";
            }

            button.onclick = function() {
                player.setPlaybackQualityRange( this.getAttribute("quality") );

                document.querySelectorAll(".qualitybutton").forEach((btn)=>{
                    btn.style.backgroundColor = "green";
                });
                this.style.backgroundColor = "darkorange";
            };

            let target = document.getElementById('qualitybuttons');
            target.insertBefore(button, target.firstChild);

        }); 

    } 

        setInterval(()=>{

            if( document.getElementById("qualitybuttons") == undefined ){

                let parent = document.getElementById('above-the-fold');

                if( !parent ){
                    parent = document.querySelector('.watch-below-the-player');
                }

                if( !parent ){
                    parent = document.querySelector('.related-chips-slot-wrapper');
                }

                let wrapper = document.createElement('div');
                wrapper.setAttribute("id","qualitybuttons");
                parent.insertBefore(wrapper, parent.firstChild);
                addbuttons();

            }

            if( document.getElementById("qualitybuttons").textContent.trim() === '' ){
                addbuttons();
            }
        }, 1000);

})();
