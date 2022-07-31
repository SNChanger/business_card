'use strict';
const switcher = document.querySelector('.btn');


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