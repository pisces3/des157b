(function(){ //open IIFE
    'use strict';
    console.log('reading js');

    let globalData;
    let numDataPoints;

    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const colorBG = document.querySelector('body');
    const wallpaper = document.querySelector('#wallpaper');
    const word = document.querySelector('#word');

    async function getData() {
        const timeTaken = await fetch('data/data.json');
        const data = await timeTaken.json();
        // console.log(data);
        const dataPoints = Object.keys(data);
        // Gets the value and puts in the globalData array
        globalData = Object.values(data);
        // gets number of entries in JSON
        numDataPoints = dataPoints.length;
    }

    function showTime(point, data) {
        // console.log(data[point]);
        date.innerHTML = `${data[point].day}, ${data[point].date}`;
        time.innerHTML = data[point].time_taken;
        colorBG.style.backgroundColor = data[point].color;
        wallpaper.src = data[point].wallpaper;
        word.innerHTML = data[point].word;
    }

    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showTime(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();
}());