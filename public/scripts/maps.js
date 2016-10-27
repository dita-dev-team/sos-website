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
        center: {lat: -1.44460, lng: 37.04677852},
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
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations = [
        {title: 'Daystar University' ,area:' Athi River' ,students:12000, location: {lat: -1.44460, lng: 37.04959}},
        {title: 'Daystar University' ,area:' Valley Road',students:8000, location: {lat: -1.29718, lng: 36.80276}}
    ];
    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('0091ff');
    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFF24');

    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        var area = locations[i].area;
        var students = locations[i].students;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            area:area,
            students:students,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
        // Two event listeners - one for mouseover, one for mouseout,
        // to change the colors back and forth.
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
        bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
}
// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div><strong>' + marker.title + '</strong><br>' + marker.area +'<br><p><strong></strong>'+marker.students+' Students</p></div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function () {
            infowindow.setMarker(null);
        });
    }


}
function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
    return markerImage;
}
