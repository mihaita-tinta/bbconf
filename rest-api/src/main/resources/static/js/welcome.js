var markers = {};
var map;
var ws;

function start() {

    map = L.map('mapid').setView([44.4306476, 26.0519227], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWloYWl0YS10aW50YSIsImEiOiJjazJidTRwaTcxZ3I5M21vYnN6MG9rN2xxIn0.jLnU4GaFY8rrzx4oNZbP3w', {
        maxZoom: 18,
        attribution:
            'BBConf ©',
        id: 'mapbox.streets'
    }).addTo(map);

}

function buildIcon(myCustomColour) {

    return L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:" + myCustomColour + ";' class='marker-pin'></div><i class='material-icons'>face</i>",
        iconSize: [30, 42],
    });
}

function newMarker(id, lat, lng) {
    var icon = buildIcon('#334455d0');

    var marker = L.marker([lat, lng], {icon: icon})
        .addTo(map)
        .bindPopup("Welcome to BBConf <b>" + id +"!</b>")
        .openPopup();

    markers[id] = marker;
}

start();