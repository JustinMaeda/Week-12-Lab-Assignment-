const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Your latitude is " + position.coords.latitude +
  "<br>Your longitude is " + position.coords.longitude;
}


function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "DENIED."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "UNAVAILABLE."
      break;
    case error.TIMEOUT:
      x.innerHTML = "TIMED OUT."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "UNKNOWN ERROR."
      break;
  }
}
