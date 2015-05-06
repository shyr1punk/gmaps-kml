var map;
var path = [];
function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 7,
        center: new google.maps.LatLng(29.2586, -83.58166)
    });
    $.getJSON('lines.json', function(data) {
        $.each(data.lines, function (idx, line) {
            var coords = [];
            $.each(line, function (idx2, segment) {
                coords.push(new google.maps.LatLng(segment[1], segment[0]));
            });
            path[idx] = new google.maps.Polyline({
                path: coords,
                map: map,
                strokeColor: '#FF0000'
            });
        });
    });
}

google.maps.event.addDomListener(window, 'load', initialize);