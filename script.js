let map = L.map("map").setView([40.18, 44.51], 7);

const locations = [
  [40.1792, 44.4991, 
    `<b style='color: red'>Yerevan</b><br />
    Population: 1M<br/>
    Capital of Armenia`
  ],
  [40.7894, 43.8475, "Gyumri"],
  [40.7417, 44.8636,"Dilijan"],
  [39.206198, 46.403770,"Kapan"]
];

// const locations = {
//   "Yerevan": [40.1792, 44.4991],
//   "Guyumri": [40.7894, 43.8475,],
//   "Dilijan": [40.7417, 44.8636],
//   "Kapan": [39.206198, 46.403770]
// }

let icon =  L.icon({
  iconUrl: "https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-3d-shiny-blue-map-marker-icon-and-stylish-location-png-image_15948335.png",
  iconSize: [50, 50]
})

// L.marker([40.1792, 44.499], ).addTo(map);

// for(let n = 0; n<locations.length; n++) {
//   console.log(locations[n]);
  
//   let marker = L.marker(locations[n],{icon: icon}).addTo(map);
//   marker.bindPopup(locations[n][2]).openPopup();
// }

const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSB0EhXIEgK-Azps5FI36TSxFNMd7Ilnz4Nw&s";

const bounds = [
  [38.416263, 42.3868618],
  [39.116263, 43.6868618]
]

// const line= L.polyline([
//   [40.1792, 44.4991],
//   [40.7894, 43.8475],
//   [43.0293534,44.5793127]
// ], {
//   color: "blue"
// }).addTo(map)

const polygon= L.polygon([
  [41.1785163,44.1075002],
  [41.2038219,44.8686361],
  [40.7328017,44.6741008],
  [40.8377251,44.0373874]
]).addTo(map)

polygon.bindPopup("Lori area");


L.imageOverlay(imageUrl, bounds).addTo(map)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© Tumo"
}).addTo(map);
