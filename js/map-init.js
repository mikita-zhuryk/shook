"use strict"
let map;
ymaps.ready(function init () {
    map = new ymaps.Map("map-show", {center: [53.90843169, 27.55994617], zoom: 7})
    map.controls.remove('fullscreenControl');
    map.controls.remove('trafficControl');
    map.controls.remove('searchControl');
    map.controls.remove('geolocationControl');

    ymaps.geolocation.get().then(function (result) {
        console.log('Got location!');
        let myPos = result.get(0).geometry["coordinates"];
        console.log(typeof(myPos));
        var searchCircle = new ymaps.geoObject({
            geometry: {
                type: 'Circle',
                coordinates: myPos,
                radius: 3500
            }
        })
    }, function (error) {
        console.log(error);
    })
});