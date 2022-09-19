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



switcher.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  var adult = document.querySelector('.adultDisplay');
  var fan = document.querySelector('.fanDisplay');

  const className = document.body.className;
  var adultDisplayKeyWord = "block";
  var fanDisplayKeyWord = "none";
  if (className == "light-theme") {
    this.textContent = "Dark";
    adultDisplayKeyWord = "none";
    fanDisplayKeyWord = "block";  
  }

  var adultSet = document.getElementsByClassName('adultDisplay');
  var fanSet = document.getElementsByClassName('fanDisplay');
  console.log(adultSet);
  for (var i = 0, len=adultSet.length|0;i < len; i++) {
      adultSet[i].style.display = adultDisplayKeyWord;
  }
  for (var i = 0, len=fanSet.length|0;i < len; i++) {
      fanSet[i].style.display = fanDisplayKeyWord;
  }

  console.log("現在のクラス名：" + className);
});

const maniaButton = document.querySelector('.mania');

maniaButton.addEventListener('click', function () {
 
    var fanSet = document.getElementsByClassName('fanDisplay');
    
    const className = document.body.className;
    var defaultKeyWord = "none";
    if (className == "light-theme") {
       defaultKeyWord = "block";  
    }
    for (var i = 0, len=fanSet.length|0;i < len; i++) {
      fanSet[i].style.display = defaultKeyWord;
    }

  });

  var initial = function() {
    var adultSet = document.getElementsByClassName('adultDisplay');
    var fanSet = document.getElementsByClassName('fanDisplay');
    console.log(adultSet);
    for (var i = 0, len=adultSet.length|0;i < len; i++) {
        adultSet[i].style.display = "none";
    }
    for (var i = 0, len=fanSet.length|0;i < len; i++) {
        fanSet[i].style.display = "block";
    }
  };

  var initialEvent = initial();