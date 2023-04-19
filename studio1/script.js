//open IIFE
(function(){
    'use strict';
    console.log('reading js');

    const body = document.querySelector('body');

    const fallBtn = document.querySelector('#fall');
    const winterBtn = document.querySelector('#winter');
    const springBtn = document.querySelector('#spring');
    const summerBtn = document.querySelector('#summer');
    const buttons = document.querySelectorAll('button');

    const fallVid = document.querySelector('#fallVid');
    const winterVid = document.querySelector('#winterVid');
    const springVid = document.querySelector('#springVid');
    const summerVid = document.querySelector('#summerVid');

    const fall1 = document.querySelector('#fall1');
    const fall2 = document.querySelector('#fall2');
    const fall3 = document.querySelector('#fall3');
    const fall4 = document.querySelector('#fall4');
    const fallPoem = {
        start: [0, 1, 3, 5],
        line: [fall1, fall2, fall3, fall4]
    }
    const allFallLines = document.querySelectorAll('#fallPoem p');

    fallBtn.addEventListener('click', fallScene);
    winterBtn.addEventListener('click', winterScene);
    springBtn.addEventListener('click', springScene);
    summerBtn.addEventListener('click', summerScene);

    // const fallInterval = setInterval(checkFallTime, 1000);



    function randomGenerator() {
        const randomScene = Math.floor(Math.random() * 4);
        return randomScene;
    }

    function load() {
        if (randomGenerator() === 0) {
            fallScene();
        } 
        else if (randomGenerator() === 1){
            winterScene();
        }
        else if (randomGenerator() === 2) {
            springScene();
        }
        else {
            summerScene();
        }
    }

    load(); 

    function checkFallTime() {
        for (let i = 0; i < fallPoem.start.length; i++) {
            if (fallPoem.start[i] < fallVid.currentTime) {
                fallPoem.line[i].className = 'showing';
            }
            else {
                fallPoem.line[i].className = 'hidden';
            }
        }
    }

    function hideFallPoem() {
        for (const line of fallPoem.line) {
          line.className = 'hidden';
        }
      }

    function hideOthers() {
        fallVid.className = 'hidden';
        winterVid.className = 'hidden';
        springVid.className = 'hidden';
        summerVid.className = 'hidden'
        for (const btn of buttons) {
            btn.removeAttribute('class');
        }
        hideFallPoem(); // hide the fall poem
    }

    function fallScene() {
        hideOthers();
        fallVid.className = 'showing';
        setInterval(checkFallTime, 1000);
        body.className = 'fall';
        fallBtn.className = 'fall';
    }

    function winterScene() {
        hideOthers();
        winterVid.className = 'showing';
        body.className = 'winter';
        winterBtn.className = 'winter';
    }

    function springScene() {
        hideOthers();
        springVid.className = 'showing';
        body.className = 'spring';
        springBtn.className = 'spring';
    }

    function summerScene() {
        hideOthers();
        summerVid.className = 'showing';
        body.className = 'summer';
        summerBtn.className = 'summer';
    }


}());