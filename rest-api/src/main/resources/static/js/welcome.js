var markers = {};
var map;

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
    var lat = 5.5,
        lon = 5.5;

    var caption = '', // '<i class="fa fa-eye" />' or 'abc' or ...
        size = 10,    // size of the marker
        border = 2;   // border thickness

    var markerHtmlStyles = ' \
    background-color: ' + myCustomColour + '; \
    width: '+ (size * 3) +'px; \
    height: '+ (size * 3) +'px; \
    display: block; \
    left: '+ (size * -1.5) +'px; \
    top: '+ (size * -1.5) +'px; \
    position: relative; \
    border-radius: '+ (size * 3) +'px '+ (size * 3) +'px 0; \
    transform: rotate(45deg); \
    border: '+border+'px solid #FFFFFF;\
    ';

    var captionStyles = '\
    transform: rotate(-45deg); \
    display:block; \
    width: '+ (size * 3) +'px; \
    text-align: center; \
    line-height: '+ (size * 3) +'px; \
    ';

    return L.divIcon({
        className: "color-pin-" + myCustomColour.replace('#', ''),

        // on another project this is needed: [0, size*2 + border/2]
        iconAnchor: [border, size*2 + border*2],

        labelAnchor: [-(size/2), 0],
        popupAnchor: [0, -(size*3 + border)],
        html: '<span style="' + markerHtmlStyles + '"><span style="'+captionStyles+'">'+ caption + '</span></span>'
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