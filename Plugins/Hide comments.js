// ==UserScript==
// @name        Hide comments
// @description Better YouTube
// @include     /^http(|s)://www\.youtube\.com/watch\?v=.*$/
// @grant       none
// @author      Dio
// @version     1.0.0
// @grant       none
// @namespace   38a3e9648fc5260c75446e376a8dabb3
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20comments.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Hide%20comments.js
// ==/UserScript==

function XBLoad(func, verbose)
{
    verbose = verbose || false;

    if (window.jQuery)
    {
        if ($(window).load)
        {
            if (verbose == true) { console.log('Javascript loaded using $(window).load method'); };
            return $(window).load(function() { func(); });
        }
        else if ($(window).ready)
        {
            if (verbose == true) { console.log('Javascript loaded using $(window).ready method'); };
            return $(window).ready(function() { func(); });
        };        
    }
    else if (document.addEventListener)
    {
        if (verbose == true) { console.log('Javascript loaded using document.addEventListener method'); };
        document.addEventListener('DOMContentLoaded', function(event)
        {
            return func();
        });
    }
    else if (document.attachEvent)
    {
        if (verbose == true) { console.log('Javascript loaded using document.attachEvent method'); };
        document.attachEvent('load', function()
        {
            return func();
        });
    }
    else
    {
        if (verbose == true) { console.log('Javascript loaded using setTimeout method'); };
        return setTimeout(function() { func(); }, 5000);
    };
};

function searchStringInArray (str, arr)
{
    var obj = {};
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i].match(str))
        {
            obj.idx = i;
            obj.content = arr[i];
            return obj;
        }
    }
    return -1;
}

function delElement (elmt_type, elmt_name)
{
    switch (elmt_type)
    {
        case 'id':
            var tgt = document.getElementById(elmt_name);
            break;
        case 'tag':
            var tgt = document.getElementsByTagName(elmt_name)[0];
            break;
        case 'class':
            var tgt = document.getElementsByClassName(elmt_name)[0];
            break;
        default:
            console.log("delElement syntax error\nUsage:\n  delElement(<[id|tag|class]>, <elmt_name>)");
            return -1;
    }
    tgt.parentNode.removeChild(tgt);
}

function delIdxFromArrayByValue (str, arr)
{
    if (searchStringInArray(str, arr))
    {
        arr.splice(searchStringInArray(str, arr).idx, 1);
    }
}

function showtime ()
{
    delElement('id', 'watch-discussion');
    
    var dscNode = document.getElementById('action-panel-details');
    var dscClassesArr = dscNode.className.split(' ');
    delIdxFromArrayByValue('yt-uix-expander-collapsed', dscClassesArr);
    dscNode.className = dscClassesArr.join(' ');
}

XBLoad(showtime());
