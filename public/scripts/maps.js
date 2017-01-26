
var mymap = L.map('map').setView([-1.4410932, 37.0449278], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/mtotomgonjwa.2of0mcnl/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXRvdG9tZ29uandhIiwiYSI6ImNpeWVpeXJzMzAwOTEzM3FwcDV5bnY5NWsifQ.zZ_ILTdPpKgrwQyd7p88pg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mtotomgonjwa.2of0mcnl',
    accessToken: 'pk.eyJ1IjoibXRvdG9tZ29uandhIiwiYSI6ImNpeWVpeXJzMzAwOTEzM3FwcDV5bnY5NWsifQ.zZ_ILTdPpKgrwQyd7p88pg'
}).addTo(mymap);


var marker = L.marker([-1.4410932, 37.0449278]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>Welcome to Daystar");