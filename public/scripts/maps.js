var map;
// Create a new blank array for all the listing markers.
var markers = [];


function initMap() {
    var styles = [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{"hue": "#ff0000"}, {"saturation": -100}, {"lightness": -30}]
    }, {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#ffffff"}]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{"color": "#353535"}]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{"color": "#656565"}]
    }, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"color": "#505050"}]}, {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#808080"}]
    }, {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#454545"}]}];
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -1.4414666, lng: 37.04677852},
        zoom: 16,
        // styles:styles,
        mapTypeId: "OSM",
        mapTypeControl: false,
        streetViewControl: false
    });

    //Define OSM map type pointing at the OpenStreetMap tile server
    map.mapTypes.set("OSM", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 20
    }));
    var tribeca = {lat: -1.4414666, lng: 37.04677852};
    var marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: 'Daystar Universtity!'
    });


}
