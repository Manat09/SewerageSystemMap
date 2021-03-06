var map = L.map('map').setView([51.090909, 71.418214], 14);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | by Manat and Andrey'
});
osm.addTo(map);

var marker = L.marker([51.090909, 71.418214]).addTo(map);

var circle = L.circle([51.098429, 71.406155],{
    color: 'blue', fillColor: 'white', fillOpacity: 1, radius: 30
}).addTo(map);
var circle2 = L.circle([51.102579, 71.407614],{
    color: 'blue', fillColor: 'white', fillOpacity: 1, radius: 30
}).addTo(map);
var circle3 = L.circle([51.106971, 71.409245],{
    color: 'blue', fillColor: 'white', fillOpacity: 1, radius: 30
}).addTo(map);
var circle4 = L.circle( [51.111498, 71.410789],{
    color: 'blue', fillColor: 'white', fillOpacity: 1, radius: 30
}).addTo(map);

var polygon = L.polygon([
    [51.098429, 71.406155],
    [51.102579, 71.407614],
    [51.106971, 71.409245],
    [51.111498, 71.410789]
]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

polygon.bindPopup("I am a polygon.");



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

marker.bindPopup("Astana IT University");

function onCircleClick(f) {
    popup
        .setLatLng(f.latlng)
        .setContent("Координаты: " + f.latlng.toString())
        .openOn(map);
}
circle.on('click' + onCircleClick);
circle.bindPopup('click' + onCircleClick);

L.control.locate().addTo(map);

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

/*===================================================
                        TILE LAYER
===================================================*/

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19
});
CartoDB_DarkMatter.addTo(map);

// Google Map Layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | by Manat and Andrey',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);

// Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | by Manat and Andrey',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);



/*===================================================
                      LAYER CONTROL
===================================================*/

var baseLayers = {
    "Схема": osm,
    "Спутник":googleSat,
    "Гибрид":googleStreets,
};

L.control.layers(baseLayers).addTo(map);


L.Control.geocoder().addTo(map);


