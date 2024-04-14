function initMap() {
  var redDeerPoly = { lat: 52.2736, lng: -113.8089 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: redDeerPoly
  });

  var marker = new google.maps.Marker({
    position: redDeerPoly,
    map: map,
    title: 'Red Deer Polytechnic'
  });

  var directionsService = new google.maps.DirectionsService();

  var directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('search-input'), {
      types: ['geocode']
    }
  );

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    calculateAndDisplayRoute(directionsService, directionsRenderer, place.geometry.location);
  });

  var searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      calculateAndDisplayRoute(directionsService, directionsRenderer, searchInput.value);
    }
  });

  function calculateAndDisplayRoute(directionsService, directionsRenderer, origin) {
    directionsService.route({
      origin: origin,
      destination: redDeerPoly,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      } else {
        alert('Directions request failed due to ' + status);
      }
    });
  }
}
