//open IIFE
(function(){
    'use strict';
    console.log('reading js');

    const fallBtn = document.querySelector('#fall');
    const winterBtn = document.querySelector('#winter');
    const springBtn = document.querySelector('#spring');
    const summerBtn = document.querySelector('#summer');

    const fallVid = document.querySelector('#fallVid');
    const winterVid = document.querySelector('#winterVid');
    const springVid = document.querySelector('#springVid');
    const summerVid = document.querySelector('#summerVid');

    const body = document.querySelector('body');

    fallBtn.addEventListener('click', fallScene);
    winterBtn.addEventListener('click', winterScene);
    springBtn.addEventListener('click', springScene);
    summerBtn.addEventListener('click', summerScene);


    function hideOthers() {
        fallVid.className = 'hidden';
        winterVid.className = 'hidden';
        springVid.className = 'hidden';
        summerVid.className = 'hidden'
    }

    function fallScene() {
        hideOthers();
        fallVid.className = 'showing';
        body.className = 'fall';
        fallBtn.className = 'fall';
    }

    function winterScene() {
        hideOthers();
        winterVid.className = 'showing';
    }

    function springScene() {
        hideOthers();
        springVid.className = 'showing';
    }

    function summerScene() {
        hideOthers();
        summerVid.className = 'showing';
    }
}());