'use strict';
const switcher = document.querySelector('.btn');
let requestURL = "https://magictravelinterface2030.azurewebsites.net/api/GetMemoryListsForPosition?";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const areaMemories = request.response;
  showMemories(areaMemories);
}

function showMemories(obj) {
  const memories = obj['memories'];

  for (let i = 0; i < memories.length; i++) {
    if (i == 0) {
      var map = L.map('map').setView([memories[i].startLat + 1, memories[i].startLon +1], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
      }).addTo(map);

      console.log(memories[i].name);
      var marker = L.marker([memories[i].startLat + 0.995, memories[i].startLon +0.995],
        { title: memories[i].name }).addTo(map);

    }
    console.log();

  }
}



