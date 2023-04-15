//open IIFE
(function(){
    'use strict';
    console.log('reading js');

    const fallBtn = document.querySelector('#fall');
    const winterBtn = document.querySelector('#winter');
    const springBtn = document.querySelector('#spring');
    const summerBtn = document.querySelector('#summer');

    const fallVid = document.querySelector('#fallVid');

    const body = document.querySelector('body');

    fallBtn.addEventListener('click', fallScene);

    function fallScene() {
        body.style.backgroundColor = 'brown';
        //question: only replacing the webm. how should we replace both sources?
        fallVid.src = 'media/test1.mp4'
        fallVid.src = 'media/test1.webm';
        fallVid.poster = 'images/thumbnail1.png'
        console.log(fallVid.src);

    }
}());