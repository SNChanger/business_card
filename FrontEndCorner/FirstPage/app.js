'use strict';

function initialMap() {
  const switcher = document.querySelector('.btn');
  let requestURL = "https://magictravelinterface2030.azurewebsites.net/api/GetMemoryListsForPosition?";
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  
  request.onload = function() {
    const areaMemories = request.response;
    showMemories(areaMemories, "map");
  }
  
}

function showMemories(obj, id) {
  const memories = obj['memories'];
  if (memories.length == 0) {
    var map = L.map(id).setView([ 35.6809591, 139.7673068], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

  }

  for (let i = 0; i < memories.length; i++) {
    if (i == 0) {
      var map = L.map(id).setView([memories[i].startLat + 1, memories[i].startLon +1], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
    }).addTo(map);

    var startMarker = L.marker([memories[i].startLat, memories[i].startLon],
      { title: memories[i].name }).addTo(map);
    var Line = L.polyline([
        [memories[i].startLat, memories[i].startLon],
        [memories[i].endLat, memories[i].endLon],
    ],{
        "color": "#FF0000",
        "weight": 10,
        "opacity": 0.6
    }).addTo(map);      
    var endMarker = L.marker([memories[i].endLat, memories[i].endLon],
      { title: memories[i].name + "まで歩いた" }).addTo(map);

  }
}



