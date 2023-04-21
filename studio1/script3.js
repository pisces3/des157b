//open IIFE

(function(){
    'use strict';
    console.log('reading js');

    //Body
    const body = document.querySelector('body');

    // Loader
    const loading = document.querySelector('#loader');

    //Buttons
    const buttons = document.querySelectorAll('button');
    const fallBtn = document.querySelector('#fall');
    const winterBtn = document.querySelector('#winter');
    const springBtn = document.querySelector('#spring');
    const summerBtn = document.querySelector('#summer');

    //Videos
    const allVids = document.querySelectorAll('video');
    const fallVid = document.querySelector('#fallVid');
    const winterVid = document.querySelector('#winterVid');
    const springVid = document.querySelector('#springVid');
    const summerVid = document.querySelector('#summerVid');

    //Poem
    const poemLines = document.querySelector('#poem');
    const poemText = document.querySelector('#poem p');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const poem = {
        start: [0, 5],
        stop: [1, 3],
        line: [line1, line2]
    }

    //Play everything
    load();
    fallBtn.addEventListener('click', fallScene);
    winterBtn.addEventListener('click', winterScene);
    springBtn.addEventListener('click', springScene);
    summerBtn.addEventListener('click', summerScene);
    // showPoem();

    // Loading Animation and randomly pick season for homepage
    function load() {
        for (const vid of allVids) {
            vid.addEventListener('playing', function(){ //if each video is playing then take out loader
                loading.style.display = 'none';
            });
        }
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

    function randomGenerator() {
        const randomScene = Math.floor(Math.random() * 4);
        return randomScene;
    }

     //Change interface when you click buttons
     function hideOthers() {
        fallVid.className = 'hidden';
        winterVid.className = 'hidden';
        springVid.className = 'hidden';
        summerVid.className = 'hidden'
        for (const btn of buttons) {
            btn.removeAttribute('class');
        }
    }

    function fallScene() {
        hideOthers();
        fallVid.className = 'showing';
        fallPoem(fallVid);
        body.className = 'fall';
        fallBtn.className = 'fall';
    }

    function winterScene() {
        hideOthers();
        winterVid.className = 'showing';
        // winterPoem()
        body.className = 'winter';
        winterBtn.className = 'winter';
    }

    function springScene() {
        hideOthers();
        springVid.className = 'showing';
        // springPoem();
        body.className = 'spring';
        springBtn.className = 'spring';
    }

    function summerScene() {
        hideOthers();
        summerVid.className = 'showing';
        // summerPoem();
        body.className = 'summer';
        summerBtn.className = 'summer';
    }


    // Animate text
    function showPoem() {
        for (const vid of allVids) { // loop through each video
            // console.log(vid);
            if (vid == fallVid) {
                fallPoem();
                console.log(vid);
            }
            // const intervalID = setInterval(checkTime(vid), 1000);
            // vid.play();
            // vid.addEventListener('playing', intervalID);
        }
    }

    function checkTime(video) {
        console.log(parseInt(video.currentTime));
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < video.currentTime && video.currentTime < poem.stop[i]) {
                console.log(parseInt(video.currentTime));
                poem.line[i].className = 'showing';
            }
            else {
                poem.line[i].className = 'hidden';
            }
        }
    }

    //functions to change innerHTML based on season
    function fallPoem(video) {
        const intervalID = setInterval(checkTime(video), 1000);
        poemText.style.fontFamily = 'Playfair Display';
        poem.line[0].innerHTML = 'all too well';
    }

    function winterPoem() {
        poemText.style.fontFamily = 'IM Fell DW Pica';
        poem.line[0].innerHTML = 'back to december';
    }

    function springPoem() {
        poemText.style.fontFamily = 'Berkshire Swash';
        poem.line[0].innerHTML = 'spring falls';
    }

    function summerPoem() {
        poemText.style.fontFamily = 'Poppins';
        poem.line[0].innerHTML = 'cruel summer';
    }
  

}());