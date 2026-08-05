let map = L.map("map").setView([40.18, 44.51], 7);

// * locations
// const locations = [
//   [40.1792, 44.4991, 
//     `<b style='color: red'>Yerevan</b><br />
//     Population: 1M<br/>
//     Capital of Armenia`
//   ],
//   [40.7894, 43.8475, "Gyumri"],
//   [40.7417, 44.8636,"Dilijan"],
//   [39.206198, 46.403770,"Kapan"]
// ];

// ? map marker icon
// let icon =  L.icon({
//   iconUrl: "https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-3d-shiny-blue-map-marker-icon-and-stylish-location-png-image_15948335.png",
//   iconSize: [50, 50]
// })

// L.marker([40.1792, 44.499], ).addTo(map);

// ? loop for markering all locations in the matrix
// for(let n = 0; n<locations.length; n++) {
//   console.log(locations[n]);
  
//   let marker = L.marker(locations[n],{icon: icon}).addTo(map);
//   marker.bindPopup(locations[n][2]).openPopup();
// }

// const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSB0EhXIEgK-Azps5FI36TSxFNMd7Ilnz4Nw&s";


// ? creates polygon form being received with matrix of coordinates
// const polygon= L.polygon([
//   [41.1785163,44.1075002],
//   [41.2038219,44.8686361],
//   [40.7328017,44.6741008],
//   [40.8377251,44.0373874]
// ]).addTo(map)

// polygon.bindPopup("Lori area");

// ! FETCH API used to receive data weather forecast
// map.on("click", async (e) => {

//   let lat = e.latlng.lat
//   let lng = e.latlng.lng

  // fetch('https://api.open-meteo.com/v1/forecast?latitude=' + `${lat}` + '&longitude=' + `${lng}` + '&current_weather=true')
  //   .then(response => {
  //     if (!response.ok) throw new Error('Network response was not OK');
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Info:', data);
      
  //     L.popup()
  //       .setLatLng(e.latlng)
  //       .setContent(data.current_weather.temperature + "*C")
  //       .openOn(map)
  //   })
  //   .catch(error => {
  //     console.error('Fetch error:', error);
  //   }); 
        // L.popup()
        //   .setLatLng(e.latlng)
        //   .setContent(`
        //     ${data.city + "<br />" + " " + "<p class='bold_text'>" + data.countryName + "</p>"
              
        //     }
        //     `)
        //   .openOn(map)

      // })
      // .catch(error => {
      //   console.error('Fetch error:', error);
      // });
// })


const marker = L.marker([40.1792, 44.4991], {
  draggable: true
}).addTo(map);

let temp = document.getElementById("temp");

marker.on("dragend", (e) => {
 const position = marker.getLatLng();

 fetch('https://api.open-meteo.com/v1/forecast?latitude=' + position.lat + '&longitude=' + position.lng + '&current_weather=true') 
   .then(response => {
      if (!response.ok) throw new Error('Network response was not OK');
      return response.json();
    })
   .then(data => {
			temp.innerHTML = " "
      temp.innerText += `${data.current_weather.temperature} C`;
      })
   .catch(error => {
  		console.error('Fetch error:', error);
  });

});

// L.circle([40.1792, 44.4991], {
//   radius: 50000,
//   color: "red"
// }).addTo(map)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© Tumo"
}).addTo(map);
