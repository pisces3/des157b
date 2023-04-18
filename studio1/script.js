//open IIFE
(function(){
    'use strict';
    console.log('reading js');

    const fallBtn = document.querySelector('#fall');
    const winterBtn = document.querySelector('#winter');
    const springBtn = document.querySelector('#spring');
    const summerBtn = document.querySelector('#summer');

    const test1 = document.querySelector('#fallVid');
    const test2 = document.querySelector('#fallVid2');

    const body = document.querySelector('body');

    fallBtn.addEventListener('click', fallScene);


    function hideOthers() {
        
    }
    function fallScene() {
        body.style.background = 'linear-gradient(180deg, #170601 0%, rgba(47, 24, 12, 0.96) 47.4%, rgba(164, 58, 0, 0.4) 100%)';
        test1.className = 'hidden';
        test2.className = 'showing';
    }
}());