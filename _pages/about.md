---
layout: page
title: About
permalink: /about
---

# About me

I'm Esben, currently the co-director of [Apart](https://apartresearch.com).

- [Twitter](https://x.com/{{ site.twitter_username }})
- [Scholar](https://scholar.google.com/citations?user=SH5diRUAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/esbenkc/)
- [Github](https://github.com/esbenkc)
- [What is up?](/now)

<img src="assets/brain_time.gif" style="width: 5rem;" alt="MRI scan rotating"/>

For journalists: [Bio & images](https://kran.ai/pro)

If you think it would be valuable for us to connect, [let us have a chat](https://zcal.co/esben/15min) (please remember to write a reason). You can contact me at esben at kran dot ai. I'm very open to [anonymous feedback](https://admonymous.co/esbenkran).

<script>

function addMap(parent) {
  let map = document.createElement("div");
  map.id = "map";
  parent.appendChild(map);
}

addMap(document.getElementsByTagName("content")[0]);

function map() {
  let map = L.map("map").setView([55.678974, 12.5486242], 1.45);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  // Set the max bounds
  map.setMaxBounds([
    [-80, -180],
    [85, 160],
  ]);

  locations = [
    { location: "Copenhagen", lat: 55.6761, long: 12.5683, lived: true },
    { location: "Aarhus", lat: 56.1629, long: 10.2039, lived: true },
    { location: "Grenaa", lat: 56.415, long: 10.8794, lived: true },
    { location: "Vorgod-Barde", lat: 56.1333, long: 8.9333, lived: true },
    { location: "San Francisco", lat: 37.7749, long: -122.4194, lived: true },
    { location: "Jotunheimen", lat: 61.55, long: 8.3833 },
    { location: "Oslo", lat: 59.9139, long: 10.7522 },
    { location: "Stockholm", lat: 59.3293, long: 18.0686 },
    { location: "Berlin", lat: 52.52, long: 13.405 },
    { location: "New Orleans", lat: 29.9511, long: -90.0715 },
    { location: "Chiang Mai", lat: 18.7066, long: 98.9817, lived: true },
    { location: "Bangkok", lat: 13.7563, long: 100.5018 },
    { location: "Busan", lat: 35.1796, long: 129.0756 },
    { location: "Seoul", lat: 37.5665, long: 126.978 },
    { location: "Jeju", lat: 33.489, long: 126.4983 },
    { location: "Tokyo", lat: 35.6895, long: 139.6917 },
    { location: "Hiroshima", lat: 34.3853, long: 132.4553 },
    { location: "Hakodate", lat: 41.7688, long: 140.7291 },
    { location: "Himeji", lat: 34.8394, long: 134.6934 },
    { location: "Shinjuku", lat: 35.6938, long: 139.7034 },
    { location: "Amsterdam", lat: 52.3676, long: 4.9041 },
    { location: "Rotterdam", lat: 51.9225, long: 4.4792 },
    { location: "London", lat: 51.5074, long: -0.1278, lived: true },
    { location: "Oxford", lat: 51.752, long: -1.2577 },
    { location: "Cambridge", lat: 52.2053, long: 0.1218 },
    { location: "Edinburgh", lat: 55.9533, long: -3.1883 },
    { location: "Los Angeles", lat: 34.0522, long: -118.2437 },
    { location: "Santa Cruz", lat: 36.9741, long: -122.0308, lived: true },
    { location: "Ko Lanta", lat: 7.6244, long: 99.079 },
    { location: "Putan", lat: 27.9861, long: 86.9228 },
    { location: "Saint Petersburg", lat: 59.9343, long: 30.3351 },
    { location: "Tallinn", lat: 59.437, long: 24.7536 },
    { location: "Tartu", lat: 58.3776, long: 26.729 },
    { location: "Warsaw", lat: 52.2297, long: 21.0122 },
    { location: "Vienna", lat: 48.2082, long: 16.3738 },
    { location: "Puerto Rico", lat: 18.2208, long: -66.5901, lived: true },
    { location: "Bahamas", lat: 25.0343, long: -77.3963, lived: true },
    { location: "Budapest", lat: 47.4979, long: 19.0402 },
    { location: "Bratislava", lat: 48.1486, long: 17.1077 },
    { location: "Paris", lat: 48.8566, long: 2.3522 },
    { location: "Malaga", lat: 36.7213, long: -4.4214 },
    { location: "Naples", lat: 40.8518, long: 14.2681 },
    { location: "Sorrento", lat: 40.6263, long: 14.3757 },
    { location: "Alp D'huez", lat: 45.091, long: 6.0712 },
    { location: "Faro", lat: 37.0194, long: -7.9322 },
    { location: "Seattle", lat: 47.6062, long: -122.3321 },
    { location: "Reykjavik", lat: 64.1466, long: -21.9426 },
    { location: "Bergen", lat: 60.3913, long: 5.3221 },
    { location: "Munich", lat: 48.1351, long: 11.582 },
    { location: "Cologne", lat: 50.9375, long: 6.9603 },
    { location: "Hamburg", lat: 53.5511, long: 9.9937 },
    { location: "Frankfurt", lat: 50.1109, long: 8.6821 },
    // Adding the events sites (event: true) Mexico City, Georgia Tech, Carnegie Mellon University, Toronto, Boston, São Paulo, Ho Chi Minh City, Bengaluru, Sydney, Tel Aviv, Warsaw, Edinburgh, Uppsala, Delft, Amsterdam
    { location: "Mexico City", lat: 19.4326, long: -99.1332, event: true },
    { location: "Georgia Tech", lat: 33.7756, long: -84.3963, event: true },
    {
      location: "Carnegie Mellon University",
      lat: 40.4443,
      long: -79.9436,
      event: true,
    },
    { location: "Toronto", lat: 43.6532, long: -79.3832, event: true },
    { location: "Boston", lat: 42.3601, long: -71.0589, event: true },
    { location: "São Paulo", lat: -23.5505, long: -46.6333, event: true },
    {
      location: "Ho Chi Minh City",
      lat: 10.8231,
      long: 106.6297,
      event: true,
    },
    { location: "Bengaluru", lat: 12.9716, long: 77.5946, event: true },
    { location: "Sydney", lat: -33.8688, long: 151.2093, event: true },
    { location: "Tel Aviv", lat: 32.0853, long: 34.7818, event: true },
    { location: "Warsaw", lat: 52.2297, long: 21.0122, event: true },
    { location: "Edinburgh", lat: 55.9533, long: -3.1883, event: true },
    { location: "Uppsala", lat: 59.8586, long: 17.6389, event: true },
    { location: "Delft", lat: 52.0116, long: 4.3571, event: true },
    { location: "Amsterdam", lat: 52.3676, long: 4.9041, event: true },
  ];

  // Replicate the above list with the cities and with the code `event: true` for each city

  for (var i = 0; i < locations.length; i++) {
    var marker = L.circleMarker([locations[i].lat, locations[i].long], {
      color: locations[i].lived
        ? "blue"
        : locations[i].event
        ? "#32D990"
        : "#fb3948",
      fillOpacity: 0.5,
      radius: 3,
    }).addTo(map);
    marker.bindPopup(
      locations[i].location +
        (locations[i].lived
          ? " (lived here)"
          : locations[i].event
          ? " (hosted event here)"
          : "")
    );
  }
}

map();
</script>
