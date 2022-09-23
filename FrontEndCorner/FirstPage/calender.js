'use strict';
DHTMLSuite.include("windowWidget");
if(location.hostname.toLowerCase().indexOf('dhtmlgoodies') >=0) {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-2042963-3']);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}


function searchCalender(calenderDate) {
    console.log("跳躍を開始します");
    $("#walk_map").toggle();
    showMemories({'memories': []}, "walk_map");
    console.log(calenderDate.value);
}
