function initMap() {
  var map = L.map("contact-map").setView([51.505, -0.09], 13);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "",
    }
  ).addTo(map);

  L.marker([51.5, -0.09]).addTo(map).bindPopup("Location Seneff").openPopup();
}
