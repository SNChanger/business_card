'use strict';


function searchCalender(calenderDate) {
    console.log("跳躍を開始します");
    $("#walk_map").toggle();
    let requestURL = "https://walkinterface.azurewebsites.net/api/GetWalkData?";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        console.log(request.response);
        showMemories(request.response, "walk_map");
        console.log(calenderDate.value);
    }
}
