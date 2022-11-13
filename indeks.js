let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -7.774927, lng:  110.374527 },
    zoom: 20,
  });
}

window.initMap = initMap;


