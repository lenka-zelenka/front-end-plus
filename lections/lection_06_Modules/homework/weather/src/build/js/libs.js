// //scripts
var api = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=251f1ae354ad2177c72b0559ce0cdbf9';


getCoordinates = (function () {
    var coordinates= {
        lat: 0,
        long: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);

    var options = {
        enableHighAccuracy: true,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        coordinates.lat = Math.round(parseFloat(crd.latitude) * 100) / 10;
        coordinates.long = Math.round(parseFloat(crd.longitude) * 100) / 100;
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    return {
        coordinates: coordinates
    }
})();
setTimeout(function(){
    console.log(getCoordinates.coordinates.lat)

},5000)
// $("#location").html("Ширина: " + lat + "<br>Долгота: " + long); 

// function  GetWeather(){
//   // jQuery(function($) {
//   //   $.ajax({
//   //     url: 'http://api.openweathermap.org/data/2.5/weather?lat=30&lon=50&APPID=251f1ae354ad2177c72b0559ce0cdbf9',
//   //     success: function (data) {
//   //       var weather = data.shift();
//   //       $("#test").html(html(weather));
//   //     }
//   //   });
//   // });
//   $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=251f1ae354ad2177c72b0559ce0cdbf9', function(a) {

//     // $("#test").html(html(JSON.stringify(a)));
//     var items = {};
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });

//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "#test" );
//   });
// };
// GetWeather();


// $(document).ready(function() {


//   // $("#get-weather").click(function(){
//   //   console.log(lat, long);
//   //   $("#location").html("Ширина: " + lat + "<br>Долгота: " + long);   
//   // });



// });  
