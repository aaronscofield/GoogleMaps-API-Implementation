let map;

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4jMDQbID1q_Y_GMCNX3VS1tbe36HXyoc&callback=initMap';
script.async = true;

// Initialize map in script file instead of HTML with <script> tags

window.initMap = function(){
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.98197832869841, lng: -75.15303557509326},
    zoom: 18,
  });
};

document.head.appendChild(script);