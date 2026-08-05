let map = L.map("map").setView([40.18, 44.51], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© Tumo"
}).addTo(map);
