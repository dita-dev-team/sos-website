var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/mtotomgonjwa.2of0mcnl/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXRvdG9tZ29uandhIiwiYSI6ImNpeWVpeXJzMzAwOTEzM3FwcDV5bnY5NWsifQ.zZ_ILTdPpKgrwQyd7p88pg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mtotomgonjwa.2of0mcnl',
    accessToken: 'pk.eyJ1IjoibXRvdG9tZ29uandhIiwiYSI6ImNpeWVpeXJzMzAwOTEzM3FwcDV5bnY5NWsifQ.zZ_ILTdPpKgrwQyd7p88pg'
}).addTo(map);


(function () {
    map.setView([-1.3837743,36.9367862], 11);
    var markers = [];

    var locations = [
        {title: 'Daystar University Athi River', location: {lat: -1.4431146, lng: 37.0490923}},
        {title: 'Daystar University Valley Road', location: {lat: -1.2969668, lng: 36.8018029}}
    ];
    //Plot Markers.

    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;

        var popupText = '<strong>' + title + '</strong> <br>  on  location. Coordinates: (' + position + ')';
        var marker = new L.Marker(position);

        marker.bindPopup(popupText);

        marker.on('mouseover', function (e) {
            this.openPopup();
        });
        marker.on('mouseout', function (e) {
            this.closePopup();
        });

        markers.push(marker);
    }
    var daystarcampuses = L.layerGroup(markers);

    map.addLayer(daystarcampuses);


    var overlayMaps = {
        "Daystar University": daystarcampuses
    };

    L.control.layers(null, overlayMaps).addTo(map);


})();