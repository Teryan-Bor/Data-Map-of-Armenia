# Armenia Regional Data Map

An interactive map of Armenia that displays various regional statistics using color-coded visualization. Each region is colored based on the selected data category, making it easy to compare regions at a glance.

## Features

- Interactive map divided into all 11 regions of Armenia
- Color-coded regions based on selected data type
- Hover tooltip showing region name and value
- Click on a region to see more detailed information
- Real-time temperature data fetched from the Open-Meteo API

## Data Categories

| Button | Description | Unit |
|---|---|---|
| Population | Number of residents per region | people |
| Schools | Number of schools per region | units |
| Tumo Centers | Number of TUMO centers per region | units |
| Temperature | Current average temperature | °C |
| Green | Grass and vegetation coverage level | level |
| Road | Total road length per region | km |
| University | Number of universities per region | units |

## Project Structure

```
├── index.html
├── style.css
├── script.js
├── data/
│   ├── armenia-simple.geojson
│   ├── population.json
│   ├── schools.json
│   ├── tumo.json
│   ├── grass.json
│   ├── road.json
│   └── univer.json
└── README.md
```

> **Note:** The `data/` folder is excluded from version control via `.gitignore`.

## Technologies Used

- [Leaflet.js](https://leafletjs.com/) — interactive map rendering
- [Open-Meteo API](https://open-meteo.com/) — real-time weather/temperature data
- GeoJSON — region boundary data
- Vanilla JavaScript (Fetch API) — loading data from `.json` files
- CSS3 — styling and layout

## How It Works

1. The map loads the `armenia-simple.geojson` file to draw the region boundaries.
2. When a button is clicked, a `fetch` request loads the corresponding `.json` data file.
3. Each region is colored based on its value using a color scale function.
4. Each region contains historical information. You can see that by clicking on the region.
5. Temperature data is fetched live from the Open-Meteo API using the coordinates of each region.

## Purpose

This project was built to practice:
- Using the **Fetch API** to load data from local `.json` files
- Working with **GeoJSON** and **Leaflet.js** to render geographic data
- Displaying data in a clear and visually understandable way using color gradients

## Getting Started

Clone the repository and open `index.html` in your browser. No build tools or installation required.

```bash
git clone <your-repo-url>
cd <project-folder>
# open index.html in your browser
```

> Make sure to serve the project through a local server (e.g. VS Code Live Server) so that `fetch` requests to local files work correctly.

[Live Demo]: https://teryan-bor.github.io/Data-Map-of-Armenia/