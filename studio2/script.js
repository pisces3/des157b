(function(){ //open IIFE
    'use strict';
    console.log('reading js');

    const data = document.querySelector('#date');

    async function getData() {
        const screenTime = await fetch('data/data.json');
        const data = await screenTime.json();
        console.log(data);
    }

    function getDate(data) {
        let html = '';
    }

    getData();
}());