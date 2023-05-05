(function(){
    'use strict';

    // add your script here
    const map = L.map('map').setView([14.110370, 121.392662], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([14.108946, 121.399902]).addTo(map);
    const circle = L.circle([14.111727, 121.396718], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);

    const polygon = L.polygon([
        [14.110252, 121.393158],
        [14.110019, 121.393646],
        [14.109327, 121.393238]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>Where I grew up <3").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    // const popup = L.popup()
    //     .setLatLng([14.110725, 121.391615])
    //     .setContent("I am a standalone popup.")
    //     .openOn(map);

    // function onMapClick(event) {
    //     alert('You clicked the map at ' + event.latlng);
    // }


    const popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);


    
}());